import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Timer from "./components/Timer";
import Users from "./components/Users";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
    <Routes>
      <Route path = "/" element={<App/>}/>
      <Route path = "/timer" element={<Timer/>}/>
      <Route path = "/users" element={<Users/>}/>
    </Routes>
		</BrowserRouter>
	</React.StrictMode>
);
