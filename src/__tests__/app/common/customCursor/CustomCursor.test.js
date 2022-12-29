import React from "react";
import { render } from "@testing-library/react";
import CustomCursor from "../../../../app/common/customCursor/CustomCursor";

test("CustomCursor component renders without error", () => {
    // Render the CustomCursor component
    const { getByTestId } = render(<CustomCursor />);
  
    // Retrieve the cursor element using its data-testid attribute
    const cursorElement = getByTestId("app-cursor");
  
    // Verify that the cursor element was successfully retrieved
    expect(cursorElement).toBeDefined();
  });
  
  test("CustomCursor component adds event listeners on mount", () => {
    // Mock the addEventListener function
    const addEventListenerMock = jest.fn();
    document.addEventListener = addEventListenerMock;
  
    // Render the CustomCursor component
    render(<CustomCursor />);
  
    // Verify that the addEventListener function was called 3 times
    expect(addEventListenerMock).toHaveBeenCalledTimes(3);
  
    // Verify that the addEventListener function was called with the "mousemove" event and a function as arguments
    expect(addEventListenerMock).toHaveBeenCalledWith(
      "mousemove",
      expect.any(Function)
    );
  
    // Verify that the addEventListener function was called with the "mouseleave" event and a function as arguments
    expect(addEventListenerMock).toHaveBeenCalledWith(
      "mouseleave",
      expect.any(Function)
    );
  
    // Verify that the addEventListener function was called with the "mouseenter" event and a function as arguments
    expect(addEventListenerMock).toHaveBeenCalledWith(
      "mouseenter",
      expect.any(Function)
    );
  });
  
  test("CustomCursor component removes event listeners on unmount", () => {
    // Mock the removeEventListener function
    const removeEventListenerMock = jest.fn();
    document.removeEventListener = removeEventListenerMock;
  
    // Render the CustomCursor component
    const { unmount } = render(<CustomCursor />);
  
    // Unmount the CustomCursor component
    unmount();
  
    // Verify that the removeEventListener function was called 3 times
    expect(removeEventListenerMock).toHaveBeenCalledTimes(3);
  
    // Verify that the removeEventListener function was called with the "mousemove" event and a function as arguments
    expect(removeEventListenerMock).toHaveBeenCalledWith(
      "mousemove",
      expect.any(Function)
    );
  
    // Verify that the removeEventListener function was called with the "mouseleave" event and a function as arguments
    expect(removeEventListenerMock).toHaveBeenCalledWith(
      "mouseleave",
      expect.any(Function)
    );
  
    // Verify that the removeEventListener function was called with the "mouseenter" event and a function as arguments
    expect(removeEventListenerMock).toHaveBeenCalledWith(
      "mouseenter",
      expect.any(Function)
    );
  });
  