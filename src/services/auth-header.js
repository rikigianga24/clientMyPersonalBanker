export default function authHeader() {
  const user = (localStorage.getItem('user'));

  if (user) {
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    console.log('Authorization: Bearer' + user)
    return { Authorization: 'Bearer ' + user};       // for Node.js Express back-end
  } else {
    return console.log(user);
  }
}
