import React from "react";
import styled from "styled-components";
import Button from "./Button";


const Login = () => {
  
    let Div =styled.div`
    margin-top:100px;
    // border:1px solid blue;
    border-radius:2%;
    background-color:lavender;
    width:25%;
    margin-left:35%;
    padding:50px;
    height:220px;


    `
  let Input = styled.input`
    padding: 5px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid grey;
  `;
  let Buttonout =styled.button`
  margin-left:68%;
  padding: 5px 10px;
  color: #ffffff;
  background-color: blue;
  font-weight: 400;
  border-radius: 3px;
  
  &:hover {
    // color: black;
    background-color: transparent;
    border: 1px solid blue;
    transition:1s;
    cursor: pointer;
    color:blue;
  `

  const [data, setData] = React.useState({
    email: "",
    password: "",
  });


  function handleChange(e) {
    const { value, name } = e.target;

    setData((old) => ({
      ...old,
      [name]: value,
    }));
  }

  function getResponse() {
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      
  }



  return (
      <>
    <Buttonout onClick={getResponse}>Log out</Buttonout> <br />
    <Div>
      
      <Input
        type="email"
        name="email"
        value={data.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <br />
      <Input
        type="password"
        name="password"
        value={data.password}
        placeholder="Enter your Password"
        onChange={handleChange}
      />
      <br /> <br /><br /><br />
      <Button onClick={getResponse}>Login In</Button>
    </Div>
    </>
  );
};

export default Login;