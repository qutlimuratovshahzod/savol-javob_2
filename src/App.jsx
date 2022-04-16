import { Routes, Route, useLocation } from "react-router-dom";
import { useCustomContext } from "./Context/UseContext";
import { Auth } from "./Pages/Auth";
import { Tasks } from "./Pages/Tasks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Result } from "./Pages/Result";
import {AnimatePresence} from "framer-motion"

function App() {
  const { user } = useCustomContext();
  const navigate = useNavigate();
  const location = useLocation()
  useEffect(() => {
    if (!user.name) {
      return navigate("/");
    } else {
      return navigate("/tasks");
    }
  }, []);

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Auth />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="result" element={<Result />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;