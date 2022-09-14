const createBtn = document.querySelector('.create-route');
// const createRoute = document.getElementById('createRoute');
console.log(createBtn, 'кнопка');
const inputName = document.querySelector('#track-name');
console.log(inputName);
const locationName = document.querySelector('#location');
console.log(locationName);

function init() {
  // Создание карты.
  const myMap = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
    controls: ['routePanelControl'],
  });

  const control = myMap.controls.get('routePanelControl');

  // Получение мультимаршрута.
  const multiRoutePromise = control.routePanel.getRouteAsync();

  multiRoutePromise.then((multiRoute) => {
  // Подписка на событие обновления мультимаршрута.
    multiRoute.model.events.add('requestsuccess', () => {
    // Получение ссылки на активный маршрут.
      const activeRoute = multiRoute.getActiveRoute();

      if (activeRoute) {
        const length = activeRoute.properties.get('distance').text;
        const start = activeRoute.properties.get('boundedBy')[0].join();
        const finish = activeRoute.properties.get('boundedBy')[1].join();
        console.log(`Длина: ${length}`);
        console.log(`Начальная точка:${start}`);
        console.log(`Конечная точка:${finish}`);
        createBtn.addEventListener('click', async (event) => {
          event.preventDefault();
          console.log('click');
          try {
            const trackName = inputName.value;
            console.log(trackName);
            const location = locationName.value;
            const responce = await fetch('/trackCall', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify({
                location, trackName, length, start, finish,
              }),
            });
            await responce.json();
            inputName.value = '';
            locationName.value = '';
          } catch (error) {
            console.log(error);
          }
        });
      }
    });
  }, (err) => {
    console.log(err);
  });
}
ymaps.ready(init);
