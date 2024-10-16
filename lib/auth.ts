import { supabase } from "@/lib/supabase";

export async function registerUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string
) {
    const { data: { user }, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                first_name: firstName,
                last_name: lastName,
            }
        },
    });

    if (error || !user) {
        return { success: false, message: error?.message || 'Registration failed' };
    }

    return { success: true, user };
}