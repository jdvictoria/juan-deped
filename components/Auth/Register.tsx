import { useState, useEffect } from "react";

import { ChevronLeft } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import StepCounter from "@/components/Auth/StepCounter";
import NameInput from "@/components/Input/NameInput";
import EmailInput from "@/components/Input/EmailInput";
import PasswordInput from "@/components/Input/PasswordInput";
import SelectInput from "@/components/Input/SelectInput";
import TypeToggle from "@/components/Input/TypeToggle";
import NumberInput from "@/components/Input/NumberInput";
import Year from "@/components/Input/YearInput";
import DateInput from "@/components/Input/DateInput";
import LicenseInput from "@/components/Input/LicenseInput";
import CommunityToggle from "@/components/Input/CommunityToggle";
import BeneficiaryToggle from "@/components/Input/BeneficiaryToggle";
import ModalityInput from "@/components/Input/ModalityInput";
import SemesterToggle from "@/components/Input/SemesterToggle";

import extensionsData from "@/data/extensions.json";
import gendersData from "@/data/genders.json";
import levelsData from "@/data/levels.json";
import citiesData from "@/data/cities.json";
import nativeData from "@/data/natives.json";
import provincesData from "@/data/provinces.json";
import countriesData from "@/data/countries.json";
import modalitiesData from "@/data/modalities.json";
import schoolsData from "@/data/schools.json";
import tracksData from "@/data/tracks.json";
import strandsData from "@/data/strands.json";

export default function Register() {
    const [step, setStep] = useState<number>(1);
    const [currentYear, setCurrentYear] = useState<number>();
    const [isPermanentAddressSame, setIsPermanentAddressSame] = useState<boolean>(true);

    const [extensions, setExtensions] = useState<string[]>([]);
    const [gender, setGender] = useState<string[]>([]);
    const [levels, setLevels] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [natives, setNatives] = useState<string[]>([]);
    const [provinces, setProvinces] = useState<string[]>([]);
    const [countries, setCountries] = useState<string[]>([]);
    const [modalities, setModalities] = useState<{ id: string; label: string }[]>([]);
    const [schools, setSchools] = useState<string[]>([]);
    const [tracks, setTracks] = useState<string[]>([]);
    const [strands, setStrands] = useState<string[]>([]);

    useEffect(() => {
        setExtensions(extensionsData);
        setGender(gendersData);
        setLevels(levelsData);
        setCities(citiesData);
        setNatives(nativeData);
        setProvinces(provincesData);
        setCountries(countriesData);
        setModalities(modalitiesData);
        setSchools(schoolsData);
        setTracks(tracksData);
        setStrands(strandsData);
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-row text-xl font-bold tracking-tight text-foreground items-center">
                    {step !== 1 && (
                        <button onClick={() => setStep(step - 1)} className="flex items-center focus:outline-none">
                            <ChevronLeft/>
                        </button>
                    )}
                    {step === 1 && "User Registration"}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <StepCounter step={step}/>

                <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                    {step === 1 && (
                        <>
                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <NameInput label={"First Name"} placeholder={"Juan"}/>
                                </div>
                                <div className="w-1/2">
                                    <NameInput label={"Middle Name"} placeholder={"David"}/>
                                </div>
                                <div className="w-1/2">
                                    <NameInput label={"Last Name"} placeholder={"Dela Cruz"}/>
                                </div>
                                <div className="w-2/12">
                                    <SelectInput label={"Extension"} data={extensions}/>
                                </div>
                            </div>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <DateInput label={"Date of Birth"}/>
                                </div>
                                <div className="w-1/2">
                                    <SelectInput label={"Gender"} data={gender}/>
                                </div>
                            </div>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <EmailInput label={"Email Address"}/>
                                </div>
                                <div className="w-1/2">
                                    <NumberInput label={"Mobile Number"}/>
                                </div>
                            </div>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <PasswordInput label={"Password"} mode={"Register"}/>
                                </div>
                                <div className="w-1/2">
                                    <PasswordInput label={"Confirm Password"} mode={"Register"}/>
                                </div>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <TypeToggle/>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <Year label={"School Year"} value={currentYear} onChange={setCurrentYear}
                                          minYear={2024} maxYear={2050}/>
                                </div>
                                <div className="w-1/2">
                                    <SelectInput label={"Grade Level To Enroll"} data={levels}/>
                                </div>
                            </div>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <SelectInput label={"Place of Birth"} data={cities}/>
                                </div>
                                <div className="w-1/2">
                                    <SelectInput label={"Mother Tongue"} data={natives}/>
                                </div>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <LicenseInput label={"Birth Certificate No."} placeholder={"XXXXX-XX-XXXXXX-XXXXX-XXXXX"}/>
                            <LicenseInput label={"Learner Reference No."} placeholder={"XXXXXYYZZZZ"}/>
                            <CommunityToggle/>
                            <BeneficiaryToggle/>
                        </>
                    )}

                    {step === 4 && (
                        <>
                            <Label>Current Address</Label>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <NameInput label={"House No."} placeholder={"1234"}/>
                                </div>
                                <div className="w-1/2">
                                    <NameInput label={"Street"} placeholder={"F. Manalo"}/>
                                </div>
                            </div>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <NameInput label={"Barangay"} placeholder={"Lourdes North West"}/>
                                </div>
                                <div className="w-1/2">
                                    <SelectInput label={"City"} data={cities}/>
                                </div>
                            </div>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <SelectInput label={"Province"} data={provinces}/>
                                </div>
                                <div className="w-1/2">
                                    <SelectInput label={"Country"} data={countries}/>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="terms"
                                    checked={isPermanentAddressSame}
                                    onCheckedChange={() => setIsPermanentAddressSame((prev) => !prev)}
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Permanent Address same as Current Address?
                                </label>
                            </div>

                            {!isPermanentAddressSame && (
                                <>
                                    <Label>Permanent Address</Label>

                                    <div className="flex space-x-2 w-full">
                                        <div className="w-1/2">
                                            <NameInput label={"House No."} placeholder={"1234"}/>
                                        </div>
                                        <div className="w-1/2">
                                            <NameInput label={"Street"} placeholder={"F. Manalo"}/>
                                        </div>
                                    </div>

                                    <div className="flex space-x-2 w-full">
                                        <div className="w-1/2">
                                            <NameInput label={"Barangay"} placeholder={"Lourdes North West"}/>
                                        </div>
                                        <div className="w-1/2">
                                            <SelectInput label={"City"} data={cities}/>
                                        </div>
                                    </div>

                                    <div className="flex space-x-2 w-full">
                                        <div className="w-1/2">
                                            <SelectInput label={"Province"} data={provinces}/>
                                        </div>
                                        <div className="w-1/2">
                                            <SelectInput label={"Country"} data={countries}/>
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    )}

                    {step === 5 && (
                        <>
                            <Label>Father&#39;s Name</Label>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <NameInput label={"First Name"} placeholder={"Juan"}/>
                                </div>
                                <div className="w-1/2">
                                    <NameInput label={"Middle Name"} placeholder={"David"}/>
                                </div>
                                <div className="w-1/2">
                                    <NameInput label={"Last Name"} placeholder={"Dela Cruz"}/>
                                </div>
                                <div className="w-2/12">
                                    <SelectInput label={"Extension"} data={extensions}/>
                                </div>
                            </div>

                            <Label>Mother&#39;s Name</Label>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <NameInput label={"First Name"} placeholder={"Juan"}/>
                                </div>
                                <div className="w-1/2">
                                    <NameInput label={"Middle Name"} placeholder={"David"}/>
                                </div>
                                <div className="w-1/2">
                                    <NameInput label={"Last Name"} placeholder={"Dela Cruz"}/>
                                </div>
                                <div className="w-2/12">
                                    <SelectInput label={"Extension"} data={extensions}/>
                                </div>
                            </div>

                            <Label>Guardian&#39;s Name</Label>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <NameInput label={"First Name"} placeholder={"Juan"}/>
                                </div>
                                <div className="w-1/2">
                                    <NameInput label={"Middle Name"} placeholder={"David"}/>
                                </div>
                                <div className="w-1/2">
                                    <NameInput label={"Last Name"} placeholder={"Dela Cruz"}/>
                                </div>
                                <div className="w-2/12">
                                    <SelectInput label={"Extension"} data={extensions}/>
                                </div>
                            </div>
                        </>
                    )}

                    {step === 6 && (
                        <>
                            <Label>For Returning Learner (Balik-Aral)</Label>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <Year label={"Last School Year Completed"} value={currentYear}
                                          onChange={setCurrentYear} minYear={2024} maxYear={2050}/>
                                </div>
                                <div className="w-1/2">
                                    <SelectInput label={"Last Grade Level Completed"} data={levels}/>
                                </div>
                            </div>

                            <Label>For Learners in Senior High School</Label>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <SelectInput label={"Last School Attended"} data={schools}/>
                                </div>
                                <div className="w-1/2">
                                    <LicenseInput label={"School ID."} placeholder={"XXXXX"}/>
                                </div>
                            </div>

                            <div className="flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <SelectInput label={"Track"} data={tracks}/>
                                </div>
                                <div className="w-1/2">
                                    <SelectInput label={"Strand"} data={strands}/>
                                </div>
                            </div>

                            <SemesterToggle/>

                            <ModalityInput data={modalities}/>
                        </>
                    )}
                </form>

                <Button className="w-full" onClick={() => setStep(step + 1)}>
                    Next
                </Button>
            </CardContent>
        </Card>
    )
}