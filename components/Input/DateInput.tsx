import { useState, useEffect, useMemo } from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { CalendarIcon } from "lucide-react"

import {
    format,
    startOfYear,
    endOfYear,
    eachMonthOfInterval
} from "date-fns"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface DateInputProps {
    label: string;
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
}

const dateSchema = z.object({
    date: z.date({
        required_error: "A date of birth is required.",
    }),
})

type DateFormValues = z.infer<typeof dateSchema>;

export default function DateInput({ label, date, setDate }: DateInputProps) {
    const form = useForm<DateFormValues>({
        resolver: zodResolver(dateSchema),
    });

    function onSubmit(values: DateFormValues) {
        console.log(values);
    }

    const [month, setMonth] = useState<number>(date ? date.getMonth() : new Date().getMonth())
    const [year, setYear] = useState<number>(date ? date.getFullYear() : new Date().getFullYear())

    const years = useMemo(() => {
        const currentYear = new Date().getFullYear()
        return Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i)
    }, [])

    const months = useMemo(() => {
        if (year) {
            return eachMonthOfInterval({
                start: startOfYear(new Date(year, 0, 1)),
                end: endOfYear(new Date(year, 0, 1))
            })
        }
        return []
    }, [year])

    useEffect(() => {
        if (date) {
            setMonth(date.getMonth())
            setYear(date.getFullYear())
        }
    }, [date])

    const handleYearChange = (selectedYear: string) => {
        const newYear = parseInt(selectedYear, 10)
        setYear(newYear)
        if (date) {
            const newDate = new Date(date)
            newDate.setFullYear(newYear)
            setDate(newDate)
        }
    }

    const handleMonthChange = (selectedMonth: string) => {
        const newMonth = parseInt(selectedMonth, 10)
        setMonth(newMonth)
        if (date) {
            const newDate = new Date(date)
            newDate.setMonth(newMonth)
            setDate(newDate)
        } else {
            setDate(new Date(year, newMonth, 1))
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col space-y-2">
                            <FormLabel>{label}</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
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
                                        selected={date}
                                        onSelect={setDate}
                                        month={new Date(year, month)}
                                        onMonthChange={(newMonth) => {
                                            setMonth(newMonth.getMonth())
                                            setYear(newMonth.getFullYear())
                                        }}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
