import { useEffect, useState } from "react";

import { Label } from "@/components/ui/label";

import Year from "@/components/Input/YearInput";
import TypeToggle from "@/components/Input/TypeToggle";
import SelectInput from "@/components/Input/SelectInput";

import levelsData from "@/data/levels.json";
import citiesData from "@/data/cities.json";
import nativeData from "@/data/natives.json";

interface InputProps {
    isWithLrn: boolean;
    isReturning: boolean;
    schoolYear: number;
    gradeLevel: string;
    birthPlace: string;
    motherTongue: string;
    setIsWithLrn: (value: boolean) => void;
    setIsReturning: (value: boolean) => void;
    setSchoolYear: (year: number) => void;
    setGradeLevel: (value: string) => void;
    setBirthPlace: (value: string) => void;
    setMotherTongue: (value: string) => void;
}

export default function RegisterStepTwo({
    isWithLrn,
    isReturning,
    schoolYear,
    gradeLevel,
    birthPlace,
    motherTongue,
    setIsWithLrn,
    setIsReturning,
    setSchoolYear,
    setGradeLevel,
    setBirthPlace,
    setMotherTongue
}: InputProps) {
    const [levels, setLevels] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [natives, setNatives] = useState<string[]>([]);

    useEffect(() => {
        setLevels(levelsData);
        setCities(citiesData);
        setNatives(nativeData);
    }, []);

    return (
        <>
            <Label className="text-lg font-semibold">Student Information</Label>

            <TypeToggle
                isWithLrn={isWithLrn}
                isReturning={isReturning}
                setIsWithLrn={setIsWithLrn}
                setIsReturning={setIsReturning}
            />

            <div className="flex space-x-2 w-full">
                <div className="w-1/2">
                    <Year
                        label={"School Year"}
                        value={schoolYear}
                        onChange={setSchoolYear}
                        minYear={2024}
                        maxYear={2050}
                    />
                </div>
                <div className="w-1/2">
                    <SelectInput
                        label={"Grade Level To Enroll"}
                        data={levels}
                        value={gradeLevel}
                        setValue={setGradeLevel}
                        required={true}
                    />
                </div>
            </div>

            <div className="flex space-x-2 w-full">
                <div className="w-1/2">
                    <SelectInput
                        label={"Place of Birth"}
                        data={cities}
                        value={birthPlace}
                        setValue={setBirthPlace}
                        required={true}
                    />
                </div>
                <div className="w-1/2">
                    <SelectInput
                        label={"Mother Tongue"}
                        data={natives}
                        value={motherTongue}
                        setValue={setMotherTongue}
                        required={true}
                    />
                </div>
            </div>
        </>
    )
}
