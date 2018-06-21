import * as React from "react";
import {PureComponent} from "react";

import {Button, Col, Grid, Image, Row} from "react-bootstrap";
import {GeneralLayout} from "application/view/layout/GeneralLayout";
import {WeatherSearchInput} from "application/view/components/WeatherSearchInput/WeatherSearchInput.Component";

import "./IndexPage.Style.scss";

const cloudImg = require("assets/img/cloud.png");

export class IndexPageComponent extends PureComponent<any, null> {

  public render(): JSX.Element {
    return (
      <GeneralLayout>

        <Grid id="index-page">

          <Row>
            <Col className={"text-center"} xs={6} xsOffset={3}>
              <Image id={"index-page-cloud-image"} src={cloudImg} rounded/>
            </Col>
          </Row>

          <Row>
            <WeatherSearchInput onRedirectRequest={(url) => this.props.history.push(url)}/>
          </Row>

        </Grid>

      </GeneralLayout>
    );
  }

}