"use strict";

var appRoot = document.querySelector("#app");

var app = {
  showDetail: false
};

var onShowDetail = function onShowDetail() {
  app.showDetail = !app.showDetail;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: onShowDetail },
      app.showDetail ? "Hide details" : "Show details"
    ),
    app.showDetail && React.createElement(
      "p",
      null,
      "Some detail are being shown!"
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
