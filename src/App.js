import { Route, Routes } from "react-router-dom";
import Headernav from "./components/Header";
import Footer from "./components/footer";
import Homepage from "./pages/home";
import AboutPage from "./pages/AboutPage";
import TeamsPage from "./pages/TeamsPage";
function App() {
  return (
    <div className="App">
      <Headernav></Headernav>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/about" element={<AboutPage></AboutPage>} />
        <Route path="/teams" element={<TeamsPage></TeamsPage>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
