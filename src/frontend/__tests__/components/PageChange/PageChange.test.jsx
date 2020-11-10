import { render, screen } from "~/helpers/test-utils";
import PageChange from "~/components/PageChange/PageChange";

describe("Grid component", () => {
  it("should render the Grid", () => {
    render(<PageChange />);
    const pageChange = screen.getByText("Cargando contenido...");

    expect(pageChange).toBeInTheDocument();
  });
});
