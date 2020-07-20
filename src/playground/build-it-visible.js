const appRoot = document.querySelector("#app");

const app = {
  showDetail: false,
};

const onShowDetail = () => {
  app.showDetail = !app.showDetail;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShowDetail}>
        {app.showDetail ? "Hide details" : "Show details"}
      </button>
      {app.showDetail && <p>Some detail are being shown!</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
