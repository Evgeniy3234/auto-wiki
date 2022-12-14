const React = require('react');
const Layout = require('./Layout');

function Errors({ newUser, newUserId }) {
  return (
    <Layout title="Homepage">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Menu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              { newUser ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/trackCall">tow truck call</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/supportChat">support chat</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logOut">Log Out</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={`/profil/${newUserId}`}>Profile</a>
                  </li>
                </>
              )
                : (
                  <li className="nav-item">
                    <a className="nav-link" href="/signIn">SignIn</a>
                  </li>
                )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="https://img.hyperauto.ru/applications/hyperauto-ru/7c2d4be776b4d4337ff7823ef7f6cacf.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">?????????????? ????????????????</h5>
              <p className="card-text">
                {' '}
                ?????????????? ???????????????? ???????????????? ?????????????????????????????? ??? ?????? ????????????????,
                ?????? ??????????-???? ?????????????? ???????????????????? ???????????????? ????????????, ???? ????????????????
                ???????????? ???? ???????? ?????????? (?? ?????????????????? ?????? ???????????????????? ??????????????).
                ????????????????, ?????????????? ????????????????????????, ?????????????????????????????? ???????? ?????? ??????????-????????????????

              </p>
            </div>
            <div className="card-footer">
              <a href="/greenLight" type="button" className="btn btn-outline-success">??????????????????</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://img.hyperauto.ru/applications/hyperauto-ru/506aab86638d9dccef9100da1d54c911.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">?????????????? ????????????????</h5>
              <p className="card-text">
                ?????????????? ???????????????? ?????????? ???????????????? ?? ???????????????????????? ?????????????? ?????? ??? ??????
                ?????????????????????????? ?? ?????????????????? ???????????????????????????? ???????????????????? ?? ????????????????
                ?????????????? ?????????????????????? ???????????????? ???? ????????????????. ???????????? ?????????????? ?????? ??????
                ???????????? ?????????????? ???????? ??? ???????? ??????????????????, ?????????? ?????????????????????? ?? ??????????.
                ?????????? ?????????????? ?????????????? ???????????????????? ??? ???????????? ???????????????? ?????????? ?? ????????????
                ?????????????? ?????????????????? ????????????????; ?????? ???? ???????? ?????????????? ???????????????? ????????????????????
                ???? ???????????????????? ?? ?????????????? ???????????????????? ??????????????.
              </p>
            </div>
            <div className="card-footer">
              <a href="/redLight" type="button" className="btn btn-outline-danger">??????????????????</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://img.hyperauto.ru/applications/hyperauto-ru/e696c47fcbec284bddcdce1f3c2cfeff.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">???????????? ?????? ?????????????????? ????????????????</h5>
              <p className="card-text">
                ???????????? ?????? ?????????????????? ???????????????? ?????????????????????????? ????????????????: ?? ??????????????????????
                ??????-???? ????????????????????. ?????? ??????????????, ???? ??????????????, ???? ???????? ?????? ??????????????????????????????,
                ???? ?????????? ???????????????????? ????????????????. ????????????????, ???????????? ???????????? ?????????????????? ??????????????????
                ?????????????? ???????????? ??????????????. ?????????? ???? ???????????????????? ????????????????? ????????????????, ????, ???? ??
                ?????????????????????? ????????????????. ???? ????????, ???????????? ???????????? ????????????????, ???????????????? ????????????
                ??????-???? ?????????????????????? ??? ???? ??????????, ???? ?? ?????????????????? ??????????????.
              </p>
            </div>
            <div className="card-footer">
              <a href="/orangeLight" type="button" className="btn btn-outline-warning">??????????????????</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  );
}

module.exports = Errors;
