import * as React from "react";
import {PureComponent} from "react";

import {Button, Col, Glyphicon, Grid, Image, Row} from "react-bootstrap";
import {GeneralLayout} from "application/view/layout/GeneralLayout";

import "./ErrorPage.Style.scss";
import {Link} from "react-router-dom";

const cloudImg = require("assets/img/cloud.png");

export class ErrorPage extends PureComponent<null, null> {

  public render(): JSX.Element {
    return (
      <GeneralLayout>

        <Grid id="error-page">

          <Row>
            <Col className={"text-center"} xs={6} xsOffset={4}>
              <Image id={"error-page-cloud-image"} src={cloudImg} rounded/>
            </Col>
          </Row>

          <Row className={"text-center"}>
            <h2>
              Something gone wrong.
            </h2>

            <Link to={"/home"}>
              <Button className={"forecast-page-nav-back"}>
                <Glyphicon glyph={"arrow-left"}/>
                &nbsp;
                Get Back
              </Button>
            </Link>

          </Row>

        </Grid>

      </GeneralLayout>
    );
  }

}