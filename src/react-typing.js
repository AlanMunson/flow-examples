// @flow
import * as React from "react";

type Props = {
  show: boolean,
  value: number,
  onClose: () => void
};

type State = {
  isShowing: boolean
};

class MyComponent extends React.Component<Props, State> {
  static defaultProps = { value: 0 };
  render() {
    const { show, value } = this.props;
    return <div className={show ? "visible" : "hidden"}>{value}</div>;
  }
}

const MyFunctionalComponent = (props: Props) => <div>{props.value}</div>;
MyFunctionalComponent.defaultProps = { value: 0 };
