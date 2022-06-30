import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";

const Block = styled.div`
  background-color: #0092ff;
  text-align: center;
  padding: 8px;
  border: 1px solid black;
`;

const InternDetail = () => {
  return (
    <div style={{paddingTop:'10px'}}>
      <Row>
        <Col className="gutter-row" span={6}>
          <Block>col-6</Block>
        </Col>
        <Col className="gutter-row" span={6}>
          <Block>col-6</Block>
        </Col>
        <Col className="gutter-row" span={6}>
          <Block>col-6</Block>
        </Col>
        <Col className="gutter-row" span={6}>
          <Block>col-6</Block>
        </Col>
      </Row>
    </div>
  );
};

export default InternDetail;
