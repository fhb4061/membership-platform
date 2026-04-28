import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth/actions";
import { auth } from "@/lib/auth/server"
import Link from "next/link";
import Book from "./book";

// Server components using auth methods must be rendered dynamically
export const dynamic = 'force-dynamic';

export default async function BookPage() {
    const { data: session } = await auth.getSession();

    if (!session?.user) {
        return (
            <>
                <h1 className="mb-4 text-4xl font-bold">Not logged in</h1>
                <div className="flex item-center gap-2">
                    <Button asChild>
                        <Link href="/auth/sign-up">
                            Sign-up
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/auth/sign-in">
                            Sign-in
                        </Link>
                    </Button>
                </div>
            </>
        );
    }

    return (
        <Book />
    )
}