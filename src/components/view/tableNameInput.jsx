import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
`

const Input = styled.input`
  padding: 5px;
  width: 70%;
  font-size: 1em;
  border: none;
  margin: 1px;
  margin-top: 4px;
`;

const Button = styled.button`
  padding: 6px;
  font-size: 0.6em;
  margin: 5px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: white;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.12);
`;

const Buttons = styled.span`
  float: right;
  margin-right: 5px;
`

function TableNameInput({ setPopUp }) {
  return (
    <Wrapper>
      <Input type="text" placeholder=" Enter Table Name * "></Input>
      <Buttons>
        <Button>Add Fields</Button>
        <Button>Submit Table</Button>
        <Button onClick={() => { setPopUp('') }}>Close</Button>
      </Buttons>
    </Wrapper>
  )
}

export default TableNameInput;