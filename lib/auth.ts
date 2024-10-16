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

export async function loginUser(
    email: string,
    password: string
) {
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError || !authData.user) {
        return { success: false, message: authError?.message || 'Login failed' };
    }

    const { data: userData, error: userError } = await supabase
        .from('users')
        .select('role')
        .eq('id', authData.user.id)
        .single();

    if (userError || !userData) {
        return { success: false, message: userError?.message || 'Role fetch failed' };
    }

    localStorage.setItem('userId', authData.user.id);

    return { success: true, role: userData.role };
}

export async function logoutUser() {
    try {
        localStorage.clear();

        await supabase.auth.signOut();
    } catch (error) {
        return false;
    }
}
