import { showBookDetailsView } from "./views/book-details-view.js";
import { showCatalogView } from "./views/catalog-view.js";
import { showHomeView } from "./views/home-view.js";
import { showLoginView } from "./views/login-view.js";
import { showRegisterView } from "./views/register-view.js";

import { Redirect, startRouter } from "./routes.js";
import { useRoutes } from "./routes.js";

import { logout } from "./services/auth-service.js";

import { showMessage } from "./utils/notification.js";
import { updateNav } from "./utils/update-nav.js";
import { showProfileView } from "./views/profile-view.js";

useRoutes('/', showHomeView)
useRoutes('/login', showLoginView)
useRoutes('/register', showRegisterView)
useRoutes('/catalog', showCatalogView)
useRoutes('/catalog/:bookId', showBookDetailsView)
useRoutes('/profile', showProfileView)



document.getElementById("logout").addEventListener("click", async () => {
    logout();
    showMessage('Successfully Loged Out')
    Redirect('/')
    updateNav()
});

startRouter()


