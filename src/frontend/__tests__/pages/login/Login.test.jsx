import { fireEvent } from "@testing-library/react";
import { render, screen, waitFor } from "~/helpers/test-utils";
import Login from "~/pages/login/";

describe("Login component", () => {
  it("should render the Login", async () => {
    render(<Login />);

    const inputUser = screen.getByLabelText("Usuario");
    fireEvent.change(inputUser, {
      target: { value: "a" },
    });

    const inputPswd = screen.getByLabelText("Contraseña");
    fireEvent.change(inputPswd, {
      target: { value: "a" },
    });
    
    fireEvent.click(screen.getByText(/Ingresar/));
    await waitFor(() => {});
    // screen.debug();
  });
});
