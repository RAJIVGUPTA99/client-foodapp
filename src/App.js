import "./App.css";
import Header from "./app/core/components/layouts/Header";
import Footer from "./app/core/components/layouts/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthRouters from "./app/auth/routings/AuthRouters";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./app/auth/action/authAction";
import Alert from "./app/core/components/Alert";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import Home from "./app/home/components/Home";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Alert />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/auth/*" element={<AuthRouters></AuthRouters>}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
