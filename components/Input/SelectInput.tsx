import { useState } from "react";
import { z } from "zod";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

interface InputProps {
    label: string;
    data: string[];
    value: string;
    setValue: (value: string) => void;
    required: boolean;
}

const selectSchema = z.object({
    select: z.string().min(1, { message: "Please select an item" })
});

export default function SelectInput({
    label,
    data,
    value,
    setValue,
    required
}: InputProps) {
    const [error, setError] = useState<string | null>(null);

    const handleChange = (newValue: string) => {
        setValue(newValue);

        const result = selectSchema.safeParse({ select: newValue });
        if (!result.success) {
            setError(result.error.errors[0]?.message || "Invalid selection");
        } else {
            setError(null);
        }
    };

    return (
        <FormField
            name="select"
            render={() => (
                <FormItem className="flex flex-col space-y-1">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={handleChange}
                            required={required}
                        >
                            <SelectTrigger className="border rounded-md p-2 w-full">
                                <SelectValue placeholder={value || "Select an item"} />
                            </SelectTrigger>
                            <SelectContent>
                                {data.map((item: string, index: number) => (
                                    <SelectItem key={index} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormControl>
                    {error && <FormMessage>{error}</FormMessage>}
                </FormItem>
            )}
        />
    );
}
