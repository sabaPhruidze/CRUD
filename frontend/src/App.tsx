import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./components/Root";
import Home from "./components/Home";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
