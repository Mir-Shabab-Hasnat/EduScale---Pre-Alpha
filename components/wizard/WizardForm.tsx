"use client"

import { User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const WizardForm = () => {

    const userInfo = useQuery<User>({
        queryKey: ["create-user-info"],
        queryFn: () => fetch("/api/create-app-user").then((res) => res.json()),
    })

    console.log(userInfo.data?.userId)

  return (
    <div>WizardForm</div>
  )
}

export default WizardForm