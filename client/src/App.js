//Router
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Material UI
import { Container } from "@material-ui/core";
// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
