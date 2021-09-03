import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
 
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed  bottom-4  right-3  cursor-pointer">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed p-2  mb-32 rounded mx-2  bottom-3 right-7 lg:bottom-5 lg:right-5 cursor-pointer"
        >
          <img className="" src="/arrow.svg" width="80" />
        </div>
      )}
    </div>
  );
}