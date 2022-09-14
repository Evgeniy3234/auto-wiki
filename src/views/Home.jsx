const React = require('react');
const Layout = require('./Layout');

function Home({ newUser, newUserId }) {
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
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="https://news.store.rambler.ru/img/77791e923b0c3eb979b006ce71c98199?img-1-resize=width%3A1280%2Cheight%3A720%2Cfit%3Acover&img-format=auto" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Двигатель внутреннего сгорания</h5>
              <p className="card-text">
                {' '}
                ДВС — тепловая машина, преобразующая химическую энергию
                топлива в механическую работу. Сжигая горючее во внутренних камерах, двигатель
                внутреннего сгорания освобождает энергию, а затем преобразует её во
                вращательное движение.
                Оно, в свою очередь, раскручивает колёса.

              </p>
            </div>
            <div className="card-footer">
              <a href="/engine" type="button" className="btn btn-outline-secondary">Подробнее</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://www.syl.ru/misc/i/ai/385980/2523869.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Трансмиссия</h5>
              <p className="card-text">
                Назначение коробки передач - это передача и преобразование крутящего
                момента с двигателя на колеса, а так же осуществление отбора мощности на привода
                других агрегатов
                и дополнительного оборудования. Этот процесс позволяет обеспечить оптимальную силу
                тяги и скорость
                движения автомобиля.
              </p>
            </div>
            <div className="card-footer">
              <a href="/transmission" type="button" className="btn btn-outline-secondary">Подробнее</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://assets.avtocod.ru/storage/images/articles/makferson.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Система подрессоривания автомобиля</h5>
              <p className="card-text">
                Подвеска — устройство для постоянной связи между колесной и
                несущей системой. Она минимизирует большую часть воздействия,
                возникающего на дороге,
                обеспечивая неподвижность салона,помогает обезопасить
                движение, сделать его плавным и комфортным.
              </p>
            </div>
            <div className="card-footer">
              <a href="/suspension" type="button" className="btn btn-outline-secondary">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  );
}

module.exports = Home;
