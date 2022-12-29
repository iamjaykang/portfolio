import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  const onMouseLeave = () => {
    cursorRef.current.style.border = "";
  };
  const onMouseEnter = () => {
    cursorRef.current.style.left = 0;
    cursorRef.current.style.top = 0;
    cursorRef.current.style.border = "1px solid gray";
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      data-testid="app-cursor"
      className={`hidden lg:block border-gray-400 h-8 w-8 rounded-full z-50 pointer-events-none overflow-hidden fixed ease-out duration-500`}
    ></div>
  );
};

export default CustomCursor;
