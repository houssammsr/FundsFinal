import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Funds from "./pages/Funds";
import MoveFunds from "./pages/MoveFunds";
import Budget from "./pages/Budget";
import Articles from "./pages/Articles";
import Allocate from "./pages/Allocate";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/movefunds":
        title = "";
        metaDescription = "";
        break;
      case "/budget":
        title = "";
        metaDescription = "";
        break;
      case "/articles":
        title = "";
        metaDescription = "";
        break;
      case "/allocate":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Funds />} />
      <Route path="/movefunds" element={<MoveFunds />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/allocate" element={<Allocate />} />
    </Routes>
  );
}
export default App;
