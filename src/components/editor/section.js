import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Input, Label, Row, Container, Button } from "reactstrap";
import { v4 as uuid } from "uuid";

export default function Section({ formData }) {
  const [temp,setTemp] = useState("")
  const state = useSelector(state =>  state[formData.redux.state].value)
  const dispatch = useDispatch();
  console.log("rerender2");
  const handleChange = (event,e,key) => {
    // dispatch(formData.redux.actions.modify({
    //   id: e.id,
    //   update: {
    //     key: event.target.value
    //   }
    // }))
    setTemp(event.target.value)
  }
  return (
    <Container>
      <h6 style={{ margin: "1rem 0" }}>{formData.title}</h6>
      <p style={{ margin: "1rem 0" }}>{formData.desc}</p>
      {state.map((e) => {
        let keys = Object.keys(e);
        keys = keys.filter(e => e != "id");
        return (
          <Row key={uuid()}>
            {formData.inputs.map((ele,index) => {
              return (
                <Col key={uuid()} md={ele.col}>
                  <Label>{ele.label}</Label>
                  <Input type={ele.type} onChange={(event) =>{handleChange(event,e,keys[index])}}
                  value={temp}
                  name={keys[index]}
                  />
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
      <input value={temp} onChange={(e) => handleChange(e)}/>
    </Container>
  );
}
