// import { bookComponent } from "./components/book-component.js";
// import { catalogComponent } from "./components/catalog-component.js";
import { showBookDetailsView } from "./components/book-component.js";
import { catalogView } from "./components/catalog-component.js";
import { showHomeView } from "./components/home-component.js";
// import { loginComponent } from "./components/login-component.js";
// import { registerComponent } from "./components/register-component.js";
// import { logout } from "./services/auth-service.js";
import { Redirect, startRouter } from "./routes.js";
import { useRoutes } from "./routes.js";
import { showMessage } from "./utils/notification.js";
import { updateNav } from "./utils/update-nav.js";

useRoutes('/', showHomeView)
// useRoutes('/login', loginComponent)
// useRoutes('/register', registerComponent)
useRoutes('/catalog', catalogView)
useRoutes('/catalog/:bookId', showBookDetailsView)



document.getElementById("logout").addEventListener("click", async () => {
    logout();
    updateNav()
});

startRouter()


