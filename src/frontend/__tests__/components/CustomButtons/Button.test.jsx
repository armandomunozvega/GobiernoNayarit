import { render, screen } from "~/helpers/test-utils";
import Button from "~/components/CustomButtons/Button";

describe("Button component", () => {
  it("should render the button", () => {
    const buttonProps = {
      color: "primary",
    };

    const buttonLabel = "¡Test button!";

    render(<Button {...buttonProps}>{buttonLabel}</Button>);
    const button = screen.getByText(buttonLabel);

    expect(button).toBeInTheDocument();
  });
});
