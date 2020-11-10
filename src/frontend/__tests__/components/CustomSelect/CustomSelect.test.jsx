import { render, screen } from "~/helpers/test-utils";
import Select from "~/components/CustomSelect/CustomSelect";

describe("Select component", () => {
  it("should render the Select", () => {
    const option = [
      { id: 1, label: "prueba1" },
      { id: 2, label: "prueba2" },
    ];
    render(
      <form>
        <Select
          id="prueba"
          name="prueba"
          labelText="prueba"
          handleChange={() => {}}
          value="1"
          options={option}
        />
      </form>
    );
    const select = screen.getByText("prueba1");

    expect(select).toBeInTheDocument();
  });

  it("should render the Select multiple", () => {
    const option = [
      { id: 1, label: "prueba1" },
      { id: 2, label: "prueba2" },
    ];
    render(
      <form>
        <Select
          id="prueba"
          name="prueba"
          labelText="prueba"
          handleMultipleChange={() => {}}
          handleChange={() => {}}
          value={["1"]}
          options={option}
          multiple
        />
      </form>
    );
    const select = screen.getByText("prueba1");

    expect(select).toBeInTheDocument();
  });
});
