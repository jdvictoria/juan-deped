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

interface LicenseInputProps {
    label: string;
    placeholder: string;
}

const licenseSchema = z.object({
    license: z.string().min(2, { message: "License must be at least 2 characters" })
});

type LicenseFormValues = z.infer<typeof licenseSchema>;

export default function LicenseInput({ label, placeholder }: LicenseInputProps) {
    const form = useForm<LicenseFormValues>({
        resolver: zodResolver(licenseSchema),
    });

    function onSubmit(values: LicenseFormValues) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="license"
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
