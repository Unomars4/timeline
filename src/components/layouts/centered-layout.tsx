import { ReactNode } from "react";

type CenteredLayoutProps = {
  children: ReactNode;
};

function CenteredLayout({ children }: CenteredLayoutProps) {
  return (
    <div className="w-4/5 h-[600px] m-auto flex flex-col justify-between">
      {children}
    </div>
  );
}

export default CenteredLayout;
