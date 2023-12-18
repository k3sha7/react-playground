import Github from "./pages/Github";
import Modal from "./pages/Modal";
import { useTheme } from "./context/ThemeContext";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Morty from "./pages/Morty";
import LiveShapes from "./pages/LiveShapes";

const routes = [
  {
    path: "modal",
    element: <Modal />,
    id: "Styled Modal",
  },
  {
    path: "dev-finder",
    element: <Github />,
    id: "Dev Finder",
  },
  {
    path: "terrified-morty",
    element: <Morty />,
    id: "Terrified Morty",
  },
  {
    path: "shapes",
    element: <LiveShapes />,
    id: "Live Shapes",
  },
];

const Home = () => {
  return (
    <div className="h-screen w-screen flex text-xl justify-center items-center space-x-16 dark:bg-black dark:text-white">
      {routes.map((r) => (
        <Link
          key={r.id}
          className="relative my-2 inline-block w-fit font-semibold transition duration-500 after:absolute after:1-bottom-1 dark:after:bg-white after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition after:duration-500 after:content-[''] after:hover:scale-x-100 lg:my-4"
          to={r.path}
        >
          {r.id}
        </Link>
      ))}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    id: "Home",
  },
  {
    path: "*",
    element: <Home />,
  },
  ...routes,
]);

function App() {
  const { theme } = useTheme();
  return (
    <div className={`antialiased ${theme === "dark" ? "dark" : "light"}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
