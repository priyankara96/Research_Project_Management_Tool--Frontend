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
  const NoticeElement = screen.getByTestId("AdminHome-1");
  expect(NoticeElement).toBeInTheDocument();
});
test("should render Create Admin Post Component", () => {
  render(<CreateAdminHome />);
  const NoticeElement = screen.getByTestId("CreateAdmin-1");
  expect(NoticeElement).toBeInTheDocument();
});
test("should render Edit Admin Post Component", () => {
  render(<EditAdminPost />);
  const NoticeElement = screen.getByTestId("EditAdmin-1");
  expect(NoticeElement).toBeInTheDocument();
});
test("should render Marking Home Component", () => {
    render(<MarkingHome />);
    const NoticeElement = screen.getByTestId("Marking-1");
    expect(NoticeElement).toBeInTheDocument();
  });
  test("should render Create Marking Component", () => {
    render(<CreateMarking />);
    const NoticeElement = screen.getByTestId("Marking-2");
    expect(NoticeElement).toBeInTheDocument();
  });
  test("should render Document Upload Component", () => {
    render(<AdminUploads />);
    const NoticeElement = screen.getByTestId('Uploads-1');
    expect(NoticeElement).toBeInTheDocument();
  });
   