import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const GetStarted = async () => {
  const user = await currentUser();

  if (!user?.id) {
    console.log("No user")
    redirect("/")
  }

  const userSettings = await prisma.user.findUnique(
    {
      where: {
        userId: user.id
      },
      include: {
        school: true
      }
      
      
    }
  )

  if (!userSettings) {
    redirect("/")
  }
  if (!userSettings.school) {
    redirect("/wizard")
  }

  return (
    <div>GetStarted</div>
  )
}

export default GetStarted