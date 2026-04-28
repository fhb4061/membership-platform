'use client';

import { useActionState } from "react";
import { Field, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { handleVerifyEmail } from "@/lib/auth/actions";

export default function VerifyEmailPage() {
    const [state, formAction, isPending] = useActionState(handleVerifyEmail, undefined);

    return (
        <form action={formAction}>
            <FieldGroup>
                <FieldSet>
                    <FieldLegend>
                        Verify Your email
                    </FieldLegend>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="otp">
                                Code
                            </FieldLabel>
                            <InputOTP
                                id="otp"
                                name="otp"
                                maxLength={6}
                                aria-describedby="otp-error"
                                disabled={isPending}
                            >
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                </InputOTPGroup>
                                <InputOTPSeparator />
                                <InputOTPGroup>
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={3} />
                                </InputOTPGroup>
                                <InputOTPSeparator />
                                <InputOTPGroup>
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                            <FieldError
                                id="otp-error"
                                errors={state?.errors?.otp}
                            />
                        </Field>
                        <Field orientation="horizontal">
                            <Button type="submit" disabled={isPending}>Verify</Button>
                        </Field>
                    </FieldGroup>
                </FieldSet>
                {
                    state?.message && (
                        <FieldError>
                            {state.message}
                        </FieldError>
                    )
                }
            </FieldGroup>
        </form>
    );
}