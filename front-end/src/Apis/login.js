const login = (email, password) => {
    fetch(`http://localhost:2000/login?email=${email}&password=${password}`)
      .then(response => response.text())
      .then(response => console.log(response))
  }
  export default login;