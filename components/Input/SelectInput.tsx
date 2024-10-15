import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
    Form,
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

interface SelectInputProps {
    label: string;
    data: string[];
}

const selectSchema = z.object({
    select: z.string().min(1, { message: "Please select an item" })
});

type SelectFormValues = z.infer<typeof selectSchema>;

export default function SelectInput({ label, data }: SelectInputProps) {
    const form = useForm<SelectFormValues>({
        resolver: zodResolver(selectSchema),
    });

    function onSubmit(values: SelectFormValues) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="select"
                    render={({ field }) => (
                        <FormItem className="flex flex-col space-y-2">
                            <FormLabel>{label}</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} required>
                                    <SelectTrigger className="border rounded-md p-2 w-full">
                                        <SelectValue placeholder={`${data[0]}`} />
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
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
