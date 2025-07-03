import "./App.css";
import { Suspense } from "react";
import Router from "@/routes/Router";
import { LikeIcon } from "./components/atoms/LikeIcon";
function App() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Router />
      <LikeIcon></LikeIcon>
    </Suspense>
  );
}

export default App;
