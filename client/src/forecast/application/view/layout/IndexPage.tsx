import * as React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";

import {Button, Col, Grid, Row} from "react-bootstrap";

export class IndexPage extends Component<null, null> {

  public render(): JSX.Element {
    return (
    <Grid id={"index-page"} fluid>

      <Row>

        <Col xs={6}>1</Col>
        <Col xs={6}>1</Col>

      </Row>

      <Link to={"/search"}>
        <Button bsStyle={"success"}>Search</Button>
      </Link>

    </Grid>
    );
  }

}