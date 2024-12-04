import React from 'react';

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <img 
      src="https://i.ibb.co/WG1SRm9/Whats-App-Image-2024-11-23-at-16-26-03-5f101ecd.jpg" 
      alt="FinoBaba - Your Financial Guide" 
      className={className}
    />
  );
}