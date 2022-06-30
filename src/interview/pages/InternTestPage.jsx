import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const BlockElement = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
const InterPageWrapper = styled.div`
  height: 100%;
  position: relative;
`;
const data = {
  name: "chche",
  a: {
    b: "ccc",
    c: "sss",
  },
};

const InternTestPage = () => {
  const history = useHistory();
  

  const newObj={age:3,...data}
  console.log(newObj)
  const arr = [10, 20, 30, 40, 20];
  const sum = arr.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  console.log(sum, "sum");
  const count = arr.reduce((count, cur) => {
    return cur === 20 ? count + 1 : count;
  }, 0);
  console.log(count, "count");
  const str = arr.reduce((pre, cur) => {
    return (pre = pre + cur.toString());
  }, "");
  console.log(str, "str");
  const set = arr.reduce((res, cur) => {
    return res.includes(cur) ? res : res.concat(cur);
  }, []);
  console.log(set, "set");
  const flatArray = [1, 2, [3, 4, [5, 6]]];
  const flatten = (arr) => {
    return arr.reduce((res, cur) => {
      return res.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
  };
  console.log(flatten(flatArray));
  const BlackComp = (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "black",
        display: "inline-block",
      }}
    />
  );
  const RedComp = (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "red",
        display: "inline-block",
      }}
    />
  );
  const COLOR_MAP = {
    0: BlackComp,
    1: RedComp,
  };
  const colorArr = [
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  ];

  const obj1 = {
    name: "chche",
    a: {
      b: "ccc",
      c: "sss",
    },
  };
 


  const isEqual = (obj1, obj2) => {
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
      return false;
    }
  };

  return (
    <InterPageWrapper>
      <BlockElement />
      {colorArr.map((ele) => {
        return COLOR_MAP[ele];
      })}
    </InterPageWrapper>
  );
};

export default InternTestPage;
