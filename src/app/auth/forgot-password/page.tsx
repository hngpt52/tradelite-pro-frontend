"use client";

import React from 'react';
import Link from 'next/link';
import AuthForm from '@/components/auth/AuthForm';

const ForgotPasswordPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <Link href="/" className="flex items-center text-white hover:text-primary transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
      <AuthForm type="forgot-password" />
    </div>
  );
};

export default ForgotPasswordPage;
