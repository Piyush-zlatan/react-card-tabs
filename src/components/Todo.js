import React, { Component } from "react";

import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";

import "./ownStyle.css";

import data from "./data/todo.json";

const newdata = data.map((data) => {
  return (
    <Card key={data.id}>
      <Card.Body>
        <Card.Title>{data.desc}</Card.Title>
        <Card.Text>{data.doctor}</Card.Text>
        <Card.Text>{data.time}</Card.Text>
      </Card.Body>
    </Card>
  );
});

export default class Todo extends Component {
  render() {
    return <CardColumns className=" m-3 p-3 owncard "> {newdata} </CardColumns>;
  }
}
