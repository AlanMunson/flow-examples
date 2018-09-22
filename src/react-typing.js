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

  // Ref property - must be nullable
  button: ?HTMLButtonElement;

  render() {
    const { show, value } = this.props;
    return (
      <div className={show ? "visible" : "hidden"}>
        {value}
        <button ref={button => (this.button = button)}>Click Me!</button>
      </div>
    );
  }
}

const MyFunctionalComponent = (props: Props) => <div>{props.value}</div>;
MyFunctionalComponent.defaultProps = { value: 0 };
