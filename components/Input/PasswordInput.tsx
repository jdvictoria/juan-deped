import Link from "next/link";

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

interface PasswordInputProps {
    label: string;
    mode: string;
}

const passwordSchema = z.object({
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
});

type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function PasswordInput({ label, mode }: PasswordInputProps) {
    const form = useForm<PasswordFormValues>({
        resolver: zodResolver(passwordSchema),
    });

    function onSubmit(values: PasswordFormValues) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="flex flex-col space-y-2">
                            <FormLabel>{label}</FormLabel>
                            <FormControl>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
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
            </form>
        </Form>
    );
}
