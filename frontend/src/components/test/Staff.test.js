import { render, screen, cleanup } from "@testing-library/react";
import Addpanel from "../Addpanel";
import Addform from "../Addform";
import Edit from "../Edit";
import Addpanelmember from "../Addpanelmember";
import Viewpanelmember from "../Viewpanelmember";
import Editpanel from "../Editpanel";


test("should render Add Panel Component", () => {
  render(<Addpanel />);
  const AddPanelElement = screen.getByTestId("Add-1");
  expect(AddPanelElement).toBeInTheDocument();
});
test("should render Add Form Component", () => {
  render(<Addform />);
  const AddformElement = screen.getByTestId("Addform-1");
  expect(AddformElement).toBeInTheDocument();
});
test("should render Edit Component", () => {
  render(<Edit />);
  const EditElement = screen.getByTestId("Edit-1");
  expect(EditElement).toBeInTheDocument();
});
test("should render Addpanelmember Component", () => {
  render(<Addpanelmember />);
  const AddpanelElement = screen.getByTestId("Addpanel-1");
  expect(AddpanelElement).toBeInTheDocument();
});
test("should render Viewpanel Component", () => {
  render(<Viewpanelmember />);
  const ViewpanelElement = screen.getByTestId("Viewpanel-1");
  expect(ViewpanelElement).toBeInTheDocument();
});
test("should render Editpanel Component", () => {
  render(<Editpanel />);
  const EditpanelElement = screen.getByTestId("Editpanel-1");
  expect(EditpanelElement).toBeInTheDocument();
});