import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
    Card,
    CardContent, CardFooter
} from "@/components/ui/card"

import AccountFormStepOne from "@/components/Admin/AccountFormStepOne";

import { registerUser } from "@/lib/auth";
import { addTeacherData } from "@/lib/profile";

export default function AccountForm() {
    const methods = useForm();
    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [extensionName, setExtensionName] = useState<string>("");
    const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
    const [gender, setGender] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [mobileNumber, setMobileNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const isFieldsInvalid = (
        firstName === "" ||
        lastName === "" ||
        extensionName === "" ||
        birthDate === undefined ||
        gender === "" ||
        email === "" ||
        mobileNumber === "" ||
        password === "" ||
        role === ""
    )

    const clearForm = () => {
        setFirstName("");
        setMiddleName("");
        setLastName("");
        setExtensionName("");
        setBirthDate(undefined);
        setGender("");
        setRole("");
        setEmail("");
        setMobileNumber("");
        setPassword("");
    }

    const handleSubmit = async () => {
        setIsLoading(true);

        const result = await registerUser(
            email,
            password,
            firstName,
            lastName,
        );

        setIsLoading(false);

        if (result.success) {
            const userId = result.user?.id;

            const teacherData = {
                firstName,
                middleName,
                lastName,
                extensionName,
                birthDate,
                gender,
                mobileNumber,
                role
            }

            const addTeacherResult = await addTeacherData(userId, teacherData);

            if (addTeacherResult.success) {
                clearForm();
                toast({ title: "Account registration successful" });
                window.location.href = "/admin/users";
            } else {
                toast({ title: "Account registration unsuccessful" });
            }
        } else {
            toast({ title: "Account registration unsuccessful" });
        }
    }

    return (
        <Card className="w-full min-h-[75vh] space-y-4 p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Account Creation Form</h2>
            </div>

            <CardContent className="space-y-4 p-0">
                <FormProvider {...methods}>
                    <form className="space-y-3">
                        <AccountFormStepOne
                            firstName={firstName}
                            middleName={middleName}
                            lastName={lastName}
                            extensionName={extensionName}
                            birthDate={birthDate}
                            gender={gender}
                            role={role}
                            email={email}
                            mobileNumber={mobileNumber}
                            password={password}
                            setFirstName={setFirstName}
                            setMiddleName={setMiddleName}
                            setLastName={setLastName}
                            setExtensionName={setExtensionName}
                            setBirthDate={setBirthDate}
                            setGender={setGender}
                            setRole={setRole}
                            setEmail={setEmail}
                            setMobileNumber={setMobileNumber}
                            setPassword={setPassword}
                        />
                    </form>
                </FormProvider>
            </CardContent>
            <CardFooter className="flex p-0 justify-end">
                <Button
                    onClick={handleSubmit}
                    disabled={isLoading || isFieldsInvalid}
                >
                    {isLoading ? <Spinner /> : "Register"}
                </Button>
            </CardFooter>
        </Card>
    )
}
