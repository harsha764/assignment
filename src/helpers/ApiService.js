import { ajax } from './Helpers';
class ApiService {
    async loginAuth(data) {
      const loginUrl = '/userauth.php';
      return await ajax(loginUrl, 'POST', data);
    }

    async SignupUser(data) {
      const signupUrl = '/signup.php';
      return await ajax(signupUrl, 'POST', data);
    }

    async checkAuth(data) {
      const checkingUrl = '/checkauth.php';
      return await ajax(checkingUrl, 'POST', data);
    }

    async getUsers() {
      const checkingUrl = '/get_users.php';
      return await ajax(checkingUrl, 'GET');
    }

    async viewUser(data) {
      const checkingUrl = '/view_user.php';
      return await ajax(checkingUrl, 'POST', data);
    }

    async deleteUser(data) {
      const checkingUrl = '/delete_user.php';
      return await ajax(checkingUrl, 'POST', data);
    }
}

export default new ApiService();
