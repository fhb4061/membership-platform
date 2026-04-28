'use client';

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth/actions";

export default function Book() {
    return (
        <div className="grid gap-5">
            <span>I am book</span>
            <Button
                onClick={async () => {
                    await signOut();
                }}
            >
                Sign out
            </Button>
        </div>
    )
}