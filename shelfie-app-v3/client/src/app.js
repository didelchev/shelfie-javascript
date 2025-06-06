import { showBookDetailsView } from "./components/book-details-view.js";
import { showCatalogView } from "./components/catalog-view.js";
import { showHomeView } from "./components/home-view.js";
import { showLoginView } from "./components/login-view.js";
import { showRegisterView } from "./components/register-view.js";

import { Redirect, startRouter } from "./routes.js";
import { useRoutes } from "./routes.js";

import { logout } from "./services/auth-service.js";

import { showMessage } from "./utils/notification.js";
import { updateNav } from "./utils/update-nav.js";

useRoutes('/', showHomeView)
useRoutes('/login', showLoginView)
useRoutes('/register', showRegisterView)
useRoutes('/catalog', showCatalogView)
useRoutes('/catalog/:bookId', showBookDetailsView)



document.getElementById("logout").addEventListener("click", async () => {
    logout();
    showMessage('Successfully Loged Out')
    Redirect('/')
    updateNav()
});

startRouter()


