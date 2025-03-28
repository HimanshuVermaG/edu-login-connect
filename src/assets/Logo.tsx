
import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-edu-primary"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
      <span className="text-xl font-semibold text-edu-primary">EduConnect</span>
    </div>
  );
};
