const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <script src="https://api-maps.yandex.ru/2.1/?apikey=9e68dad6-a5b6-4237-bfa0-02b4a68d8290&lang=ru_RU" type="text/javascript" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/css.css" />
        {/* <script defer src="/js/application.js" /> */}

        <title>{ title }</title>
      </head>
      <body>
        { children }
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark footer">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">© Made by Evgeniy Bondarenko</span>
          </div>
        </footer>
      </body>
    </html>
  );
};
