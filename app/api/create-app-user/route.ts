import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function GET() {
    const clerkUser = await currentUser();

    if (!clerkUser) {
        redirect("/sign-in")
    }

    let userInfo = await prisma.user.findUnique({
        where: {
            userId: clerkUser.id,
        },  
    })

    if (!userInfo) {
        userInfo = await prisma.user.create({
            data: {
                userId: clerkUser.id,
                email: clerkUser.primaryEmailAddress?.emailAddress || "default@example.com",
                name: clerkUser.fullName || "Default User",
            }
        })
    }

    revalidatePath("/get-started")
    return Response.json(userInfo)
}