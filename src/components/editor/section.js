import React from "react";
import { useDispatch } from "react-redux";
import { Col, Input, Label, Row, Container, Button } from "reactstrap";
import { v4 as uuid } from "uuid";

export default function Section({ formData }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <h6 style={{ margin: "1rem 0" }}>{formData.title}</h6>
      <p style={{ margin: "1rem 0" }}>{formData.desc}</p>
      {formData.redux.state.map((e) => {
        return (
          <Row>
            {formData.inputs.map((e) => {
              return (
                <Col key={uuid()} md={e.col}>
                  <Label>{e.label}</Label>
                  <Input type={e.type} />
                </Col>
              );
            })}
            <Button
              className="bg-success"
              onClick={() => dispatch(formData.redux.actions.remove(e.id))}
            >
              Delete
            </Button>
          </Row>
        );
      })}

      <Row>
        <Button
          className="bg-success"
          onClick={() => dispatch(formData.redux.actions.add())}
        >
          Add {formData.title}
        </Button>
      </Row>
    </Container>
  );
}
