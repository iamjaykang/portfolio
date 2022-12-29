import React from "react";
import { render, waitFor } from "@testing-library/react";
import AnimatedSentence from "../../../../app/common/animatedSentence/AnimatedSentence";

test("AnimatedSentence displays the text and animates the cursor", async () => {
  const text = "Hello, world!";
  const { getByText } = render(<AnimatedSentence text={text} />);

  // Wait for the typing animation to complete
  await waitFor(() => getByText(text));

  // Check that the text is displayed
  expect(getByText(text)).toBeInTheDocument();
});

test("AnimatedSentence animates the cursor during the typing phase", async () => {
  const text = "Hello, world!";
  const { getByText, getByTestId } = render(<AnimatedSentence text={text} />);

  // Check that the typing-cursor class is present
  expect(getByTestId("cursor")).toHaveClass("typing-cursor");

  // Wait for the typing animation to complete
  await waitFor(() => getByText(text));
});

test("AnimatedSentence animates the blinking cursor during the completed phase", async () => {
  const text = "This is some text";
  const { getByTestId, getByText } = render(<AnimatedSentence text={text} />);

  // Wait for the typing animation to complete
  await waitFor(() => getByText(text));

  // Check that the phase is set to 'completed'
  expect(getByTestId("cursor").classList).toContain("blinking-cursor");
});
