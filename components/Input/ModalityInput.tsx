import { useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

interface ModalityInputProps {
    data: {
        id: string;
        label: string;
    }[];
}

const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
})

export default function ModalityInput({ data }: ModalityInputProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            items: [],
        },
    });

    return (
        <Form {...form}>
            <form className="space-y-8">
                <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                        <FormItem className="flex flex-col space-y-2">
                            <FormLabel>Preferred Learning Modality/ies</FormLabel>
                            <div className="grid grid-cols-2 gap-4">
                                {data.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="items"
                                        render={({ field }) => {
                                            return (
                                                <FormItem
                                                    key={item.id}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(item.id)}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, item.id])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== item.id
                                                                        )
                                                                    );
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            );
                                        }}
                                    />
                                ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
