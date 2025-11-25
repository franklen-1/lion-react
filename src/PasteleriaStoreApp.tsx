import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

export  const  PasteleriaStoreApp = () => {
    return <RouterProvider router={appRouter} />;
};

