import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="p-12 text-center">
      <h1 className="font-bold text-[32px] leading-[37px]">
        The page you're looking for is not found
      </h1>
      <Link
        className="underline text-[rgb(85,26,139)] active:text-red-700"
        to="/characters"
      >
        Back to Characters
      </Link>
    </div>
  );
}
