'use client';

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { FieldGroup, FieldSet, FieldLegend, Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signInWithEmail } from "@/lib/auth/actions";

export default function SignInPage() {
    const [state, formAction, isPending] = useActionState(signInWithEmail, undefined);

    return (
        <form action={formAction}>
            <FieldGroup>
                <FieldSet>
                    <FieldLegend>Sign in</FieldLegend>

                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="email">
                                Email
                            </FieldLabel>
                            <Input
                                id="email"
                                name="email"
                                placeholder="johndoe@gmail.com"
                                aria-describedby="email-error"
                            />
                            <FieldError
                                id="email-error"
                                errors={state?.errors?.email}
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="password">
                                Password
                            </FieldLabel>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="********"
                                aria-describedby="password-error"
                            />
                            <FieldError
                                id="password-error"
                                errors={state?.errors?.password}
                            />
                        </Field>

                        <Field orientation="horizontal">
                            <Button type="submit" disabled={isPending}>Submit</Button>
                            <Button asChild>
                                <Link href="/book">
                                    Cancel
                                </Link>
                            </Button>
                        </Field>
                    </FieldGroup>
                </FieldSet>

                {state?.message && (
                    <FieldError>
                        {state.message}
                    </FieldError>
                )}
            </FieldGroup>
        </form>
    )
}