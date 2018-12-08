import * as React from "react";
import FormSearchHuman, { IformSearchHumanProps } from "../../molecules/formSearchHuman";
import ListResultSearchHuman, { IlistResultSearchHumanProps } from "../../molecules/listResultSearchHuman";

export interface IsearchHumanOrgProps extends IformSearchHumanProps, IlistResultSearchHumanProps {
  style?: object;
}

export default class SearchHumanOrg extends React.Component<IsearchHumanOrgProps, {}> {
  constructor(props: IsearchHumanOrgProps) {
    super(props);
  }

  public render() {
    return (
      <div style={this.props.style}>
        <FormSearchHuman {...this.props} />
        <ListResultSearchHuman {...this.props} />
      </div>
    );
  }
}