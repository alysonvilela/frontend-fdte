import { Button } from ".";
import { renderWithTheme, screen } from "../../__tests__/utils";

describe("Button Component Test", () => {
  test("should show text by prop", () => {
    renderWithTheme(<Button text="text-lorem" />);
    const iot = screen.queryByTestId("text");

    expect(iot).toBeInTheDocument();
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  test("should show icon src", () => {
    renderWithTheme(<Button icon={"img.png"} />);
    const iot = screen.queryByTestId("icon");

    expect(iot).toBeInTheDocument();
    expect(iot).toHaveAttribute("src", "img.png");
    expect(screen.queryByTestId("text")).toBeFalsy();
  });

  test("should not show shadow", () => {
    const state = false;

    renderWithTheme(<Button hasShadow={state} />);
    const iot = screen.queryByRole("button");

    expect(iot).not.toHaveClass("shadow");
  });

  test("should show shadow", () => {
    const state = true;

    renderWithTheme(<Button hasShadow={state} />);
    const iot = screen.queryByRole("button");

    expect(iot).toHaveClass("shadow");
  });
});
