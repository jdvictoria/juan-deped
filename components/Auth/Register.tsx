import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { ChevronLeft } from "lucide-react";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import StepCounter from "@/components/Auth/StepCounter";
import RegisterStepOne from "@/components/Auth/RegisterStepOne";
import RegisterStepTwo from "@/components/Auth/RegisterStepTwo";
import RegisterStepThree from "@/components/Auth/RegisterStepThree";
import RegisterStepFour from "@/components/Auth/RegisterStepFour";
import RegisterStepFive from "@/components/Auth/RegisterStepFive";
import RegisterStepSix from "@/components/Auth/RegisterStepSix";

import { registerUser } from "@/lib/auth";
import { addStudentData } from "@/lib/profile";

export default function Register() {
    const methods = useForm();
    const { toast } = useToast();

    const [step, setStep] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [extensionName, setExtensionName] = useState<string>("");
    const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
    const [gender, setGender] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [mobileNumber, setMobileNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [isWithLrn, setIsWithLrn] = useState<boolean>(false);
    const [isReturning, setIsReturning] = useState<boolean>(false);
    const [schoolYear, setSchoolYear] = useState<number>(0);
    const [gradeLevel, setGradeLevel] = useState<string>("");
    const [birthPlace, setBirthPlace] = useState<string>("");
    const [motherTongue, setMotherTongue] = useState<string>("");

    const [birthCertificate, setBirthCertificate] = useState<string>("");
    const [learnerReference, setLearnerReference] = useState<string>("");
    const [isWithCommunity, setIsWithCommunity] = useState<boolean>(false);
    const [community, setCommunity] = useState<string>("");
    const [isBeneficiary, setIsBeneficiary] = useState<boolean>(false);
    const [beneficiary, setBeneficiary] = useState<string>("");

    const [currentHouseNumber, setCurrentHouseNumber] = useState<string>("");
    const [currentStreet, setCurrentStreet] = useState<string>("");
    const [currentBarangay, setCurrentBarangay] = useState<string>("");
    const [currentCity, setCurrentCity] = useState<string>("");
    const [currentProvince, setCurrentProvince] = useState<string>("");
    const [currentCountry, setCurrentCountry] = useState<string>("");
    const [permanentHouseNumber, setPermanentHouseNumber] = useState<string>("");
    const [permanentStreet, setPermanentStreet] = useState<string>("");
    const [permanentBarangay, setPermanentBarangay] = useState<string>("");
    const [permanentCity, setPermanentCity] = useState<string>("");
    const [permanentProvince, setPermanentProvince] = useState<string>("");
    const [permanentCountry, setPermanentCountry] = useState<string>("");

    const [fatherFirstName, setFatherFirstName] = useState<string>("");
    const [fatherMiddleName, setFatherMiddleName] = useState<string>("");
    const [fatherLastName, setFatherLastName] = useState<string>("");
    const [fatherExtensionName, setFatherExtensionName] = useState<string>("");
    const [motherFirstName, setMotherFirstName] = useState<string>("");
    const [motherMiddleName, setMotherMiddleName] = useState<string>("");
    const [motherLastName, setMotherLastName] = useState<string>("");
    const [motherExtensionName, setMotherExtensionName] = useState<string>("");
    const [guardianFirstName, setGuardianFirstName] = useState<string>("");
    const [guardianMiddleName, setGuardianMiddleName] = useState<string>("");
    const [guardianLastName, setGuardianLastName] = useState<string>("");
    const [guardianExtensionName, setGuardianExtensionName] = useState<string>("");

    const [yearCompleted, setYearCompleted] = useState<number>(2024);
    const [gradeCompleted, setGradeCompleted] = useState<string>("");
    const [lastSchoolAttended, setLastSchoolAttended] = useState<string>("");
    const [lastSchoolId, setLastSchoolId] = useState<string>("");
    const [track, setTrack] = useState<string>("");
    const [strand, setStrand] = useState<string>("");
    const [isFirstSemester, setIsFirstSemester] = useState<boolean>(true);
    const [modalities, setModalities] = useState<string[]>([]);

    const isStep6FieldsInvalid = step === 6 && (
        firstName === "" ||
        lastName === "" ||
        birthDate === undefined ||
        gender === "" ||
        email === "" ||
        mobileNumber === "" ||
        password === "" ||
        schoolYear === 0 ||
        gradeLevel === "" ||
        birthPlace === "" ||
        motherTongue === "" ||
        birthCertificate === "" ||
        learnerReference === "" ||
        currentHouseNumber === "" ||
        currentStreet === "" ||
        currentBarangay === "" ||
        currentCity === "" ||
        currentProvince === "" ||
        currentCountry === "" ||
        modalities.length === 0
    );

    const clearForm = () => {
        setFirstName("");
        setMiddleName("");
        setLastName("");
        setExtensionName("");
        setBirthDate(undefined);
        setGender("");
        setEmail("");
        setMobileNumber("");
        setPassword("");
        setIsWithLrn(false);
        setIsReturning(false);
        setSchoolYear(2024);
        setGradeLevel("");
        setBirthPlace("");
        setMotherTongue("");
        setBirthCertificate("");
        setLearnerReference("");
        setIsWithCommunity(false);
        setCommunity("");
        setIsBeneficiary(false);
        setBeneficiary("");
        setCurrentHouseNumber("");
        setCurrentStreet("");
        setCurrentBarangay("");
        setCurrentCity("");
        setCurrentProvince("");
        setCurrentCountry("");
        setPermanentHouseNumber("");
        setPermanentStreet("");
        setPermanentBarangay("");
        setPermanentCity("");
        setPermanentProvince("");
        setPermanentCountry("");
        setFatherFirstName("");
        setFatherMiddleName("");
        setFatherLastName("");
        setFatherExtensionName("");
        setMotherFirstName("");
        setMotherMiddleName("");
        setMotherLastName("");
        setMotherExtensionName("");
        setGuardianFirstName("");
        setGuardianMiddleName("");
        setGuardianLastName("");
        setGuardianExtensionName("");
        setYearCompleted(2024);
        setGradeCompleted("");
        setLastSchoolAttended("");
        setLastSchoolId("");
        setTrack("");
        setStrand("");
        setIsFirstSemester(true);
        setModalities([]);
    }

    const handleSubmit = async () => {
        setIsLoading(true);

        const result = await registerUser(
            email,
            password,
            firstName,
            lastName,
        );

        setIsLoading(false);

        if (result.success) {
            const userId = result.user?.id;

            const studentData = {
                firstName,
                middleName,
                lastName,
                extensionName,
                birthDate,
                gender,
                mobileNumber,
                isWithLrn,
                isReturning,
                schoolYear,
                gradeLevel,
                birthPlace,
                motherTongue,
                birthCertificate,
                learnerReference,
                isWithCommunity,
                community,
                isBeneficiary,
                beneficiary,
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
                yearCompleted,
                gradeCompleted,
                lastSchoolAttended,
                lastSchoolId,
                track,
                strand,
                isFirstSemester,
                modalities,
                role: "student"
            };

            const addStudentResult = await addStudentData(userId, studentData);

            if (addStudentResult.success) {
                clearForm();
                toast({ title: "Account registered successfully" });
                window.location.href = "/";
            } else {
                toast({ title: "Account registration unsuccessful" });
            }
        } else {
            toast({ title: "Account registration unsuccessful" });
        }
    };

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

                <FormProvider {...methods}>
                    <form className="space-y-3">
                        {step === 1 && (
                            <RegisterStepOne
                                firstName={firstName}
                                middleName={middleName}
                                lastName={lastName}
                                extensionName={extensionName}
                                birthDate={birthDate}
                                gender={gender}
                                email={email}
                                mobileNumber={mobileNumber}
                                password={password}
                                setFirstName={setFirstName}
                                setMiddleName={setMiddleName}
                                setLastName={setLastName}
                                setExtensionName={setExtensionName}
                                setBirthDate={setBirthDate}
                                setGender={setGender}
                                setEmail={setEmail}
                                setMobileNumber={setMobileNumber}
                                setPassword={setPassword}
                            />
                        )}

                        {step === 2 && (
                            <RegisterStepTwo
                                isWithLrn={isWithLrn}
                                isReturning={isReturning}
                                schoolYear={schoolYear}
                                gradeLevel={gradeLevel}
                                birthPlace={birthPlace}
                                motherTongue={motherTongue}
                                setIsWithLrn={setIsWithLrn}
                                setIsReturning={setIsReturning}
                                setSchoolYear={setSchoolYear}
                                setGradeLevel={setGradeLevel}
                                setBirthPlace={setBirthPlace}
                                setMotherTongue={setMotherTongue}
                            />
                        )}

                        {step === 3 && (
                            <RegisterStepThree
                                birthCertificate={birthCertificate}
                                learnerReference={learnerReference}
                                isWithCommunity={isWithCommunity}
                                community={community}
                                isBeneficiary={isBeneficiary}
                                beneficiary={beneficiary}
                                setBirthCertificate={setBirthCertificate}
                                setLearnerReference={setLearnerReference}
                                setIsWithCommunity={setIsWithCommunity}
                                setCommunity={setCommunity}
                                setIsBeneficiary={setIsBeneficiary}
                                setBeneficiary={setBeneficiary}
                            />
                        )}

                        {step === 4 && (
                            <RegisterStepFour
                                currentHouseNumber={currentHouseNumber}
                                currentStreet={currentStreet}
                                currentBarangay={currentBarangay}
                                currentCity={currentCity}
                                currentProvince={currentProvince}
                                currentCountry={currentCountry}
                                permanentHouseNumber={permanentHouseNumber}
                                permanentStreet={permanentStreet}
                                permanentBarangay={permanentBarangay}
                                permanentCity={permanentCity}
                                permanentProvince={permanentProvince}
                                permanentCountry={permanentCountry}
                                setCurrentHouseNumber={setCurrentHouseNumber}
                                setCurrentStreet={setCurrentStreet}
                                setCurrentBarangay={setCurrentBarangay}
                                setCurrentCity={setCurrentCity}
                                setCurrentProvince={setCurrentProvince}
                                setCurrentCountry={setCurrentCountry}
                                setPermanentHouseNumber={setPermanentHouseNumber}
                                setPermanentStreet={setPermanentStreet}
                                setPermanentBarangay={setPermanentBarangay}
                                setPermanentCity={setPermanentCity}
                                setPermanentProvince={setPermanentProvince}
                                setPermanentCountry={setPermanentCountry}
                            />
                        )}

                        {step === 5 && (
                            <RegisterStepFive
                                fatherFirstName={fatherFirstName}
                                fatherMiddleName={fatherMiddleName}
                                fatherLastName={fatherLastName}
                                fatherExtensionName={fatherExtensionName}
                                motherFirstName={motherFirstName}
                                motherMiddleName={motherMiddleName}
                                motherLastName={motherLastName}
                                motherExtensionName={motherExtensionName}
                                guardianFirstName={guardianFirstName}
                                guardianMiddleName={guardianMiddleName}
                                guardianLastName={guardianLastName}
                                guardianExtensionName={guardianExtensionName}
                                setFatherFirstName={setFatherFirstName}
                                setFatherMiddleName={setFatherMiddleName}
                                setFatherLastName={setFatherLastName}
                                setFatherExtensionName={setFatherExtensionName}
                                setMotherFirstName={setMotherFirstName}
                                setMotherMiddleName={setMotherMiddleName}
                                setMotherLastName={setMotherLastName}
                                setMotherExtensionName={setMotherExtensionName}
                                setGuardianFirstName={setGuardianFirstName}
                                setGuardianMiddleName={setGuardianMiddleName}
                                setGuardianLastName={setGuardianLastName}
                                setGuardianExtensionName={setGuardianExtensionName}
                            />
                        )}

                        {step === 6 && (
                            <RegisterStepSix
                                yearCompleted={yearCompleted}
                                gradeCompleted={gradeCompleted}
                                lastSchoolAttended={lastSchoolAttended}
                                lastSchoolId={lastSchoolId}
                                track={track}
                                strand={strand}
                                isFirstSemester={isFirstSemester}
                                modalities={modalities}
                                setYearCompleted={setYearCompleted}
                                setGradeCompleted={setGradeCompleted}
                                setLastSchoolAttended={setLastSchoolAttended}
                                setLastSchoolId={setLastSchoolId}
                                setTrack={setTrack}
                                setStrand={setStrand}
                                setIsFirstSemester={setIsFirstSemester}
                                setModalities={setModalities}
                                isReturning={isReturning}
                                gradeLevel={gradeLevel}
                            />
                        )}
                    </form>
                </FormProvider>
                <Button
                    className="w-full"
                    onClick={step === 6 ? handleSubmit : () => setStep(step + 1)}
                    disabled={isLoading || isStep6FieldsInvalid}
                >
                    {isLoading ? <Spinner /> : (step === 6 ? "Register" : "Next")}
                </Button>
            </CardContent>
        </Card>
    )
}
