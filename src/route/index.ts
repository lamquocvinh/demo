// Layouts

// Pages
import { RouteType } from "../types";
import routes from "../config/route";
import Home from "../pages/Home";
import ProjectPage from "../pages/Project";
import PilePlanPage from "../pages/PilePlan";
import BoreLog from "../pages/BoreLogs";
import ProfilePage from "../pages/Profile";
import SettingsPage from "../pages/Settings";
import DataPage from "../pages/BoreLogs/Data";
import PreviewPage from "../pages/BoreLogs/PreviewPDF";


const publicRoutes: Array<RouteType> = [
  { path: routes.homepage, component: Home },
  { path: routes.project, component: ProjectPage },
  { path: routes.pilePlan, component: PilePlanPage },
  { path: routes.boreLosg, component: BoreLog },
  {
    path: routes.previewPdf,
    component: PreviewPage,
  },
  { path: routes.profile, component: ProfilePage },
  { path: routes.settings, component: SettingsPage },
  { path: routes.addData, component: DataPage },
  { path: "*", component: Home },
];
const privateRoutes: Array<RouteType> = [];

export { publicRoutes, privateRoutes };
