
import Auth from '../../../utils/authService';
const authService = new Auth()
export const requestSignIn = async (data) => await authService.SignIn({username: data.username, password: data.password});
