import React from "react";

export default function InfoBox({ children }) {
  return (
    <div className="text-center bg-blue-100 rounded-lg border-blue-300 border p-4">
      {children}
    </div>
  );
}
