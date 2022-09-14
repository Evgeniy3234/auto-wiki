const React = require('react');
const Layout = require('./Layout');

function SignIn() {
  return (
    <Layout title="SignIn">
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#/">Menu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="stylecont registflex">
        <h1 className="form">Log In</h1>
        <form className="form" name="loginForm" action="/signIn" method="POST">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPasswordexampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-outline-success">Log In</button>
          <div className="mb-3">
            <div className="redirect">Do not have an account?</div>
            <a type="submit" className="btn btn-outline-warning" href="/signUp">Register</a>
          </div>
        </form>
      </div>
    </Layout>

  );
}

module.exports = SignIn;
