import { render, screen, cleanup } from "@testing-library/react";
import Add_Student from "../Add_Student";
import All_Edit_Data from "../All_Edit_Data";
import Profile from "../Profile";
import Add_Supervisor from "../Add_Supervisor";
import Add_Co_Supervisor from "../Add_Co_Supervisor";
import Add_Lecturer from "../Add_Lecturer";
import Add_PanelMember from "../Add_PanelMember";
import Signin from "../Signin";

test("should render Add Student Component", () => {
    render(<Add_Student />);
    const AddStudentElement = screen.getByTestId("Add-Student-1");
    expect(AddStudentElement).toBeInTheDocument();
  });

test("should render Edit All Data Component", () => {
    render(<All_Edit_Data />);
    const AllEditDataElement = screen.getByTestId("All-Edit-Data-1");
    expect(AllEditDataElement).toBeInTheDocument();
  });

test("should render Profile Component", () => {
    render(<Profile />);
    const ProfileElement = screen.getByTestId("Profile-1");
    expect(ProfileElement).toBeInTheDocument();
  });
  
test("should render Add Supervisor Component", () => {
    render(<Add_Supervisor />);
    const AddSupervisorElement = screen.getByTestId("AddSupervisor-1");
    expect(AddSupervisorElement).toBeInTheDocument();
  });

test("should render Add Co-Supervisor Component", () => {
    render(<Add_Co_Supervisor />);
    const AddSupervisorElement = screen.getByTestId("AddCo-Supervisor-1");
    expect(AddSupervisorElement).toBeInTheDocument();
  });
  
test("should render Add Lecturer Component", () => {
    render(<Add_Lecturer />);
    const AddLecturerElement = screen.getByTestId("Add_Lecturer-1");
    expect(AddLecturerElement).toBeInTheDocument();
  });

  test("should render Add Panel Member Component", () => {
    render(<Add_PanelMember />);
    const AddPanelMemberElement = screen.getByTestId("AddPanelMember-1");
    expect(AddPanelMemberElement).toBeInTheDocument();
  });

test("should render Add Panel Member Component", () => {
    render(<Signin />);
    const SigninElement = screen.getByTestId("Signin-1");
    expect(SigninElement).toBeInTheDocument();
  });
  