'use client';

import { useActionState } from "react";
import { Field, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signUpWithEmail } from "@/lib/auth/actions";

export default function SignUpPage() {
    const [state, formAction, isPending] = useActionState(signUpWithEmail, undefined);

    return (
        <form action={formAction}>
            <FieldGroup>
                <FieldSet>
                    <FieldLegend>Create new account</FieldLegend>

                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor='name'>
                                Name
                            </FieldLabel>
                            <Input
                                name="name"
                                id="name"
                                placeholder="John Doe"
                                aria-describedby='name-error'
                            />
                            <FieldError
                                id="name-error"
                                errors={state?.errors?.name}
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor='email'>
                                Email address
                            </FieldLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="johndoe@gmail.com"
                                aria-describedby='email-error'
                            />
                            <FieldError
                                id="email-error"
                                errors={state?.errors?.email}
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor='password'>
                                Password
                            </FieldLabel>
                            <Input
                                id='password'
                                name='password'
                                type='password'
                                placeholder='********'
                                aria-describedby='password-error'
                            />
                            <FieldError
                                id='password-error'
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