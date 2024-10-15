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

interface MobileInputProps {
    label: string;
}

const mobileNumberSchema = z.object({
    mobileNumber: z
        .string()
        .regex(/^09\d{9}$/, { message: "Mobile number must start with 09 and be 11 digits long" })
});

type MobileNumberFormValues = z.infer<typeof mobileNumberSchema>;

export default function NumberInput({ label }: MobileInputProps) {
    const form = useForm<MobileNumberFormValues>({
        resolver: zodResolver(mobileNumberSchema),
    });

    function onSubmit(values: MobileNumberFormValues) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                        <FormItem className="flex flex-col space-y-2">
                            <FormLabel>{label}</FormLabel>
                            <FormControl>
                                <Input
                                    id="mobileNumber"
                                    type="tel"
                                    placeholder="09XXXXXXXXX"
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
