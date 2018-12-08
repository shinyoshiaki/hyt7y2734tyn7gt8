import * as React from "react";
import ListWorkerMol, { IlistWorkerProps } from "../../molecules/listWorkers";
import { Button, Modal } from "@material-ui/core";
import FormAddWorkerMol, { IformAddWorkerProps } from "../../molecules/formAddWorker";

export interface ImanageLeftOrgProps extends IlistWorkerProps, IformAddWorkerProps {
  style?: React.CSSProperties;
}

export interface ImanageLeftOrgStates {
  modalOpen: boolean;
}

export default class ManageLeftOrg extends React.Component<ImanageLeftOrgProps, ImanageLeftOrgStates> {
  constructor(props: ImanageLeftOrgProps) {
    super(props);
    this.state = { modalOpen: false };
  }

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  public render() {
    return (
      <div style={this.props.style}>
        <div style={{ display: "flex", minHeight: "90vh", flexDirection: "column" }}>
          <div style={{ flex: 1 }}>
            <ListWorkerMol {...this.props} />
          </div>
          <Button onClick={this.handleModalOpen} style={{ marginTop: "auto" }}>
            test
          </Button>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modalOpen}
          onClose={this.handleModalClose}
          style={{ display: "flex" }}
        >
          <div
            style={{
              width: "60%",
              height: "auto",
              flex: "0 1 auto",
              margin: "auto",
              background: "white"
            }}
          >
            <FormAddWorkerMol {...this.props} />
          </div>
        </Modal>
      </div>
    );
  }
}
