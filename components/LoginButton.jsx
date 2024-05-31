'use client'
// components/LoginButton.jsx
import { signIn } from 'next-auth/react';
import React from 'react';

const GoogleLoginButton = () => {
  return (
    
      <button onClick={() => signIn('google')} className="dark:text-zinc-100 dark:hover:bg-accent dark:hover:text-accent-foreground dark:focus:bg-accent dark:focus:text-accent-foreground">
        Continuar con Google
      </button>
   
    
  );
};

export default GoogleLoginButton;
