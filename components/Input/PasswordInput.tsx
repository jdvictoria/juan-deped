import { useState } from "react";
import Link from "next/link";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

interface InputProps {
    label: string;
    mode: string;
    value: string;
    setValue: (value: string) => void;
    required: boolean;
}

const passwordSchema = z.object({
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" })
        .regex(/[A-Z]/, { message: "Password must contain at least 1 capital letter" })
        .regex(/[0-9]/, { message: "Password must contain at least 1 number" })
        .regex(/[\W_]/, { message: "Password must contain at least 1 symbol" }),
});

export default function PasswordInput({ label, mode, value, setValue, required }: InputProps) {
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        const result = passwordSchema.safeParse({ password: newValue });
        if (!result.success) {
            setError(result.error.errors[0]?.message || "Invalid input");
        } else {
            setError(null);
        }
    };

    return (
        <div>
            <FormField
                name="password"
                render={() => (
                    <FormItem className="flex flex-col space-y-1">
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={value}
                                onChange={handleChange}
                                autoComplete="current-password"
                                required={required}
                            />
                        </FormControl>
                        {error && <FormMessage>{error}</FormMessage>}
                    </FormItem>
                )}
            />

            {mode === "Login" && (
                <div className="flex justify-end mt-2">
                    <Link href="#" className="text-sm font-medium text-primary hover:underline">
                        Forgot Password?
                    </Link>
                </div>
            )}
        </div>
    );
}
