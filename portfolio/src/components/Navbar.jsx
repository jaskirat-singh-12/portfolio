import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { assets } from "../assets/assets";

function Navbar() {
  const onButtonClick = () => {
    fetch(assets.jaskirat).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "portfoliosrcassetsJaskirat.pdf";
        alink.click();
      });
    });
  };

  const [themeMode, setThemeMode] = useState("light");

  const switchToDarkTheme = () => {
    if (themeMode !== "dark") {
      setThemeMode("dark");
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between dark:bg-gray-900">
        <h1 className="text-2xl ml-5 font-bold dark:text-white">Jaskirat</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={switchToDarkTheme}
              className="text-xl cursor-pointer"
            />
          </li>
          <li>
            <button
              className="text-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-white py-2 px-5 ml-8 mr-6 rounded-md"
              onClick={onButtonClick}
            >
              Resume{" "}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
