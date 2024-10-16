import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import EmailInput from "@/components/Input/EmailInput";
import PasswordInput from "@/components/Input/PasswordInput";

export default function Login() {
    const methods = useForm();
    const onSubmit = (data: any) => console.log(data);
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

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

                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </FormProvider>
            </CardContent>
        </Card>
    )
}
