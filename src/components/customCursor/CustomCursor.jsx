import React from "react";

const CustomCursor = ({ cursorRef, mouseEnter }) => {
  return (
    <>
      {cursorRef && (
        <div
          ref={cursorRef}
          className={mouseEnter ? `hidden lg:block border-gray-400 h-8 w-8 rounded-full z-50 pointer-events-none overflow-hidden fixed ease-out duration-500 top-0 left-0 border` : 'hidden'}
          id="app-cursor"
        ></div>
      )}
    </>
  );
};

export default CustomCursor;
