import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen p-4 flex items-center justify-center">
      <SignIn />
    </div>
  );
}
