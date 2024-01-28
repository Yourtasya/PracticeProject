import HomePage from "./pages/homePage";
import HistoryPage from "./pages/historyPage";
import ContactsPage from "./pages/contactsPage";
import DocumentsPage from "./pages/documentsPage";
import ProjectsPage from "./pages/projectsPage";
import RentPage from "./pages/rentPage";
import AwardsPage from "./pages/awardsPage";



//Routes
import {
    HOME_ROUTE,
    HISTORY_ROUTE,
    CONTACTS_ROUTE,
    DOCUMENTS_ROUTE,
    PROJECTS_ROUTE,
    RENT_ROUTE,
    AWARDS_ROUTE,
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
    {
        path: CONTACTS_ROUTE,
        Component: ContactsPage,
    },
    {
        path: DOCUMENTS_ROUTE,
        Component: DocumentsPage,
    },
    {
        path: PROJECTS_ROUTE,
        Component: ProjectsPage,
    },
    {
        path: RENT_ROUTE,
        Component: RentPage,
    },
    {
        path: AWARDS_ROUTE,
        Component: AwardsPage,
    },
];