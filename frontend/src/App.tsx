import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./components/Root";
import Home from "./components/Home";
import Create from "./components/Create";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
