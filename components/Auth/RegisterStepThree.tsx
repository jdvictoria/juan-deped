import { Label } from "@/components/ui/label";

import LicenseInput from "@/components/Input/LicenseInput";
import CommunityToggle from "@/components/Input/CommunityToggle";
import BeneficiaryToggle from "@/components/Input/BeneficiaryToggle";

interface RegisterStepThreeProps {
    birthCertificate: string;
    learnerReference: string;
    isWithCommunity: boolean;
    community: string;
    isBeneficiary: boolean;
    beneficiary: string;
    setBirthCertificate: (value: string) => void;
    setLearnerReference: (value: string) => void;
    setIsWithCommunity: (value: boolean) => void;
    setCommunity: (value: string) => void;
    setIsBeneficiary: (value: boolean) => void;
    setBeneficiary: (value: string) => void;
}

export default function RegisterStepThree({
    birthCertificate,
    learnerReference,
    isWithCommunity,
    community,
    isBeneficiary,
    beneficiary,
    setBirthCertificate,
    setLearnerReference,
    setIsWithCommunity,
    setCommunity,
    setIsBeneficiary,
    setBeneficiary
}: RegisterStepThreeProps) {
    return (
        <>
            <Label className="text-lg font-semibold">Identification Information</Label>

            <LicenseInput
                label={"Birth Certificate No."}
                placeholder={"XXXXX-XX-XXXXXX-XXXXX-XXXXX"}
                value={birthCertificate}
                setValue={setBirthCertificate}
                required={true}
            />

            <LicenseInput
                label={"Learner Reference No."}
                placeholder={"XXXXXYYZZZZ"}
                value={learnerReference}
                setValue={setLearnerReference}
                required={true}
            />

            <CommunityToggle
                isWithCommunity={isWithCommunity}
                community={community}
                setIsWithCommunity={setIsWithCommunity}
                setCommunity={setCommunity}
            />

            <BeneficiaryToggle
                isBeneficiary={isBeneficiary}
                beneficiary={beneficiary}
                setIsBeneficiary={setIsBeneficiary}
                setBeneficiary={setBeneficiary}
            />
        </>
    )
}