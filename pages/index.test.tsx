/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import App from "@pages/index";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Let's build something cool!" })
    ).toBeInTheDocument();
  });
});
