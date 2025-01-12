import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const WizardPage = async () => {
    const user = await currentUser();
    if (!user) {
        redirect('/sign-in')
    }

  return (
    <div>WizardPage</div>
  )
}

export default WizardPage