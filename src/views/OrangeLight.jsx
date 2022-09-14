const React = require('react');
const Layout = require('./Layout');

function OrangeLight({ newUser, newUserId }) {
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
      <h1>Orange Light</h1>
      <ul className="list-group list-group-horizontal">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak06.png" />
        </li>
        <li className="list-group-item">
          Самый известный жёлтый значок — «джекичан», он же Check Engine
          или просто «чек». Сигнализирует о сбоях в работе двигателя. Они могут быть
          несущественными и
          почти не влиять на его работу, а могут доставить большие проблемы. Например, при отказе
          свечи зажигания можно повредить каталитический нейтрализатор, если продолжать ехать в
          таком режиме. Действуйте по ситуации: при отсутствии заметных сбоев в работе мотора
          запишитесь на диагностику. А при изменении звука или ухудшении тяги не рискуйте —
          вызывайте эвакуатор.
        </li>
      </ul>
      <ul className="list-group list-group-horizontal-sm">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak07.png" />
        </li>
        <li className="list-group-item">
          Лампа отказа ABS — антиблокировочной системы тормозов.
          Сама тормозная система при этом продолжит нормально работать (поэтому лампа не красная),
          но при экстренном торможении машина может пойти юзом.Самый частый источник проблем с ABS
          — датчики системы или их проводка. Точно установить причины поможет компьютерная
          диагностика в сервисе.
        </li>
      </ul>
      <ul className="list-group list-group-horizontal-md">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak08.png" />
        </li>
        <li className="list-group-item">
          На машинах, оборудованных датчиками давления в шинах,
          есть соответствующая лампа — она загорается при падении давления более чем на 20% в
          одном из колёс (включая запасное). Останавливайтесь и ищите спускающую покрышку.
        </li>
      </ul>
      <ul className="list-group list-group-horizontal-xxl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak10.png" />
        </li>
        <li className="list-group-item">
          Некоторые из подушек безопасности не работают.
          Но не из-за неисправности системы, а из-за их принудительного отключения
          (например, для перевозки ребёнка в детском кресле или при выезде на бездорожье).
          Автоматически такая лампа может зажечься, если на переднем сиденье едет пассажир
          со слишком маленьким весом — система считает его ребёнком и отключает подушку.
          Лучше пересадить его на задний ряд.
        </li>
      </ul>

      <ul className="list-group list-group-horizontal-xl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak12.png" />
          <img src="" />
        </li>
        <li className="list-group-item">
          Сигнализация отключения системы стабилизации.
          Она может деактивироваться как вручную, нажатием кнопки, так и автоматически,
          из-за какой-то ошибки. Действуйте по ситуации: если лампа зажглась без вашего
          участия — планируйте визит в сервис для поиска проблемы.
        </li>
      </ul>

      <ul className="list-group list-group-horizontal-xl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak13.png" />
          <img src="" />
        </li>
        <li className="list-group-item">
          Принудительная блокировка одного из дифференциалов
          полноприводного автомобиля. Жёлтый цвет лампы напоминает о том, что в таком режиме
          действуют ограничения: как правило, нельзя выезжать на твёрдое покрытие (асфальт).
          Не забудьте отключить блокировки при выезде с бездорожья, чтобы не повредить
          трансмиссию.
        </li>
      </ul>

      <ul className="list-group list-group-horizontal-xl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak15.png" />
          <img src="" />
        </li>
        <li className="list-group-item">
          Первый значок — в зоне приёма отсутствует электронный ключ.
          Второй значок — ключ найден, но требуется заменить батарейку.
        </li>
      </ul>

      <ul className="list-group list-group-horizontal-xl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak16.png" />
          <img src="" />
        </li>
        <li className="list-group-item">
          Эксклюзивная лампа дизельных двигателей:
          работают свечи накаливания. Двигатель рекомендуется заводить только после
          того, как индикатор погаснет.
        </li>
      </ul>

      <ul className="list-group list-group-horizontal-xl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak17.png" />
          <img src="" />
        </li>
        <li className="list-group-item">
          Попадание воды или льда в топливную систему,
          необходимо очистить или заменить топливный фильтр.
        </li>
      </ul>

      <ul className="list-group list-group-horizontal-xl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak18.png" />
          <img src="" />
        </li>
        <li className="list-group-item">
          Самый пессимистичный индикатор — в баке
          минимальный остаток топлива, пора на заправку.
        </li>
      </ul>

    </Layout>

  );
}

module.exports = OrangeLight;
