import { useState } from "react";
import { z } from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

interface ModalityInputProps {
    data: {
        id: string;
        label: string;
    }[];
    value: string[];
    setValue: (value: string[]) => void;
}

const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.length > 0, {
        message: "You have to select at least one item.",
    }),
});

export default function ModalityInput({ data, value, setValue }: ModalityInputProps) {
    const [error, setError] = useState<string | null>(null);

    const handleCheckboxChange = (itemId: string) => {
        const updatedItems = value.includes(itemId)
            ? value.filter((id) => id !== itemId)
            : [...value, itemId];

        setValue(updatedItems);

        const result = FormSchema.safeParse({ items: updatedItems });
        if (!result.success) {
            setError(result.error.errors[0]?.message || "Invalid input");
        } else {
            setError(null);
        }
    };

    return (
        <div>
            <FormItem className="flex flex-col space-y-2">
                <FormLabel className="text-sm font-semibold">Preferred Learning Modality/ies</FormLabel>
                <div className="grid grid-cols-2 gap-4">
                    {data.map((item) => (
                        <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                        >
                            <FormControl>
                                <Checkbox
                                    checked={value.includes(item.id)}
                                    onCheckedChange={() => handleCheckboxChange(item.id)}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">
                                {item.label}
                            </FormLabel>
                        </FormItem>
                    ))}
                </div>
                {error && <FormMessage>{error}</FormMessage>}
            </FormItem>
        </div>
    );
}
