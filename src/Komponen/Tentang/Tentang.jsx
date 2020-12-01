import React from 'react'
import styled from 'styled-components'
import Pemain from '../Pemain/Pemain'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const Container = styled.div`
background-color: #EEEEEE;
border-radius: 0px;
box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
color: #B3B8CD;
position: relative;
width: 30%;
margin: 50%;
margin-top: 0%;
@media screen and (max-width: 200px) {
       margin: 20%;
}
`
const Image = styled.img`

  border: 1px solid #03bfcb;
  border-radius: 50%;
  padding: 1px;
  width: 30%;
  height: auto;
  margin: 20px;
  
`
const Title = styled.h5`
  margin: auto;
  color: black;
  font-size: 1vw
`

const Rowcard = styled.div
`
    display: table;
    width: 80%;
    table-layout: fixed;
    border-spacing: 0px;
    text-align: center;
`

const ColumnCard = styled.div
`
    display: table-cell;
    text-align: center;

`

function Tentang(props){
    return(
        <div>
            <Image src={props.src}/>
            <Image src={props.src2}/><br/>
            <a>{props.identitas}</a><br/>
        </div>

    )
}


export default function index() {
  return (
    <Router>
      <Rowcard>
          <ColumnCard>
          <Container>
            <Title>
                <Tentang src="https://www.linkpicture.com/q/Fiqri-abd.jpg" identitas="KELOMPOK 34" src2="https://www.linkpicture.com/q/FAR.jpg"/>
            </Title>
            </Container>
          </ColumnCard>
      </Rowcard>
      </Router>
  );
}
