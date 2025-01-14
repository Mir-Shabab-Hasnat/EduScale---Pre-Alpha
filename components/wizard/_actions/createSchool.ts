"use server"

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function CreateUserSchool( {name, userType}: {name: string, userType: string}) {
    const user = await currentUser();
    if (!user) {
        redirect('/sign-in')
    }

    const existingSchool = await prisma.school.findUnique({
        where: {
            schoolId: user.id
        }
    })

    if (existingSchool) {
        throw new Error("School already exists")
    }

    const school = await prisma.school.create({
        data: {
            schoolId: user.id,
            name: name
        }
    })

    return school

}