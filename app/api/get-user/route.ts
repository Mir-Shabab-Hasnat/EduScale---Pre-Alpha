import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function GET() {
    const user = await currentUser()

    if (!user) {
        redirect("/sign-in")
    }

    const userInfo = await prisma.user.findUnique({
        where: {
            userId: user.id
        }
    })

    

    return Response.json(userInfo)
}