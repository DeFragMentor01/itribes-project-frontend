import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

interface Props {
  // ...
}

const App: React.FunctionComponent<Props> = () => {

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
