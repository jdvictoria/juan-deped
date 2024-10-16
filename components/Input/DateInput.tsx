import { useState, useEffect, useMemo } from "react";
import { z } from "zod";

import { CalendarIcon } from "lucide-react";
import {
    format,
    startOfYear,
    endOfYear,
    eachMonthOfInterval
} from "date-fns";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface InputProps {
    label: string;
    value: Date | undefined;
    setValue: (value: Date) => void;
    required: boolean;
}

const dateSchema = z.object({
    value: z.date({
        required_error: "A date is required.",
    }),
});

export default function DateInput({ label, value, setValue, required }: InputProps) {
    const [error, setError] = useState<string | null>(null);
    const [month, setMonth] = useState<number>(value ? value.getMonth() : new Date().getMonth());
    const [year, setYear] = useState<number>(value ? value.getFullYear() : new Date().getFullYear());

    const years = useMemo(() => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);
    }, []);

    const months = useMemo(() => {
        if (year) {
            return eachMonthOfInterval({
                start: startOfYear(new Date(year, 0, 1)),
                end: endOfYear(new Date(year, 0, 1))
            });
        }
        return [];
    }, [year]);

    useEffect(() => {
        if (value) {
            setMonth(value.getMonth());
            setYear(value.getFullYear());
        }
    }, [value]);

    const handleYearChange = (selectedYear: string) => {
        const newYear = parseInt(selectedYear, 10);
        setYear(newYear);
        if (value) {
            const newDate = new Date(value);
            newDate.setFullYear(newYear);
            setValue(newDate);
        }
    };

    const handleMonthChange = (selectedMonth: string) => {
        const newMonth = parseInt(selectedMonth, 10);
        setMonth(newMonth);
        if (value) {
            const newDate = new Date(value);
            newDate.setMonth(newMonth);
            setValue(newDate);
        } else {
            setValue(new Date(year, newMonth, 1));
        }
    };

    const handleDateSelect = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            const result = dateSchema.safeParse({ value: selectedDate });
            if (!result.success) {
                setError(result.error.errors[0]?.message || "Invalid date");
            } else {
                setError(null);
                setValue(selectedDate);
            }
        }
    };

    return (
        <FormField
            name="value"
            render={() => (
                <FormItem className="flex flex-col space-y-1">
                    <FormLabel>{label}</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !value && "text-muted-foreground"
                                    )}
                                >
                                    {value ? (
                                        format(value, "PPP")
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <div className="flex justify-between p-2 space-x-1">
                                <Select onValueChange={handleYearChange} value={year.toString()}>
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue placeholder="Year" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {years.map((y) => (
                                            <SelectItem key={y} value={y.toString()}>
                                                {y}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select onValueChange={handleMonthChange} value={month.toString()}>
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue placeholder="Month" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {months.map((m, index) => (
                                            <SelectItem key={index} value={index.toString()}>
                                                {format(m, "MMMM")}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <Calendar
                                mode="single"
                                selected={value}
                                onSelect={handleDateSelect}
                                month={new Date(year, month)}
                                onMonthChange={(newMonth) => {
                                    setMonth(newMonth.getMonth());
                                    setYear(newMonth.getFullYear());
                                }}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    {error && <FormMessage>{error}</FormMessage>}
                </FormItem>
            )}
        />
    );
}
