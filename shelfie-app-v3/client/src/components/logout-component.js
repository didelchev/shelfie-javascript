import { Redirect } from "../routes.js"
import { logout } from "../services/auth-service.js"

export const logoutComponent = () => {
    logout()
    Redirect('/')    
}