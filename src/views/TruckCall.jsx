const React = require('react');
const Layout = require('./Layout');

function truckCall() {
  return (
    <Layout title="Homepage">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
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
      <div className="stylecont add-flex">
        <form method="post" action="/trackCall" style={{ width: '35rem;' }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Track Call</label>
            <input name="Discription" type="text" className="form-control" id="Discription" aria-describedby="emailHelp" placeholder="Discription" />
          </div>
          <div id="map" className="map" />
          <div className="create-route">
            <button type="submit" className="btn btn-outline-success">Create</button>
          </div>
          <div>
            <script src="/js/map.js" type="text/javascript" />
          </div>
        </form>
      </div>
    </Layout>
  );
}
module.exports = truckCall;
