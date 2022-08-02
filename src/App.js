import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      // Object
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light"); // whether dark mode is enabled

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      /* setInterval(() => {
        document.title = 'TextUtils is Amazing'
      }, 2000);

      setInterval(() => {
        document.title = 'Install TextUtils Now'
      }, 1500); */
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    // JSX -> only one element can be there or use JSX fragment <>.. </>
    // Props - property
    // title here is props
    <>
      {/*<Navbar/>*/}
      {/* <Navbar title = "TextUtils" /> */}
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About Utils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>} /> */}
            {/* <Route exact path="/" element={} /> */}
            <TextForm
                heading="Enter your text to analyze below"
                mode={mode}
                showAlert={showAlert}
              />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
