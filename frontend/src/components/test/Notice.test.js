import { render, screen, cleanup } from "@testing-library/react";
import Notice from "../Notice";
import AdminHome from "../AdminHome";
import CreateAdminHome from "../CreateAdminHome";
import EditAdminPost from "../EditAdminPost";
import MarkingHome from "../MarkingHome";
import CreateMarking from '../CreateMarking'
import AdminUploads from "../AdminUploads";

test("should render Notice Component", () => {
  render(<Notice />);
  const NoticeElement = screen.getByTestId("Notice-1");
  expect(NoticeElement).toBeInTheDocument();
});
test("should render Admin Home Component", () => {
  render(<AdminHome />);
  const AdminHomeElement = screen.getByTestId("AdminHome-1");
  expect(AdminHomeElement).toBeInTheDocument();
});
test("should render Create Admin Post Component", () => {
  render(<CreateAdminHome />);
  const CreateAdminElement = screen.getByTestId("CreateAdmin-1");
  expect(CreateAdminElement).toBeInTheDocument();
});
test("should render Edit Admin Post Component", () => {
  render(<EditAdminPost />);
  const EditAdminElement = screen.getByTestId("EditAdmin-1");
  expect(EditAdminElement).toBeInTheDocument();
});
test("should render Marking Home Component", () => {
    render(<MarkingHome />);
    const MarkingHomeElement = screen.getByTestId("Marking-1");
    expect(MarkingHomeElement).toBeInTheDocument();
  });
  test("should render Create Marking Component", () => {
    render(<CreateMarking />);
    const CreateMarkingElement = screen.getByTestId("Marking-2");
    expect(CreateMarkingElement).toBeInTheDocument();
  });
  test("should render Document Upload Component", () => {
    render(<AdminUploads />);
    const AdminUploadsElement = screen.getByTestId('Uploads-1');
    expect(AdminUploadsElement).toBeInTheDocument();
  });
   