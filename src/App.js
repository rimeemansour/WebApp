import Body from "./components/Body";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./components/Watch";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Register from "./components/Register";

const appRouter = createBrowserRouter([
  {
    //path: "/",
    //element: <Login />,
    //children: [
      //{
        path: "/",
      element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {
        path: "/watch",
        element: <Watch />
      }
     // {
       // path: "/register",
        //element: <Register />
     // }
    ]
  }
])

function App() {
  return (
    <div>
      <NavBar />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;