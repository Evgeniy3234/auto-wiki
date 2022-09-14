const React = require('react');
const Layout = require('./Layout');

function GreenLight({ newUser, newUserId }) {
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
                  <li className="nav-item">
                    <a className="nav-link" href="/errors">Errors</a>
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
      <h1>GreenLight</h1>
      <ul className="list-group list-group-horizontal">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak19.png" />
        </li>
        <li className="list-group-item">
          Задействован круиз контроль — система самостоятельно
          поддерживает заданную скорость и (если «круиз» адаптивный)
          контролирует расстояние до впереди идущей машины. Моргание
          лампочки сигнализирует о неполадках в системе.
        </li>
      </ul>
      <ul className="list-group list-group-horizontal-sm">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak20.png" />
        </li>
        <li className="list-group-item">Изменяемые режимы работы подвески: спортивная и комфортная настройка амортизаторов.</li>
      </ul>
      <ul className="list-group list-group-horizontal-md">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak21.png" />
        </li>
        <li className="list-group-item">ECO MODE — включена система экономии топлива, либо обороты двигателя находятся в наиболее экономичной зоне.</li>
      </ul>
      <ul className="list-group list-group-horizontal-lg">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak22.png" />
        </li>
        <li className="list-group-item">Работает система «Старт-стоп», автоматически глушащая двигатель при остановках машины.</li>
      </ul>
      <ul className="list-group list-group-horizontal-xl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak23.png" />
        </li>
        <li className="list-group-item">Включены габаритные огни.</li>
      </ul>
      <ul className="list-group list-group-horizontal-xxl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak24.png" />
        </li>
        <li className="list-group-item">Включены противотуманные фары.</li>
      </ul>

      <ul className="list-group list-group-horizontal-xl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak25.png" />
        </li>
        <li className="list-group-item">Включён дальний свет фар — вы можете ослепить других водителей. Пожалуйста, не делайте так.</li>
      </ul>

      <ul className="list-group list-group-horizontal-xl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak26.png" />
        </li>
        <li className="list-group-item">Непрогретый двигатель. Ехать можно, но медленно, не усердствуя с педалью газа.</li>
      </ul>

    </Layout>

  );
}

module.exports = GreenLight;
