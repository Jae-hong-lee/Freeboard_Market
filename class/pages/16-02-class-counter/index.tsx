import { Component } from "react";

export default class ClassCounterPage extends Component {
  // 기능들을 상속받았다.
  // 컴포런트라는 클래스안에 여러가지 기능들을 물려받음.
  state = {
    count: 0,
  };

  onClickCounter() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <div>현재카운트!!! : {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운트올리기!</button>
      </div>
    );
  }
}
