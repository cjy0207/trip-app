import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import TransportSearchPage from "./pages/SearchPage/TransportSearchPage/TransportSearchPage";
import LeisureSearchPage from "./pages/SearchPage/LeisureSearchPage/LeisureSearchPage";
import FestivalSearchPage from "./pages/SearchPage/FestivalSearchPage/FestivalSearchPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />}>
            <Route path="transport" element={<TransportSearchPage />} />
            <Route path="leisure" element={<LeisureSearchPage />} />
            <Route path="festival" element={<FestivalSearchPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
