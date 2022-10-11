import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Another from "./component/another/another";
import Herself from "./component/Herself/Herself";
import Home from "./component/Home/Home";
import Details from "./component/itemDetails/Details";
import Ourself from "./component/Ourself/Ourself";
import Price from "./component/Price/Price";
import Main from "./layout/Main/Main";
import Right from "./component/right/Right";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/home", element: <Home></Home> },
        { path: "/myself", element: <Price></Price> },
        { path: "/herself", element: <Herself></Herself> },
        {
          path: "/ourself",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Ourself></Ourself>,
        },
        {
          path: "/top/:topId",
          loader: async ({ params }) => {
            // console.log(params.topId);
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.topId}`
            );
          },
          element: <Details></Details>,
        },
        {
          path: "/another",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Another></Another>,
        },
        {
          path: "/pop/:popId",
          loader: async ({ params }) => {
            console.log(params);
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.popId}`
            );
          },
          element: <Right></Right>,
        },
      ],
    },
    { path: "*", element: <div>This is 404 not found</div> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
