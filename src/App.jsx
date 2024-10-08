import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import DashboardPage from "./pages/core/DashboardPage";
import UserAccountListPage from "./pages/useracc/UserAccountListPage";
import BookCatalogPage from "./pages/bookCatalog/BookCatalogPage";
import BookIssuePage from "./pages/bookIssue/BookIssuePage";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserAccountInfoPage from "./pages/userAccount/UserAccountInfoPage";
import CreateUserAccountPage from "./pages/userAccount/CreateUserAccountPage";
import AppLayout from "./components/AppLayout";
import MemberPage from "./pages/member/MemberPage";
import BookInformation from "./pages/bookCatalog/BookInformation";
import Newmember from "./pages/member/Newmember";
import CreateBookCatalog from "./pages/bookCatalog/CreateBookCatalog";


function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user-account">
          <Route index element={<UserAccountListPage />} />
          <Route path=":id" element={<UserAccountInfoPage />} />
          <Route path="new" element={<CreateUserAccountPage />} />
        </Route>
        <Route path="/book-catalog" element={<BookCatalogPage />} />
        <Route path="/book-catalog/new" element={<CreateBookCatalog />} />
        <Route path="/book-issue" element={<BookIssuePage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/book-catalog/info/:id" element={<BookInformation />} />
        <Route path="/member/new" element={<Newmember />} />
      </Route>
    </Routes>
  );
}

export default App;

