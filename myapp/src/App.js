import React from 'react'
import Home from './components/Home'
import styled from 'styled-components'
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
border:1px solid black;
margin:30px 0 10px;
`
const Header=styled.span`
color:black;
font-weight:bold;
font-size:25px;
font-family: 'Montserrat', sans-serif;
`
export default function App() {
  return (
    <Container>
      <Header>
        Expense Tracker
      </Header>
      <Home/>
    </Container>

  )
}

