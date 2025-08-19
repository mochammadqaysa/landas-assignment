import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import ScrollToTop from "./shared/hooks/useScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
};

export default App;
