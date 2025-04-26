// Arrow.tsx
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
    aria-label="Previous"
  >
    <MdArrowBackIos size={18} className="text-indigo-400" />
  </button>
);

export const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
    aria-label="Next"
  >
    <MdArrowForwardIos size={18} className="text-indigo-400" />
  </button>
);
