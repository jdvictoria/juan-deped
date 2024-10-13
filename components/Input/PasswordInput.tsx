import Link from "next/link";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface InputProps {
    label: string;
    mode: string;
}

export default function PasswordInput({
    label,
    mode
}: InputProps) {
    return (
        <div>
            <Label htmlFor="password">{label}</Label>
            <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
            />

            {mode === "Login" && (
                <div className="flex justify-end mt-2">
                    <Link href="#" className="text-sm font-medium text-primary hover:underline">
                        Forgot Password?
                    </Link>
                </div>
            )}
        </div>
    )
}
