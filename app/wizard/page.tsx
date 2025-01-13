import Logo from '@/components/Logo';
import WizardForm from '@/components/wizard/WizardForm';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const WizardPage = async () => {
    const user = await currentUser();
    if (!user) {
        redirect('/sign-in')
    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Logo />
      <WizardForm />
    </div>
  )
}

export default WizardPage