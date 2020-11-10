import { render, screen } from "~/helpers/test-utils";
import Card from "~/components/Card/Card";
import CardHeader from "~/components/Card/CardHeader";
import CardBody from "~/components/Card/CardBody";

describe("Card component", () => {
  it("should render the Card", () => {
    const cardProps = {
      color: "primary",
    };

    const title = "Test Card!";
    const body = "Body Card!";

    render(
      <Card {...cardProps}>
        <CardHeader {...cardProps}>{title}</CardHeader>
        <CardBody>{body}</CardBody>
      </Card>
    );
    const card = screen.getByText(title);

    expect(card).toBeInTheDocument();
  });

  it("should render the Card", () => {
    const title = "Test Card!";
    const body = "Body Card!";

    render(
      <Card pricing>
        <CardHeader>{title}</CardHeader>
        <CardBody>{body}</CardBody>
      </Card>
    );
    const card = screen.getByText(title);

    expect(card).toBeInTheDocument();
  });
});
