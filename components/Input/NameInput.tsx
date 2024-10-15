import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

interface NameInputProps {
    label: string;
    placeholder: string;
}

const nameSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" })
});

type NameFormValues = z.infer<typeof nameSchema>;

export default function NameInput({ label, placeholder }: NameInputProps) {
    const form = useForm<NameFormValues>({
        resolver: zodResolver(nameSchema),
    });

    function onSubmit(values: NameFormValues) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="flex flex-col space-y-2">
                            <FormLabel>{label}</FormLabel>
                            <FormControl>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder={placeholder}
                                    autoComplete="name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
