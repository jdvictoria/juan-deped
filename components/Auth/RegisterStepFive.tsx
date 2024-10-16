import { useEffect, useState } from "react";

import { Label } from "@/components/ui/label";

import TextInput from "@/components/Input/TextInput";
import SelectInput from "@/components/Input/SelectInput";

import extensionsData from "@/data/extensions.json";

interface RegisterStepFiveProps {
    fatherFirstName: string;
    fatherMiddleName: string;
    fatherLastName: string;
    fatherExtensionName: string;
    motherFirstName: string;
    motherMiddleName: string;
    motherLastName: string;
    motherExtensionName: string;
    guardianFirstName: string;
    guardianMiddleName: string;
    guardianLastName: string;
    guardianExtensionName: string;
    setFatherFirstName: (value: string) => void;
    setFatherMiddleName: (value: string) => void;
    setFatherLastName: (value: string) => void;
    setFatherExtensionName: (value: string) => void;
    setMotherFirstName: (value: string) => void;
    setMotherMiddleName: (value: string) => void;
    setMotherLastName: (value: string) => void;
    setMotherExtensionName: (value: string) => void;
    setGuardianFirstName: (value: string) => void;
    setGuardianMiddleName: (value: string) => void;
    setGuardianLastName: (value: string) => void;
    setGuardianExtensionName: (value: string) => void;
}

export default function RegisterStepFive({
    fatherFirstName,
    fatherMiddleName,
    fatherLastName,
    fatherExtensionName,
    motherFirstName,
    motherMiddleName,
    motherLastName,
    motherExtensionName,
    guardianFirstName,
    guardianMiddleName,
    guardianLastName,
    guardianExtensionName,
    setFatherFirstName,
    setFatherMiddleName,
    setFatherLastName,
    setFatherExtensionName,
    setMotherFirstName,
    setMotherMiddleName,
    setMotherLastName,
    setMotherExtensionName,
    setGuardianFirstName,
    setGuardianMiddleName,
    setGuardianLastName,
    setGuardianExtensionName,
}: RegisterStepFiveProps) {
    const [extensions, setExtensions] = useState<string[]>([]);

    useEffect(() => {
        setExtensions(extensionsData);
    }, []);

    return (
        <>
            <Label className="text-lg font-semibold">Guardian Information</Label>

            <div className="flex flex-col">
                <Label className="text-sm font-semibold mb-1">Father&#39;s Name</Label>

                <div className="flex space-x-2 w-full">
                    <div className="w-1/2">
                        <TextInput
                            label={"First Name"}
                            placeholder={"Juan"}
                            value={fatherFirstName}
                            setValue={setFatherFirstName}
                            required={false}
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput
                            label={"Middle Name"}
                            placeholder={"David"}
                            value={fatherMiddleName}
                            setValue={setFatherMiddleName}
                            required={false}
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput
                            label={"Last Name"}
                            placeholder={"Dela Cruz"}
                            value={fatherLastName}
                            setValue={setFatherLastName}
                            required={false}
                        />
                    </div>
                    <div className="w-2/12">
                        <SelectInput
                            label={"Extension"}
                            data={extensions}
                            value={fatherExtensionName}
                            setValue={setFatherExtensionName}
                            required={false}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <Label className="text-sm font-semibold mb-1">Mother&#39;s Name</Label>

                <div className="flex space-x-2 w-full">
                    <div className="w-1/2">
                        <TextInput
                            label={"First Name"}
                            placeholder={"Juan"}
                            value={motherFirstName}
                            setValue={setMotherFirstName}
                            required={false}
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput
                            label={"Middle Name"}
                            placeholder={"David"}
                            value={motherMiddleName}
                            setValue={setMotherMiddleName}
                            required={false}
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput
                            label={"Last Name"}
                            placeholder={"Dela Cruz"}
                            value={motherLastName}
                            setValue={setMotherLastName}
                            required={false}
                        />
                    </div>
                    <div className="w-2/12">
                        <SelectInput
                            label={"Extension"}
                            data={extensions}
                            value={motherExtensionName}
                            setValue={setMotherExtensionName}
                            required={false}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <Label className="text-sm font-semibold mb-1">Guardian&#39;s Name</Label>

                <div className="flex space-x-2 w-full">
                    <div className="w-1/2">
                        <TextInput
                            label={"First Name"}
                            placeholder={"Juan"}
                            value={guardianFirstName}
                            setValue={setGuardianFirstName}
                            required={false}
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput
                            label={"Middle Name"}
                            placeholder={"David"}
                            value={guardianMiddleName}
                            setValue={setGuardianMiddleName}
                            required={false}
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput
                            label={"Last Name"}
                            placeholder={"Dela Cruz"}
                            value={guardianLastName}
                            setValue={setGuardianLastName}
                            required={false}
                        />
                    </div>
                    <div className="w-2/12">
                        <SelectInput
                            label={"Extension"}
                            data={extensions}
                            value={guardianExtensionName}
                            setValue={setGuardianExtensionName}
                            required={false}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
