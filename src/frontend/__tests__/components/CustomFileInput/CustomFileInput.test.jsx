import userEvent from "@testing-library/user-event";
import { render, screen } from "~/helpers/test-utils";
import Input from "~/components/CustomFileInput/CustomFileInput";

describe("CustomFileInput component", () => {
  it("should render the CustomFileInput", () => {
    render(
      <Input
        id="prueba"
        name="prueba"
        labelText="prueba"
        handleChange={() => {}}
        value=""
        success
        inputProps={{ type: "file" }}
        endButton={{}}
      />
    );
    const input = screen.getByLabelText("prueba");

    expect(input).toBeInTheDocument();
    userEvent.click(screen.getByText("prueba"));
  });

  it("should render the CustomFileInput", () => {
    render(
      <Input
        id="prueba"
        name="prueba"
        labelText="prueba"
        CustomInput={() => {}}
        value=""
        success
        startButton={{}}
      />
    );
    const input = screen.getByLabelText("prueba");

    expect(input).toBeInTheDocument();
    userEvent.click(screen.getByText("prueba"));
  });
});
