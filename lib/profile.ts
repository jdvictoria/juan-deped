import { supabase } from "@/lib/supabase";
import { StudentProfile } from "@/types/profile";

interface TeacherDataProps {
    firstName: string;
    middleName?: string;
    lastName: string;
    extensionName?: string;
    birthDate: Date | undefined;
    gender: string;
    mobileNumber: string;
    role: string;
}

export async function addStudentData(
    userId: string | undefined,
    studentData: StudentProfile
) {
    const {
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
    } = studentData;

    const { error } = await supabase
        .from('users')
        .insert([
            {
                id: userId,
                first_name: firstName,
                middle_name: middleName,
                last_name: lastName,
                extension_name: extensionName,
                birth_date: birthDate,
                gender,
                mobile_number: mobileNumber,
                is_with_lrn: isWithLrn,
                is_returning: isReturning,
                school_year: schoolYear,
                grade_level: gradeLevel,
                birth_place: birthPlace,
                mother_tongue: motherTongue,
                birth_certificate: birthCertificate,
                learner_reference: learnerReference,
                is_with_community: isWithCommunity,
                community,
                is_beneficiary: isBeneficiary,
                beneficiary,
                current_house_number: currentHouseNumber,
                current_street: currentStreet,
                current_barangay: currentBarangay,
                current_city: currentCity,
                current_province: currentProvince,
                current_country: currentCountry,
                permanent_house_number: permanentHouseNumber,
                permanent_street: permanentStreet,
                permanent_barangay: permanentBarangay,
                permanent_city: permanentCity,
                permanent_province: permanentProvince,
                permanent_country: permanentCountry,
                father_first_name: fatherFirstName,
                father_middle_name: fatherMiddleName,
                father_last_name: fatherLastName,
                father_extension_name: fatherExtensionName,
                mother_first_name: motherFirstName,
                mother_middle_name: motherMiddleName,
                mother_last_name: motherLastName,
                mother_extension_name: motherExtensionName,
                guardian_first_name: guardianFirstName,
                guardian_middle_name: guardianMiddleName,
                guardian_last_name: guardianLastName,
                guardian_extension_name: guardianExtensionName,
                year_completed: yearCompleted,
                grade_completed: gradeCompleted,
                last_school_attended: lastSchoolAttended,
                last_school_id: lastSchoolId,
                track,
                strand,
                is_first_semester: isFirstSemester,
                modalities,
                role: 'student',
            }
        ]);

    if (error) {
        return { success: false, message: error.message };
    }

    return { success: true };
}

export async function addTeacherData(
    userId: string | undefined,
    teacherData: TeacherDataProps
) {
    const {
        firstName,
        middleName,
        lastName,
        extensionName,
        birthDate,
        gender,
        mobileNumber,
        role
    } = teacherData;

    const { error } = await supabase
        .from('users')
        .insert([
            {
                id: userId,
                first_name: firstName,
                middle_name: middleName,
                last_name: lastName,
                extension_name: extensionName,
                birth_date: birthDate,
                gender,
                mobile_number: mobileNumber,
                role: role.toLowerCase(),
            }
        ]);

    if (error) {
        return { success: false, message: error.message };
    }

    return { success: true };
}

export async function fetchProfile() {
    const id = localStorage.getItem('userId');

    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        return { success: false, message: error?.message || 'Profile fetch failed' };
    }

    return { success: true, data };
}