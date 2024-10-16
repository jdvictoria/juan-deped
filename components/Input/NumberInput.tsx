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
    value: string;
    setValue: (value: string) => void;
    required: boolean;
}

const mobileNumberSchema = z.object({
    mobileNumber: z
        .string()
        .regex(/^09\d{9}$/, { message: "Mobile number must start with 09 and be 11 digits long" })
});

export default function NumberInput({
    label,
    value,
    setValue,
    required
}: InputProps) {
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        const result = mobileNumberSchema.safeParse({ mobileNumber: newValue });
        if (!result.success) {
            setError(result.error.errors[0]?.message || "Invalid input");
        } else {
            setError(null);
        }
    };

    return (
        <FormField
            name="mobileNumber"
            render={() => (
                <FormItem className="flex flex-col space-y-1">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            id="mobileNumber"
                            type="tel"
                            placeholder="09XXXXXXXXX"
                            value={value}
                            onChange={handleChange}
                            required={required}
                        />
                    </FormControl>
                    {error && <FormMessage>{error}</FormMessage>}
                </FormItem>
            )}
        />
    );
}
