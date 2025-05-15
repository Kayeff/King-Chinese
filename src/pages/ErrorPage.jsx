import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-chilli-red font-inter flex-col gap-4">
      <h1 className="text-5xl tracking-tighter">错误</h1>
      <h1 className="text-5xl tracking-tighter">
        Failed to navigate to desired route.
      </h1>
      <Link className="tracking-tighter font-medium underline" to="">
        Go to Home
      </Link>
    </div>
  );
}
