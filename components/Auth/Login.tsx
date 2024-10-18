
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import EmailInput from "@/components/Input/EmailInput";
import PasswordInput from "@/components/Input/PasswordInput";

import { loginUser } from "@/lib/auth";

export default function Login() {
    const methods = useForm();
    const router = useRouter();
    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const clearForm = () => {
        setEmail("");
        setPassword("");
    }

    const handleSubmit = async () => {
        setIsLoading(true);

        const result = await loginUser(email, password);

        setIsLoading(false);

        if (result.success) {
            clearForm();
            toast({ title: "Login Successful" });
            router.push(`/${result.role}`);
        } else {
            toast({ title: "Login Unsuccessful" });
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                    User Login
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
                <FormProvider {...methods}>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <EmailInput
                            label={"Email Address"}
                            placeholder={"jdelacruz@gmail.com"}
                            value={email}
                            setValue={setEmail}
                            required={true}
                        />
                        <PasswordInput
                            label={"Password"}
                            mode={"Login"}
                            value={password}
                            setValue={setPassword}
                            required={true}
                        />
                    </form>
                </FormProvider>
                <Button
                    className="w-full"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner /> : "Login"}
                </Button>
            </CardContent>
        </Card>
    )
}
