import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import NameInput from "@/components/input/NameInput";
import EmailInput from "@/components/input/EmailInput";
import PasswordInput from "@/components/input/PasswordInput";
import SelectInput from "@/components/input/SelectInput";

import { ChevronLeft } from "lucide-react";

import schoolsData from "@/data/schools.json";
import rolesData from "@/data/roles.json";
import LicenseInput from "@/components/input/LicenseInput";

export default function AuthRegister() {
    const [step, setStep] = useState<number>(1);

    const onButtonClick = () => {
        if (step === 1) {
            setStep(2);
        }
    };

    const [schools, setSchools] = useState<string[]>([]);
    const [roles, setRoles] = useState<string[]>([]);

    useEffect(() => {
        setSchools(schoolsData);
        setRoles(rolesData);
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-row text-xl font-bold tracking-tight text-foreground items-center">
                    {step === 2 && (
                        <button onClick={() => setStep(1)} className="flex items-center focus:outline-none">
                            <ChevronLeft/>
                        </button>
                    )}
                    User Registration
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {step === 1 ? (
                        <>
                            <NameInput />
                            <EmailInput />

                            <div className="flex space-x-4">
                                <PasswordInput label={"Password"} mode={"Register"} />
                                <PasswordInput label={"Confirm Password"} mode={"Register"}/>
                            </div>
                        </>
                    ) : (
                        <>
                            <SelectInput label={"School"} data={schools} />
                            <SelectInput label={"Role"} data={roles} />
                            <LicenseInput />
                        </>
                    )}

                <Button type={step === 1 ? "button" : "submit"} className="w-full" onClick={onButtonClick}>
                    {step === 1 ? "Next" : "Register"}
                </Button>
            </form>
            </CardContent>
        </Card>
    )
}