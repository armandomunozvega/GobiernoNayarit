import { render, screen } from "~/helpers/test-utils";
import Table from "~/components/Table/Table";

describe("Table component", () => {
  it("should render the Table", () => {
    const list = [{ id: 1, name: "prueba", color: "blue" }];
    const renderList = () => {
      return list.map((listItem) => {
        // eslint-disable-next-line camelcase
        const { id, name } = listItem;
        return [id, name];
      });
    };
    render(
      <Table
        striped
        tableHead={["id", "Name", "Color"]}
        tableData={renderList()}
      />
    );
    const table = screen.getByText("Name");

    expect(table).toBeInTheDocument();
  });
  it("should render the Table Empty", () => {
    const list = [];
    const renderList = () => {
      return list.map((listItem) => {
        // eslint-disable-next-line camelcase
        const { id, name } = listItem;
        return [id, name];
      });
    };
    render(
      <Table
        striped
        tableHead={["id", "Name"]}
        tableData={renderList()}
        customCellClasses={["textCenter", "padding0"]}
        customClassesForCells={[0, 1]}
        customHeadCellClasses={["textCenter", "textRight"]}
        customHeadClassesForCells={[0]}
      />
    );
    const table = screen.getByText("Name");

    expect(table).toBeInTheDocument();
  });
});
