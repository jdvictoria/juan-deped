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

const nameSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Name must not contain symbols or numbers" }),
});

export default function TextInput({
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

        const result = nameSchema.safeParse({ name: newValue });
        if (!result.success) {
            setError(result.error.errors[0]?.message || "Invalid input");
        } else {
            setError(null);
        }
    };

    return (
        <div>
            <FormField
                name="name"
                render={() => (
                    <FormItem className="flex flex-col space-y-1">
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Input
                                id="name"
                                type="text"
                                placeholder={placeholder}
                                value={value}
                                onChange={handleChange}
                                autoComplete="name"
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
