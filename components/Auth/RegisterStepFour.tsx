import { useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import TextInput from "@/components/Input/TextInput";
import SelectInput from "@/components/Input/SelectInput";

import citiesData from "@/data/cities.json";
import provincesData from "@/data/provinces.json";
import countriesData from "@/data/countries.json";

interface RegisterStepFourProps {
    currentHouseNumber: string;
    currentStreet: string;
    currentBarangay: string;
    currentCity: string;
    currentProvince: string;
    currentCountry: string;
    permanentHouseNumber: string;
    permanentStreet: string;
    permanentBarangay: string;
    permanentCity: string;
    permanentProvince: string;
    permanentCountry: string;
    setCurrentHouseNumber: (value: string) => void;
    setCurrentStreet: (value: string) => void;
    setCurrentBarangay: (value: string) => void;
    setCurrentCity: (value: string) => void;
    setCurrentProvince: (value: string) => void;
    setCurrentCountry: (value: string) => void;
    setPermanentHouseNumber: (value: string) => void;
    setPermanentStreet: (value: string) => void;
    setPermanentBarangay: (value: string) => void;
    setPermanentCity: (value: string) => void;
    setPermanentProvince: (value: string) => void;
    setPermanentCountry: (value: string) => void;
}

export default function RegisterStepFour({
    currentHouseNumber,
    currentStreet,
    currentBarangay,
    currentCity,
    currentProvince,
    currentCountry,
    permanentHouseNumber,
    permanentStreet,
    permanentBarangay,
    permanentCity,
    permanentProvince,
    permanentCountry,
    setCurrentHouseNumber,
    setCurrentStreet,
    setCurrentBarangay,
    setCurrentCity,
    setCurrentProvince,
    setCurrentCountry,
    setPermanentHouseNumber,
    setPermanentStreet,
    setPermanentBarangay,
    setPermanentCity,
    setPermanentProvince,
    setPermanentCountry,
}: RegisterStepFourProps) {
    const [isPermanentAddressSame, setIsPermanentAddressSame] = useState<boolean>(true);

    const [cities, setCities] = useState<string[]>([]);
    const [provinces, setProvinces] = useState<string[]>([]);
    const [countries, setCountries] = useState<string[]>([]);

    useEffect(() => {
        setCities(citiesData);
        setProvinces(provincesData);
        setCountries(countriesData);
    }, []);

    return (
        <>
            <Label className="text-lg font-semibold">Address Information</Label>

            <div className="flex flex-col space-y-2">
                <Label className="text-sm font-semibold mb-1">Current Address</Label>

                <div className="flex space-x-2 w-full">
                    <div className="w-1/2">
                        <TextInput
                            label={"House No."}
                            placeholder={"1234"}
                            value={currentHouseNumber}
                            setValue={setCurrentHouseNumber}
                            required={true}
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput
                            label={"Street"}
                            placeholder={"F. Manalo"}
                            value={currentStreet}
                            setValue={setCurrentStreet}
                            required={true}
                        />
                    </div>
                </div>

                <div className="flex space-x-2 w-full">
                    <div className="w-1/2">
                        <TextInput
                            label={"Barangay"}
                            placeholder={"Lourdes North West"}
                            value={currentBarangay}
                            setValue={setCurrentBarangay}
                            required={true}
                        />
                    </div>
                    <div className="w-1/2">
                        <SelectInput
                            label={"City"}
                            data={cities}
                            value={currentCity}
                            setValue={setCurrentCity}
                            required={true}
                        />
                    </div>
                </div>

                <div className="flex space-x-2 w-full">
                    <div className="w-1/2">
                        <SelectInput
                            label={"Province"}
                            data={provinces}
                            value={currentProvince}
                            setValue={setCurrentProvince}
                            required={true}
                        />
                    </div>
                    <div className="w-1/2">
                        <SelectInput
                            label={"Country"}
                            data={countries}
                            value={currentCountry}
                            setValue={setCurrentCountry}
                            required={true}
                        />
                    </div>
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
                    <div className="flex flex-col space-y-2">
                        <Label className="text-sm font-semibold mb-1">Permanent Address</Label>

                        <div className="flex space-x-2 w-full">
                            <div className="w-1/2">
                                <TextInput
                                    label={"House No."}
                                    placeholder={"1234"}
                                    value={permanentHouseNumber}
                                    setValue={setPermanentHouseNumber}
                                    required={true}
                                />
                            </div>
                            <div className="w-1/2">
                                <TextInput
                                    label={"Street"}
                                    placeholder={"F. Manalo"}
                                    value={permanentStreet}
                                    setValue={setPermanentStreet}
                                    required={true}
                                />
                            </div>
                        </div>

                        <div className="flex space-x-2 w-full">
                            <div className="w-1/2">
                                <TextInput
                                    label={"Barangay"}
                                    placeholder={"Lourdes North West"}
                                    value={permanentBarangay}
                                    setValue={setPermanentBarangay}
                                    required={true}
                                />
                            </div>
                            <div className="w-1/2">
                                <SelectInput
                                    label={"City"}
                                    data={cities}
                                    value={permanentCity}
                                    setValue={setPermanentCity}
                                    required={true}
                                />
                            </div>
                        </div>

                        <div className="flex space-x-2 w-full">
                            <div className="w-1/2">
                                <SelectInput
                                    label={"Province"}
                                    data={provinces}
                                    value={permanentProvince}
                                    setValue={setPermanentProvince}
                                    required={true}
                                />
                            </div>
                            <div className="w-1/2">
                                <SelectInput
                                    label={"Country"}
                                    data={countries}
                                    value={permanentCountry}
                                    setValue={setPermanentCountry}
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
