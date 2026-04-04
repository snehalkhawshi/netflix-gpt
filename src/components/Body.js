import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import GptSearch from "./GptSearch";
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
            path: '/gptSearch',
            element: <GptSearch />
        }
    ]);

    return <div className="overflow-hidden p-0 m-0">
            <RouterProvider router={appRouter} />
        </div>
}

export default Body;