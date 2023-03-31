import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TextInputSecond from "../components/TextInputSecond";
import ToDoInputTitle from "../components/ToDoInputTitle";
import data from "../data/data.json";

function TodoSearch() {
  const [toDo] = useState(data);

  const nav = useNavigate();

  const [form, setForm] = useState({
    id: toDo.length + 1,
    title: "",
    complete: false,
  });

  const addTask = () => {
    data.push(form);
    nav("/", { state: { data } });
  };

  const onchange = (e) => {
    setForm({ ...form, title: e.target.value });
  };
  return (
    <>
      <ToDoInputTitle />
      <Container className="square border rounded">
        <Row className="mx-3 mt-4">
          <Col>
            <TextInputSecond
              val={form.title}
              change={onchange}
              click={addTask}
            />
          </Col>
        </Row>
        <Row className="mx-3 my-4">
          <Col>{}</Col>
        </Row>
        <Row className="mx-3 my-4 d-flex w-full justify-content-end">
          <Col>
            <Button
              onClick={() => {
                nav("/");
              }}
              variant="info"
              size="md"
            >
              Back
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TodoSearch;
