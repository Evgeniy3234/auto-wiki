require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const renderTemplate = (_reactEl, props, res) => {
  const { title, admin, user } = res.locals;
  const reactEl = React.createElement(_reactEl, {
    ...props, title, admin, user,
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  res.write('<!DOCTYPE html>');
  res.end(html);
};

module.exports = renderTemplate;
