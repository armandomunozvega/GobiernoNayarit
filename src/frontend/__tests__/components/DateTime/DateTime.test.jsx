import userEvent from "@testing-library/user-event";
import { render, screen } from "~/helpers/test-utils";
import DateTime from "~/components/DateTime/DateTime";

describe("DateTime component", () => {
  it("should render the DateTime", () => {
    render(
      <DateTime
        id="prueba"
        name="prueba"
        labelText="prueba"
        handleChange={() => {}}
        value=""
      />
    );
    const date = screen.getByLabelText("prueba");

    expect(date).toBeInTheDocument();
    userEvent.click(screen.getByText("prueba"));
  });

  it("should render the DateTime", () => {
    render(
      <DateTime
        id="prueba"
        name="prueba"
        labelText="prueba"
        handleChange={() => {}}
        timeFormat
        value=""
      />
    );
    const date = screen.getByLabelText("prueba");

    expect(date).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("prueba"));
  });
});
