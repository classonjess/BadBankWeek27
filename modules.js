var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BadBank</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" onclick='loadCreateAccount()'>Create Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick='loadLogin()'>Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick='loadDeposit()'>Deposit</a>
        </Li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick='loadWithdraw()'>Withdraw</a>
        </Li>
        <Li class="nav-item">
          <a class="nav-link" href="#" onclick='loadBalance()'>Balance</a>
        </Li>
        <Li class="nav-item">
          <a class="nav-link" href="#" onclick='loadAllData()'>AllData</a>
      </form>
    </div>
  </div>
</nav>
`;

var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

ui.createAccount = `
<div class="card" style="width: 18rem;">
<h5 class="card-header">Create Account</h5>
<div class="card-body">
    Name<br>
    <input type='input' class='form-control' id='name' placeholder='Enter name'><br>
    Email address<br>
    <input type='input' class='form-control' id='email' placeholder='Enter email'><br>
    Password<br>
    <input type='input' class='form-control' id='password' placeholder='Enter password'><br>
    <button type='submit' id='submit' class='btn-dark' onclick='create()'>Create Account</button>
    <div id='createStatus'></div>
  </div>
</div>
`;

ui.login = `
<div class="card" style="width: 18rem;">
<h5 class="card-header">Login</h5>
<div class="card-body">
    Email address<br>
    <input type='input' class='form-control' id='email' placeholder='Enter email'><br>
    Password<br>
    <input type='input' class='form-control' id='password' placeholder='Enter password'><br>
    <button type='submit' id='submit' class='btn-dark' onclick='create()'>Login</button>
    <div id='Login'></div>
  </div>
</div>

`;

ui.deposit = `
<div class="card" style="width: 18rem;">
<h5 class="card-header">Deposit</h5>
  <div class="card-body">
    Email<br>
    <input type='input' class='form-control' id='loginEmail' placeholder='Enter email address'><br>
    Amount<br>
    <input type='number' class='form-control' id='depositAmount' placeholder='Deposit amount'><br>
    <button type='submit' class='btn-dark' onclick='deposit()'>Deposit</button>
    <div id='depositStatus'></div
  </div>
</div>
`;

ui.withdraw = `
<div class="card" style="width: 18rem;">
<h5 class="card-header">Withdraw</h5>
  <div class="card-body">
    Email<br>
    <input type='input' class='form-control' id='loginEmail' placeholder='Enter email address'><br>
    Amount<br>
    <input type='number' class='form-control' id='withdrawAmount' placeholder='Withdraw amount'><br>
    <button type='submit' class='btn-dark' onclick='withdraw()'>submit</button>
    <div id='withdrawStatus'></div
  </div>
</div>
`;

ui.balance = `
<div class="card" style="width: 18rem;">
<h5 class="card-header">Balance</h5>
  <div class="card-body">
    Email<br>
    <input type='input' class='form-control' id='loginEmail' placeholder='Enter email address'><br>
    <input type='number' class='form-control' id='balanceAmount' placeholder='Remaining balance amount'><br>
    <button type='submit' class='btn-dark' onclick='balance()'>Show balance</button>
    <div id='balanceStatus'></div
  </div>
</div>
`;

ui.default = `
<div class="card text-center border-dark mb-3" style="width: 18rem;">
<div class="card-body">
<h5 class="card-header">Welcome to BadBank</h5>
<img src="bank_PNG24.png" class='img-fluid'>
<p class="card-text-centre">Please navigate to the Navbar to create / login into bank account</p> 
</div>
</div>
`;

ui.allData = `
<h5 class='text-centre'>All Data in Store</h5>
<button type="button" class="btn-dark" onclick='allData()'>Show All Data</button>
<div id="allDataStatus"></div>
`;

var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function() {
    target.innerHTML = ui.login;
};

var loadDeposit = function() {
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function() {
    target.innerHTML = ui.withdraw;
};

var loadBalance = function() {
    target.innerHTML = ui.balance;
};

var defaultModule = function() {
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();