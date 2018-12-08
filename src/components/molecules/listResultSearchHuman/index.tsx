import * as React from "react";
import ViewComment from "../../atoms/viewComment";

export interface HumanData {
  id: string;
  msg: string;
  money: number;
  timestamp: any;
}

export interface IlistResultSearchHumanProps {
  listResultSearchHumanComments: HumanData[];
  maxheight?: string;
  style?: object;
}

export interface IlistResultSearchHumanState {}

export default class ListResultSearchHuman extends React.Component<
  IlistResultSearchHumanProps,
  IlistResultSearchHumanState
> {
  url?: string;
  constructor(props: IlistResultSearchHumanProps) {
    super(props);
    this.state = {
      url: undefined
    };
  }

  private renderComment(comment: HumanData, i: number) {
    return <ViewComment id={comment.id} msg={comment.msg} key={i} />;
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
        {this.props.listResultSearchHumanComments.map((v, i) => this.renderComment(v, i))}
      </div>
    );
  }
}