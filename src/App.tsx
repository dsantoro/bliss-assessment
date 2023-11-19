import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import QuestionDetails from "./pages/QuestionDetails";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Header />
      <div className="container">
        <Router>
          <Switch>
            <Route path="/questions/:questionId">
              <QuestionDetails />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <ToastContainer />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
