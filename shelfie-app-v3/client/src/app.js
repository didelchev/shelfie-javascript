import { bookComponent } from "./components/book-component.js";
import { catalogComponent } from "./components/catalog-component.js";
import { homeComponent } from "./components/home-component.js";
import { loginComponent } from "./components/login-component.js";
import { registerComponent } from "./components/register-component.js";
import { startRouter } from "./routes.js";
import { useRoutes } from "./routes.js";

useRoutes('/', homeComponent)
useRoutes('/login', loginComponent)
useRoutes('/register', registerComponent)
useRoutes('/catalog', catalogComponent)
useRoutes('/catalog/:bookId', bookComponent)
useRoutes('/logout', bookComponent)


startRouter()



