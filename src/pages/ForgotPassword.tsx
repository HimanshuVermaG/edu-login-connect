
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const { toast } = useToast();

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mobileNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter your mobile number",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would send OTP to the mobile number
    console.log('Send OTP to', mobileNumber);
    
    toast({
      title: "OTP Sent",
      description: `A 6-digit OTP has been sent to ${mobileNumber}`,
    });
    
    setStep(2);
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otp.trim() || otp.length !== 6) {
      toast({
        title: "Error",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would verify the OTP here
    console.log('Verify OTP', otp);
    
    toast({
      title: "Success",
      description: "OTP verified successfully. You can now reset your password.",
    });
    
    // Redirect to reset password page (in a real app)
    // For now, we'll just redirect to login
    setStep(3);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="auth-card">
          <Link to="/login" className="flex items-center text-edu-primary mb-6 hover:underline">
            <ArrowLeft size={16} className="mr-1" /> Back to Login
          </Link>

          <h1 className="auth-title text-center">
            {step === 1 && "Forgot Password"}
            {step === 2 && "Verify OTP"}
            {step === 3 && "Password Reset"}
          </h1>

          {step === 1 && (
            <form onSubmit={handleSendOTP}>
              <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">
                  Enter your registered mobile number and we'll send you an OTP to reset your password.
                </p>
                
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    className="auth-input"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    pattern="[0-9]*"
                    inputMode="numeric"
                  />
                </div>
                
                <button type="submit" className="auth-btn-primary">
                  Send OTP
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleVerifyOTP}>
              <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">
                  Enter the 6-digit OTP sent to {mobileNumber}
                </p>
                
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                    OTP
                  </label>
                  <input
                    id="otp"
                    type="text"
                    className="auth-input"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                    maxLength={6}
                    pattern="[0-9]*"
                    inputMode="numeric"
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    className="text-sm text-edu-primary hover:underline"
                    onClick={() => setStep(1)}
                  >
                    Change Mobile Number
                  </button>
                  
                  <button
                    type="button"
                    className="text-sm text-edu-primary hover:underline"
                    onClick={() => {
                      toast({
                        title: "OTP Resent",
                        description: `A new 6-digit OTP has been sent to ${mobileNumber}`,
                      });
                    }}
                  >
                    Resend OTP
                  </button>
                </div>
                
                <button type="submit" className="auth-btn-primary">
                  Verify OTP
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">Password Reset Successful</p>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Your password has been reset successfully. You can now log in with your new password.
                </p>
              </div>
              
              <Link to="/login" className="auth-btn-primary block text-center">
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
