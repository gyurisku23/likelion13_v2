import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import DiaryPage from "../pages/DiaryPage";
import Layout from "../layouts/Layout";
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={ <ProjectPage /> } />
          <Route path="/diary" element={ <DiaryPage /> } />
        </Route>
      </Routes>
    </Router>
  );
}