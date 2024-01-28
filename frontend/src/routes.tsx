import HomePage from "./pages/homePage";
import HistoryPage from "./pages/historyPage";

//Routes
import {
    HOME_ROUTE,
    HISTORY_ROUTE,
} from "./links/consts";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage,
    },
    {
        path: HISTORY_ROUTE,
        Component: HistoryPage,
    },
];