import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";

class Tools extends Component {
  render() {
    return (
      <div>
        <Row className="mt-5">
          <Col className="col-sm-6 col-md-4 col-lg-5">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Tools</CardTitle>
                <label className="p-2" for="date">
                  Choose a Date
                </label>
                <input className="form-control" type="date" />
                <hr></hr>
                <label className="p-2" for="date">
                  Name of task
                </label>
                <input className="form-control" type="text" />
                <hr></hr>
                <label className="p-2" for="details">
                  Details
                </label>
                <input
                  className="form-control"
                  name="details"
                  type="text"
                ></input>
                <hr></hr>
                <Button color="primary">Add Task</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Tools;
