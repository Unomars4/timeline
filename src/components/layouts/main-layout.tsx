import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="font-inter relative -z-0 min-h-screen min-w-screen flex justify-center">
      {children}
    </main>
  );
}

export default MainLayout;
