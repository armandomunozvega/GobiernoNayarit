import { render, screen } from "~/helpers/test-utils";
import Radio from "~/components/CustomRadio/CustomRadio";

describe("Radio component", () => {
  it("should render the Radio", () => {
    render(
      <Radio
        id="prueba"
        name="prueba"
        label="prueba"
        checked
        handleChange={() => {}}
        success
      />
    );
    const radio = screen.getByLabelText("prueba");

    expect(radio).toBeInTheDocument();
  });
});
