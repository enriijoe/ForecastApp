import * as React from "react";
import {PureComponent} from "react";

import {Clearfix, Grid} from "react-bootstrap";

import "./GeneralLayout.Style.scss";

export class GeneralLayout extends PureComponent<null, null> {

  public render(): JSX.Element {
    return (
      <Grid id={"general-layout"} fluid>
        <Clearfix id={"general-layout-row"}>
          {this.props.children}
        </Clearfix>
      </Grid>
    );
  }

}