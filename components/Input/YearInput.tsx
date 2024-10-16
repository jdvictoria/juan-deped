"use client";

import { useState } from "react";
import { z } from "zod";

import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
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

interface InputProps {
    label: string;
    value?: number;
    onChange?: (year: number) => void;
    minYear?: number;
    maxYear?: number;
}

const dateSchema = z.object({
    date: z.date({
        required_error: "A year is required.",
    }),
});

export default function YearInput({
    label,
    value,
    onChange,
    minYear = 0,
    maxYear = new Date().getFullYear(),
}: InputProps) {
    const [error, setError] = useState<string | null>(null);
    const [selectedYear, setSelectedYear] = useState<number | null>(value || null);
    const [currentDecade, setCurrentDecade] = useState(
        value ? Math.floor(value / 10) * 10 : Math.floor(new Date().getFullYear() / 10) * 10
    );
    const [open, setOpen] = useState(false);

    const handleYearSelect = (year: number) => {
        const result = dateSchema.safeParse({ date: new Date(year, 0) });
        if (!result.success) {
            setError(result.error.errors[0]?.message || "Invalid year");
        } else {
            setError(null);
            setSelectedYear(year);
            if (onChange) {
                onChange(year);
            }
            setOpen(false);
        }
    };

    const handlePreviousDecade = () => {
        setCurrentDecade((prev) => Math.max(prev - 10, Math.floor(minYear / 10) * 10));
    };

    const handleNextDecade = () => {
        setCurrentDecade((prev) => Math.min(prev + 10, Math.floor(maxYear / 10) * 10));
    };

    return (
        <FormField
            name="date"
            render={() => (
                <FormItem className="flex flex-col space-y-1">
                    <FormLabel>{label}</FormLabel>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !selectedYear && "text-muted-foreground"
                                    )}
                                    onClick={() => setOpen(true)}
                                >
                                    {selectedYear ? (
                                        format(new Date(selectedYear, 0), "yyyy")
                                    ) : (
                                        <span>Pick a year</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                            side="bottom"
                            align="start"
                            className="w-auto p-3 bg-white border rounded-md shadow-md"
                        >
                            <div className="flex flex-col space-y-4">
                                <div className="relative flex items-center justify-center pt-1">
                                    <div className="text-sm font-medium">
                                        {currentDecade}-{currentDecade + 9}
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Button
                                            variant="outline"
                                            className="absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                                            onClick={handlePreviousDecade}
                                            disabled={currentDecade <= Math.floor(minYear / 10) * 10}
                                        >
                                            <CalendarIcon className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                                            onClick={handleNextDecade}
                                            disabled={currentDecade >= Math.floor(maxYear / 10) * 10}
                                        >
                                            <CalendarIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div
                                    className="grid w-full grid-cols-3 grid-rows-4 gap-y-2"
                                    role="grid"
                                >
                                    {Array.from({ length: 12 }, (_, i) => {
                                        const year = currentDecade - 1 + i;
                                        const isDisabled = year < minYear || year > maxYear;

                                        return (
                                            <div
                                                key={i}
                                                className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20"
                                            >
                                                <Button
                                                    variant="ghost"
                                                    className={cn(
                                                        "h-12 w-24 p-0 font-normal",
                                                        {
                                                            "text-muted-foreground opacity-50": isDisabled,
                                                            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground":
                                                                year === selectedYear,
                                                        }
                                                    )}
                                                    onClick={() => !isDisabled && handleYearSelect(year)}
                                                    disabled={isDisabled}
                                                >
                                                    <span>{year}</span>
                                                </Button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    {error && <FormMessage>{error}</FormMessage>}
                </FormItem>
            )}
        />
    );
}
