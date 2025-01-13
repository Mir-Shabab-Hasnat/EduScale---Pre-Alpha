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
    <div>
      <Logo />
      <WizardForm />
    </div>
  )
}

export default WizardPage