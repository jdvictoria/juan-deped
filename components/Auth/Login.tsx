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
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                    User Login
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <EmailInput />
                    <PasswordInput label={"Password"} mode={"Login"} />

                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
