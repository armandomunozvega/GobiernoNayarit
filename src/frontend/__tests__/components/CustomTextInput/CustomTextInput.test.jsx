import userEvent from "@testing-library/user-event";
import { render, screen } from "~/helpers/test-utils";
import Input from "~/components/CustomTextInput/CustomTextInput";

describe("CustomTextInput component", () => {
  it("should render the CustomTextInput", () => {
    render(
      <Input
        id="prueba"
        name="prueba"
        labelText="prueba"
        handleChange={() => {}}
        value=""
        success
        inputProps={{ type: "file" }}
      />
    );
    const input = screen.getByLabelText("prueba");

    expect(input).toBeInTheDocument();
    userEvent.click(screen.getByText("prueba"));
  });
});
