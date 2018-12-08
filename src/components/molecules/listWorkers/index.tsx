import * as React from "react";
import { HumanData } from "../../../interface";

export interface IlistWorkerProps {
  listWorkers: HumanData[];
  maxheight?: string;
  style?: object;
}

export interface IlistWorkerState {}

export default class ListWorkerMol extends React.Component<IlistWorkerProps, IlistWorkerState> {
  url?: string;
  constructor(props: IlistWorkerProps) {
    super(props);
    this.state = {
      url: undefined
    };
  }

  private renderComment(human: HumanData, i: number) {
    return JSON.stringify(human);
    // <ViewComment id={comment.id} msg={comment.msg} key={i} />;
  }

  render() {
    const { maxheight } = this.props;
    return (
      <div
        style={{
          border: "1px solid",
          borderRadius: 4,
          borderWidth: 0.5,
          borderColor: "#d6d7da",
          margin: 3,
          padding: 10,
          maxHeight: maxheight ? maxheight : "50vh",
          overflow: "scroll",
          ...this.props.style
        }}
      >
        {this.props.listWorkers.map((v, i) => this.renderComment(v, i))}
      </div>
    );
  }
}
