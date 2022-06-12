// Context is globally shared
const ctx = {
  "accounts": [
      {
          "name:": "peter",
          "email": "peter@mit.edu",
          "balance:": 0,
          "password": "secret"
      }
  ]
}
// Getting a  handle on the elements of the card. + add one more user to acc + clear the form if 
// another user needs to be created.
function create() {
    const name     = document.getElementById('name');
    const email    = document.getElementById('email');
    const password = document.getElementById('password');
    const status   = document.getElementById('status');
    ctx.accounts.push({
        name:     name.value,
        email:    email.value,
        password: password.value,
        balance:  0,
    });
    // Update status & clear form
    name.value = '',
    email.value= '',
    password.value= '',
    status.innerHTML='Account Created'
};