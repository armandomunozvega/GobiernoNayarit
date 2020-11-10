import { render, screen } from "~/helpers/test-utils";
import Checkbox from "~/components/CustomCheckBox/CustomCheckBox";

describe("Checkbox component", () => {
  it("should render the Checkbox", () => {
    render(
      <Checkbox
        id="prueba"
        name="prueba"
        label="prueba"
        checked
        handleChange={() => {}}
        success
      />
    );
    const check = screen.getByLabelText("prueba");

    expect(check).toBeInTheDocument();
  });
});
