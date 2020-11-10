import { render, screen } from "~/helpers/test-utils";
import Info from "~/components/Typography/Info";
import Warning from "~/components/Typography/Warning";

describe("Info component", () => {
  it("should render the Info", () => {
    const title = "Test Info!";

    render(
      <Info>
        <p>{title}</p>
      </Info>
    );
    const info = screen.getByText(title);

    expect(info).toBeInTheDocument();
  });
});

describe("Warning component", () => {
  it("should render the Warning", () => {
    const title = "Test Warning!";

    render(
      <Warning>
        <p>{title}</p>
      </Warning>
    );
    const warning = screen.getByText(title);

    expect(warning).toBeInTheDocument();
  });
});
