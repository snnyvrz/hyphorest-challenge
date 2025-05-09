import type { PropsWithChildren } from "react";

export const Hero = ({ children }: PropsWithChildren) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
};
