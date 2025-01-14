import { School } from 'lucide-react';
import React from 'react'

const Logo = () => {
    return (
      <a href="/" className="flex items-center gap-2">
        
          <School className="stroke h-11 w-11 stroke-indigo-500 stroke=[1.5] mr-4" />
          <p className="bg-gradient-to-r from-indigo-400 to-indigo-600 dark:from-indigo-50 dark:to-indigo-300 bg-clip-text text-5xl font-bold leading-tight tracking-tighter text-transparent">
            EduScale
          </p>
        
      </a>
    );
  };
  
  export const LogoMobile = () => {
    return (
      <a href='/' className='flex items-center gap-2'>
          
          <p className='bg-gradient-to-r from-indigo-400 to-indigo-600 dark:from-indigo-50 dark:to-indigo-300 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent'>
              Eduscale
          </p>
      </a>
    )
  }
  
  export default Logo;