import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";
import Loader from "../Loader/loader";

// Use React.forwardRef to allow passing refs to the button
const Button = React.forwardRef(({ children, type, onClick, classes }, ref) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This ensures the component is mounted before rendering
    setMounted(true);
  }, []);
  if (!mounted) return <Loader />; // Avoid rendering until mounted

  if (type === "primary") {
    return (
      <button
        ref={ref} // Attach the ref here
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
          theme === "dark" ? "bg-white text-black" : "bg-black text-white"
        }  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link  ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      ref={ref} // Attach the ref here
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-slate-600 text-white"
          : "hover:bg-slate-100"
      } hover:scale-105 active:scale-100  tablet:first:ml-0  ${classes} link`}
    >
      {children}
    </button>
  );
});

// Add displayName for easier debugging
Button.displayName = "Button";

export default Button;
