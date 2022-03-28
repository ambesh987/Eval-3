import styled from "styled-components";
let Button = styled.button`
  padding: 5px 10px;
  color: #ffffff;
  background-color: blue;
  font-weight: 400;
  border-radius: 3px;
  margin-left: 10px;
  &:hover {
    // color: black;
    background-color: transparent;
    border: 1px solid blue;
    transition:1s;
    cursor: pointer;
    color:blue;
  }
`;

export default Button;