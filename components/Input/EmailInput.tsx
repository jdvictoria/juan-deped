import { useState } from "react";
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
    placeholder: string;
    value: string;
    setValue: (value: string) => void;
    required: boolean;
}

const emailSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email address" }),
});

export default function EmailInput({
    label,
    placeholder,
    value,
    setValue,
    required,
}: InputProps) {
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        const result = emailSchema.safeParse({ email: newValue });
        if (!result.success) {
            setError(result.error.errors[0]?.message || "Invalid input");
        } else {
            setError(null);
        }
    };

    return (
        <div>
            <FormField
                name="email"
                render={() => (
                    <FormItem className="flex flex-col space-y-1">
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Input
                                id="email"
                                type="email"
                                placeholder={placeholder}
                                value={value}
                                onChange={handleChange}
                                autoComplete="email"
                                required={required}
                            />
                        </FormControl>
                        {error && <FormMessage>{error}</FormMessage>}
                    </FormItem>
                )}
            />
        </div>
    );
}
