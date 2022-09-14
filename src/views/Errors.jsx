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
              <h5 className="card-title">Зеленые Лампочки</h5>
              <p className="card-text">
                {' '}
                Зелёные лампочки являются информационными — они сообщают,
                что какая-то система автомобиля работает штатно, но водитель
                должен об этом знать (и учитывать при управлении машиной).
                Например, включен «поворотник», противотуманные фары или круиз-контроль

              </p>
            </div>
            <div className="card-footer">
              <a href="/greenLight" type="button" className="btn btn-outline-success">Подробнее</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://img.hyperauto.ru/applications/hyperauto-ru/506aab86638d9dccef9100da1d54c911.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Красные Лампочки</h5>
              <p className="card-text">
                Красные лампочки можно сравнить с запрещающими знаками ПДД — они
                сигнализируют о серьёзных неисправностях автомобиля и зачастую
                требуют немедленных действий от водителя. Именно поэтому для них
                выбран красный цвет — цвет опасности, сразу бросающийся в глаза.
                Самые грозные красные индикаторы — низкое давление масла и низкий
                уровень тормозной жидкости; при их виде поездку придётся продолжить
                на эвакуаторе в сторону ближайшего сервиса.
              </p>
            </div>
            <div className="card-footer">
              <a href="/redLight" type="button" className="btn btn-outline-danger">Подробнее</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://img.hyperauto.ru/applications/hyperauto-ru/e696c47fcbec284bddcdce1f3c2cfeff.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Желтые или Оранжевые Лампочки</h5>
              <p className="card-text">
                Жёлтые или оранжевые лампочки предупреждают водителя: с автомобилем
                что-то происходит. Как правило, не опасное, но если это проигнорировать,
                то могут возникнуть проблемы. Например, жёлтым цветом подсвечен индикатор
                низкого уровня топлива. Можно ли продолжать движение? Очевидно, да, но в
                направлении заправки. То есть, увидев жёлтую лампочку, водитель должен
                что-то предпринять — не сразу, но в ближайшем будущем.
              </p>
            </div>
            <div className="card-footer">
              <a href="/orangeLight" type="button" className="btn btn-outline-warning">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  );
}

module.exports = Errors;
