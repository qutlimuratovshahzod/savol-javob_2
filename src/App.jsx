import { Routes, Route } from "react-router-dom";
import { useCustomContext } from "./Context/UseContext";
import { Auth } from "./Pages/Auth";
import { Tasks } from "./Pages/Tasks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Result } from "./Pages/Result";

function App() {
  const { user } = useCustomContext();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user.name) {
  //     navigate("/");
  //   } else {
  //     navigate("/tasks");
  //   }
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Auth />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;