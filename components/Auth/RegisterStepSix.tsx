import { useEffect, useState } from "react";

import { Label } from "@/components/ui/label";

import Year from "@/components/Input/YearInput";
import SelectInput from "@/components/Input/SelectInput";
import LicenseInput from "@/components/Input/LicenseInput";
import SemesterToggle from "@/components/Input/SemesterToggle";
import ModalityInput from "@/components/Input/ModalityInput";

import levelsData from "@/data/levels.json";
import modalitiesData from "@/data/modalities.json";
import schoolsData from "@/data/schools.json";
import tracksData from "@/data/tracks.json";
import strandsData from "@/data/strands.json";

interface RegisterStepSixProps {
    yearCompleted: number;
    gradeCompleted: string;
    lastSchoolAttended: string;
    lastSchoolId: string;
    track: string;
    strand: string;
    isFirstSemester: boolean;
    modalities: string[];
    setYearCompleted: (value: number) => void;
    setGradeCompleted: (value: string) => void;
    setLastSchoolAttended: (value: string) => void;
    setLastSchoolId: (value: string) => void;
    setTrack: (value: string) => void;
    setStrand: (value: string) => void;
    setIsFirstSemester: (value: boolean) => void;
    setModalities: (value: string[]) => void;
    isReturning: boolean;
    gradeLevel: string;
}

export default function RegisterStepSix({
    yearCompleted,
    gradeCompleted,
    lastSchoolAttended,
    lastSchoolId,
    track,
    strand,
    isFirstSemester,
    modalities,
    setYearCompleted,
    setGradeCompleted,
    setLastSchoolAttended,
    setLastSchoolId,
    setTrack,
    setStrand,
    setIsFirstSemester,
    setModalities,
    isReturning,
    gradeLevel
}: RegisterStepSixProps) {
    const [levels, setLevels] = useState<string[]>([]);
    const [modality, setModality] = useState<{ id: string; label: string }[]>([]);
    const [schools, setSchools] = useState<string[]>([]);
    const [tracks, setTracks] = useState<string[]>([]);
    const [strands, setStrands] = useState<string[]>([]);

    useEffect(() => {
        setLevels(levelsData);
        setModality(modalitiesData);
        setSchools(schoolsData);
        setTracks(tracksData);
        setStrands(strandsData);
    }, []);

    return (
        <>
            <Label className="text-lg font-semibold">Additional Information</Label>

            {isReturning && (
                <div className="flex flex-col">
                    <Label className="text-sm font-semibold mb-1">For Returning Learners</Label>

                    <div className="flex space-x-2 w-full">
                        <div className="w-1/2">
                            <Year
                                label={"Last School Year Completed"}
                                value={yearCompleted}
                                onChange={setYearCompleted}
                                minYear={2020}
                                maxYear={2050}
                            />
                        </div>
                        <div className="w-1/2">
                            <SelectInput
                                label={"Last Grade Level Completed"}
                                data={levels}
                                value={gradeCompleted}
                                setValue={setGradeCompleted}
                                required={false}
                            />
                        </div>
                    </div>
                </div>
            )}

            {(gradeLevel === 'Grade 11' || gradeLevel === 'Grade 12') && (
                <div className="flex flex-col space-y-2">
                    <Label className="text-sm font-semibold mb-1">For Senior High School Learners</Label>

                    <div className="flex space-x-2 w-full">
                        <div className="w-1/2">
                            <SelectInput
                                label={"Last School Attended"}
                                data={schools}
                                value={lastSchoolAttended}
                                setValue={setLastSchoolAttended}
                                required={false}
                            />
                        </div>
                        <div className="w-1/2">
                            <LicenseInput
                                label={"School ID."}
                                placeholder={"XXXXX"}
                                value={lastSchoolId}
                                setValue={setLastSchoolId}
                                required={false}
                            />
                        </div>
                    </div>

                    <div className="flex space-x-2 w-full">
                        <div className="w-1/2">
                            <SelectInput
                                label={"Track"}
                                data={tracks}
                                value={track}
                                setValue={setTrack}
                                required={false}
                            />
                        </div>
                        <div className="w-1/2">
                            <SelectInput
                                label={"Strand"}
                                data={strands}
                                value={strand}
                                setValue={setStrand}
                                required={false}
                            />
                        </div>
                    </div>

                    <SemesterToggle
                        isFirstSemester={isFirstSemester}
                        setIsFirstSemester={setIsFirstSemester}
                    />
                </div>
            )}

            <ModalityInput
                data={modality}
                value={modalities}
                setValue={setModalities}
            />
        </>
    )
}
