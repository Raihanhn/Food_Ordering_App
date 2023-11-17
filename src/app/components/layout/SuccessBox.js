import React from "react";

export default function SuccessBox({ children }) {
  return (
    <div className="text-center bg-green-100 rounded-lg border-green-300 border p-4">
      {children}
    </div>
  );
}
