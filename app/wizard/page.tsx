import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import WizardForm from '@/components/wizard/WizardForm';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const WizardPage = async () => {
    const user = await currentUser();
    if (!user) {
        redirect('/sign-in')
    }

    return (
      <div className="container flex max-w-2xl flex-col items-center justify-between gap-4">
        <div>
          
          <h1 className="text-center text-3xl">
            Welcome, <span className="ml-2 font-bold">{user.firstName}!👋</span>
          </h1>
          <h2 className="mt-4 text-center text-base text-muted-foreground">
            Let &apos;s get started by setting up your Account
          </h2>
          <h3 className="mt-2 text-center text-sm text-muted-foreground">
            You can change these settings at any time
          </h3>
        </div>
  
        <Separator />
        <Card className="w-full">
          <CardHeader>
            <CardTitle>User Details</CardTitle>
            <CardDescription>
              Set your user details and the sort of service you want to use
            </CardDescription>
          </CardHeader>
          <CardContent>
              <WizardForm />
          </CardContent>
        </Card>
        <Separator />
        
        <div className="mt-8">
          <Logo />
        </div>
      </div>
    );
  }
export default WizardPage