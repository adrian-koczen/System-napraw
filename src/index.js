import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

//Components
import SignIn from "./components/signin/SignIn";
import Dashboard from "./components/dashboard/Dashboard";
import TwoFA from "./components/signin/TwoFA";
import LandingPage from "./components/landingPage/LandingPage";
import SignUp from "./components/signup/SignUp";

//const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/2fa" element={<TwoFA />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
