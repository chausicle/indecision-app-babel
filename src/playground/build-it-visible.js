class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
    this.state = {
      showDetail: false,
    };
  }

  handleToggleVisiblity() {
    this.setState((prevState) => {
      return { showDetail: !prevState.showDetail };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisiblity}>
          {this.state.showDetail ? "Hide details" : "Show details"}
        </button>
        {this.state.showDetail && <p>Some detail are being shown!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector("#app"));

// const appRoot = document.querySelector("#app");

// const app = {
//   showDetail: false,
// };

// const onShowDetail = () => {
//   app.showDetail = !app.showDetail;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onShowDetail}>
//         {app.showDetail ? "Hide details" : "Show details"}
//       </button>
//       {app.showDetail && <p>Some detail are being shown!</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
