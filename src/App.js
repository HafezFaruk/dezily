import "./App.css";
import Router from "./Router.js";
import { useEffect } from "react";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Router />
      
    </div>
  );
}

export default App;
