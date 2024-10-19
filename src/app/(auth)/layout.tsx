import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="">
      <Image src="logo.svg" alt="Logo" width={50} height={50} />
      {children}
    </div>
  );
};

export default AuthLayout;
