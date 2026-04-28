'use server';

import { auth } from '@/lib/auth/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import z from 'zod';

const signInSchema = z.object({
    email: z.email("Email is required"),
    password: z.string().trim().min(1, "Password is required")
});

type SignInFormState = {
    errors?: {
        email?: string[];
        password?: string[];
    },
    message?: string;
}

export async function signInWithEmail(
    _prevState: SignInFormState | undefined,
    formData: FormData
) {
    const vaildatedFields = signInSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });

    if (!vaildatedFields.success) {
        return {
            errors: z.flattenError(vaildatedFields.error).fieldErrors,
        }
    }

    const { email, password } = vaildatedFields.data;

    const { error } = await auth.signIn.email({
        email,
        password
    });

    if (error) {
        return { message: error.message || 'Failed to sign in. Try again' };
    }

    redirect('/book');
}

const signupSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.email("Email is required"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[a-z]/, "Password must have at least one lowercase character")
        .regex(/[A-Z]/, "Password must have at least one uppercase character")
        .regex(/[0-9]/, "Password must have at least one number")
        .regex(/[^a-zA-Z0-9]/, "Password must have at least one special character")
        .trim()
});

type SignupFormState = {
    errors?: {
        email?: string[];
        name?: string[];
        passowrd?: string[];
    }
    message?: string;
}

export async function signUpWithEmail(
    _prevState: SignupFormState | undefined,
    formData: FormData
) {
    const validatedFields = signupSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    });

    if (!validatedFields.success) {
        return {
            errors: z.flattenError(validatedFields.error).fieldErrors,
        }
    }

    const { name, email, password } = validatedFields.data;
    const { error, data } = await auth.signUp.email({
        email,
        name,
        password
    });

    if (error) {
        return {
            message: error.message || 'Failed to create account'
        };
    }

    if (data.user && !data.user.emailVerified) {
        (await cookies()).set("pending_email", email, {
            httpOnly: true,
            maxAge: 60 * 10,
            path: '/'
        });

        redirect('/auth/sign-up/verify');
    } else {
        redirect('/auth/sign-in');
    }
}

const verifySchema = z.object({
    otp: z.string().trim().min(1, "Code is required")
})

type VerifyFormState = {
    errors?: {
        otp?: string[];
    }
}

export async function handleVerifyEmail(
    _prevState: VerifyFormState | undefined,
    formData: FormData
) {
    const validatedFeilds = verifySchema.safeParse({
        otp: formData.get('otp')
    });

    if (!validatedFeilds.success) {
        return {
            errors: z.flattenError(validatedFeilds.error).fieldErrors
        }
    }

    const { otp } = validatedFeilds.data;
    const email = (await cookies()).get('pending_email')!.value;

    const { error } = await auth.emailOtp.verifyEmail({
        email,
        otp
    });

    if (error) {
        return { message: error.message }
    }

    (await cookies()).delete("pending_email");
    redirect('/book');
}

export async function signOut() {
    await auth.signOut();

    redirect('/auth/sign-in');
}