import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/HomeView";
import FavoriteView from "./views/FavoriteView";
import DetailView from "./views/DetailView";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/favorite" element={<FavoriteView />} />
        <Route path="/detail/:id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
