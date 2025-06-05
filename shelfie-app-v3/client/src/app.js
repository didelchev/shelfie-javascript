import { bookComponent } from "./components/book-component.js";
import { catalogComponent } from "./components/catalog-component.js";
import { homeComponent } from "./components/home-component.js";
import { loginComponent } from "./components/login-component.js";
import { registerComponent } from "./components/register-component.js";
import { Redirect, startRouter } from "./routes.js";
import { useRoutes } from "./routes.js";
import { logout } from "./services/auth-service.js";
import { showMessage } from "./utils/notification.js";
import { updateNav } from "./utils/update-nav.js";

useRoutes('/', homeComponent)
useRoutes('/login', loginComponent)
useRoutes('/register', registerComponent)
useRoutes('/catalog', catalogComponent)
useRoutes('/catalog/:bookId', bookComponent)



document.getElementById("logout").addEventListener("click", async () => {
    logout();
    updateNav()
});

startRouter()


