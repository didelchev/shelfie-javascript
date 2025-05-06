import { homeComponent } from "./components/homeComponent.js";
import { startRouter } from "./routes.js";
import { useRoutes } from "./routes.js";
useRoutes('/', homeComponent)


startRouter()

