/* eslint-disable react/jsx-wrap-multilines */
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { render, screen } from "~/helpers/test-utils";
import Header from "~/components/Header/Header";
import Button from "~/components/CustomButtons/Button";

describe("Header component", () => {
  it("should render the Header", () => {
    const title = "Test header!";

    render(
      <Header
        brand="InterWare de México"
        links={
          <List className="">
            <ListItem className="">
              <Button onClick={(e) => e.preventDefault()} color="transparent">
                {title}
              </Button>
            </ListItem>
          </List>
        }
        fixed
      />
    );
    const header = screen.getByText(title);

    expect(header).toBeInTheDocument();
  });
});
