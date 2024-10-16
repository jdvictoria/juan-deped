import { useEffect, useState } from "react";

import TextInput from "@/components/Input/TextInput";
import DateInput from "@/components/Input/DateInput";
import EmailInput from "@/components/Input/EmailInput";
import NumberInput from "@/components/Input/NumberInput";
import SelectInput from "@/components/Input/SelectInput";
import PasswordInput from "@/components/Input/PasswordInput";

import { Label } from "@/components/ui/label";

import extensionsData from "@/data/extensions.json";
import gendersData from "@/data/genders.json";

interface RegisterStepOneProps {
    firstName: string;
    middleName: string;
    lastName: string;
    extensionName: string;
    birthDate: Date | undefined;
    gender: string;
    email: string;
    mobileNumber: string;
    password: string;
    passwordRetype: string;
    setFirstName: (firstName: string) => void;
    setMiddleName: (middleName: string) => void;
    setLastName: (lastName: string) => void;
    setExtensionName: (extensionName: string) => void;
    setBirthDate: (birthDate: Date) => void;
    setGender: (gender: string) => void;
    setEmail: (email: string) => void;
    setMobileNumber: (mobileNumber: string) => void;
    setPassword: (password: string) => void;
    setPasswordRetype: (passwordRetype: string) => void;
}

export default function RegisterStepOne({
    firstName,
    middleName,
    lastName,
    extensionName,
    birthDate,
    gender,
    email,
    mobileNumber,
    password,
    passwordRetype,
    setFirstName,
    setMiddleName,
    setLastName,
    setExtensionName,
    setBirthDate,
    setGender,
    setEmail,
    setMobileNumber,
    setPassword,
    setPasswordRetype,
}: RegisterStepOneProps) {
    const [extensions, setExtensions] = useState<string[]>([]);
    const [genders, setGenders] = useState<string[]>([]);

    useEffect(() => {
        setExtensions(extensionsData);
        setGenders(gendersData);
    }, []);

    return (
        <>
            <Label className="text-lg font-semibold">Personal Information</Label>

            <div className="flex space-x-2 w-full">
                <div className="w-1/2">
                    <TextInput
                        label={"First Name"}
                        placeholder={"Juan"}
                        value={firstName}
                        setValue={setFirstName}
                        required={true}
                    />
                </div>
                <div className="w-1/2">
                    <TextInput
                        label={"Middle Name"}
                        placeholder={"David"}
                        value={middleName}
                        setValue={setMiddleName}
                        required={true}
                    />
                </div>
                <div className="w-1/2">
                    <TextInput
                        label={"Last Name"}
                        placeholder={"Dela Cruz"}
                        value={lastName}
                        setValue={setLastName}
                        required={true}
                    />
                </div>
                <div className="w-2/12">
                    <SelectInput
                        label={"Extension"}
                        data={extensions}
                        value={extensionName}
                        setValue={setExtensionName}
                        required={false}
                    />
                </div>
            </div>

            <div className="flex space-x-2 w-full">
                <div className="w-1/2">
                    <DateInput
                        label={"Date of Birth"}
                        value={birthDate}
                        setValue={setBirthDate}
                        required={true}
                    />
                </div>
                <div className="w-1/2">
                    <SelectInput
                        label={"Gender"}
                        data={genders}
                        value={gender}
                        setValue={setGender}
                        required={true}
                    />
                </div>
            </div>

            <div className="flex space-x-2 w-full">
                <div className="w-1/2">
                    <EmailInput
                        label={"Email Address"}
                        placeholder={"jdelacruz@gmail.com"}
                        value={email}
                        setValue={setEmail}
                        required={true}
                    />
                </div>
                <div className="w-1/2">
                    <NumberInput
                        label={"Mobile Number"}
                        value={mobileNumber}
                        setValue={setMobileNumber}
                        required={true}
                    />
                </div>
            </div>

            <div className="flex space-x-2 w-full">
                <div className="w-1/2">
                    <PasswordInput
                        label={"Password"}
                        mode={"Register"}
                        value={password}
                        setValue={setPassword}
                        required={true}
                    />
                </div>
                <div className="w-1/2">
                    <PasswordInput
                        label={"Confirm Password"}
                        mode={"Register"}
                        value={passwordRetype}
                        setValue={setPasswordRetype}
                        required={true}
                    />
                </div>
            </div>
        </>
    )
}
