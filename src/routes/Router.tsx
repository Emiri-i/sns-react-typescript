import { RouterProvider, createBrowserRouter } from "react-router-dom";
import appRoutes from "@/routes/Routes.tsx";

const router = createBrowserRouter(appRoutes);

const Router = () => <RouterProvider router={router} />;

export default Router;
