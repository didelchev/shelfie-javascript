import { bookComponent } from "./components/bookComponent.js";
import { catalogComponent } from "./components/catalogComponent.js";
import { homeComponent } from "./components/homeComponent.js";
import { loginComponent } from "./components/loginComponent.js";
import { registerComponent } from "./components/registerComponent.js";
import { startRouter } from "./routes.js";
import { useRoutes } from "./routes.js";

useRoutes('/', homeComponent)
useRoutes('/catalog', catalogComponent)
useRoutes('/login', loginComponent)
useRoutes('/register', registerComponent)
useRoutes('/book-details', bookComponent)


startRouter()


// const routes = [
//   { path: '/', component: homeComponent },
//   { path: '/catalog', component: catalogComponent},
//   { path: '/login', component: loginComponent},
//   { path: '/register', component: registerComponent},
//   { path: '/book-details', component: bookComponent },

// ]
