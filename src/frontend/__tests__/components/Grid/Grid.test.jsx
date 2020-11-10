import { render, screen } from "~/helpers/test-utils";
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";

describe("Grid component", () => {
  it("should render the Grid", () => {
    const title = "Test Grid!";

    render(
      <GridContainer>
        <GridItem>{title}</GridItem>
      </GridContainer>
    );
    const grid = screen.getByText(title);

    expect(grid).toBeInTheDocument();
  });
});
