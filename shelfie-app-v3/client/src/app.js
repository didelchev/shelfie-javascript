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
import { show404View } from "./views/404-view.js";



updateNav()


useRoutes('/', showHomeView, {isLoggedIn: false })
useRoutes('/login', showLoginView , { isLoggedIn: true })
useRoutes('/register', showRegisterView, { isLoggedIn: true })
useRoutes('/catalog', showCatalogView, { isLoggedIn: false })
useRoutes('/catalog/:bookId', showBookDetailsView, { isLoggedIn: false })
useRoutes('/profile', showProfileView, { isLoggedIn: false })
useRoutes('/asd', show404View, { isLoggedIn: false })



document.getElementById("logout").addEventListener("click", async () => {
    logout();
    showMessage('Successfully Loged Out')
    Redirect('/')
    updateNav()
});

startRouter()


