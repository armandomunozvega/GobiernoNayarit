import { render, screen } from "~/helpers/test-utils";
import Section from "~/components/Section/Section";

describe("Section component", () => {
  it("should render the Section", () => {
    const title = "Test Section!";

    render(<Section title={title} />);
    const section = screen.getByText(title);

    expect(section).toBeInTheDocument();
  });
});
