const React = require('react');
const Layout = require('./Layout');

function RedLight({ newUser, newUserId }) {
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
      <h1>ReedLight</h1>
      <ul className="list-group list-group-horizontal">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak01.png" />
        </li>
        <li className="list-group-item">
          Восклицательный знак в круге — схематичное изображение тормозного барабана с колодками по бокам
          (иногда вместо него используют надпись Brake). Это самый серьёзный индикатор, который есть на
          панели — автомобиль с поломкой тормозной системы может просто не остановиться. Если вы едете —
          вы приехали: срочно замедляйтесь и прижимайтесь к обочине. Будьте готовы тормозить двигателем и
          использовать ручник, если тормоза не сработают.
          Лампа Brake зажигается при низком уровне тормозной жидкости в бачке — начните с его проверки.
          Если он чуть ниже нормы — долейте жидкость, заведите машину, несколько раз нажмите на педаль
          тормоза и проверьте, не уменьшился ли уровень вновь. Если красная лампа вернулась, безопасный
          способ продолжить путь только один — эвакуатор.
          Иногда эта же лампа загорается при использовании стояночного тормоза. Логика проста: во-первых,
          с зажатым ручником ехать нельзя. Во-вторых, дёрнуть за ручник (разумеется, на неподвижном автомобиле)
          — простой способ проверить исправность столь важной лампы.
        </li>
      </ul>
      <ul className="list-group list-group-horizontal-sm">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak02.png" />
        </li>
        <li className="list-group-item">
          Эта волшебная лампа Алладина — не что иное,
          как ёмкость с моторным маслом, означающая низкое давление в системе смазки мотора.
          С такой горящей лампой вы вряд ли уедете далеко (если попробуете, наверняка приговорите
          двигатель). Срочно останавливайтесь, глушите мотор и проверяйте уровень масла — скорее
          всего, он ниже минимальной отметки.
        </li>
      </ul>
      <ul className="list-group list-group-horizontal-md">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak03.png" />
        </li>
        <li className="list-group-item">
          Красный аккумулятор сигнализирует об отсутствии заряда
          — ехать вы сможете, но недолго, пока АКБ полностью не сядет. Используйте этот запас
          времени, чтобы добраться до ближайшего сервиса своим ходом.
          Надпись Main появляется в гибридных автомобилях при неполадках, связанных с тяговой
          батареей. Действия те же — ищите сервис.
        </li>
      </ul>
      <ul className="list-group list-group-horizontal-xxl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak04.png" />
        </li>
        <li className="list-group-item">
          Пассажир надул огромный пузырь из
          жвачки? Нет, всё хуже: в автомобиле проблема с подушками безопасности.
          Продолжать движение с такой лампой можно, но в случае аварии подушки не
          сработают — имейте это в виду. Точную причину неисправности выявит компьютерная
          диагностика — запланируйте визит в сервис.
        </li>
      </ul>

      <ul className="list-group list-group-horizontal-xl">

        <li className="list-group-item">
          <img src="https://img.hyperauto.ru/applications/articles/znak05.png" />
        </li>
        <li className="list-group-item">
          Красный термометр в воде — перегрев двигателя.
          Как правило, данный индикатор встречается в машинах без температурного указателя,
          но может и дублировать его. Правильные действия: включаем печку на максимум,
          останавливаемся
          и остываем. Затем медленно едем в сервис, следя за температурой — «кипятить»
          двигатель очень
          вредно. При утечке охлаждающей жидкости (лужа под капотом) вызов эвакуатора
          будет лучшим решением.

        </li>
      </ul>
    </Layout>

  );
}

module.exports = RedLight;
