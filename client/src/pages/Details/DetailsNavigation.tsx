import { Link } from "react-router-dom";
import { MdArrowBack, MdHome } from "react-icons/md";

interface DetailsNavigationProps {
  onBack?: () => void;
}

export const DetailsNavigation = ({ onBack }: DetailsNavigationProps) => (
  <div className="flex items-center gap-4 mb-6 justify-between">
    <Link
      to="/tree"
      onClick={onBack}
      className="flex items-center gap-2 px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <span className="text-xl">
        <MdArrowBack />
      </span>
      Back
    </Link>
    <Link
      to="/"
      className="flex items-center gap-2 px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <span className="text-xl">
        <MdHome />
      </span>
      Home
    </Link>
  </div>
);
