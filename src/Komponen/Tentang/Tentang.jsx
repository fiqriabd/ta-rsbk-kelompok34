import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
background-color: #12CEF3;
border-radius: 100px;
box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
color: #B3B8CD;
position: relative;
left: 75%;
width: 50%;
length: 50%;
margin-top: 0px;
margin-bottom: 20px;
@media screen and (max-width: 250px) {
       margin: auto;
}
`
const Image = styled.img`

  border: 1px solid #03bfcb;
  border-radius: 50%;
  padding: 0px;
  width: 50%;
  height: 10%;
  margin: 20px;
  
`
const Title = styled.h5`
  margin: auto;
  color:black;
  font-size:1vw
`

const Rowcard = styled.div
`
    display: table;
    width: 50%;
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
            <Image src={props.src}/><br/>
            <Image src={props.src2}/><br/>
            <a>{props.identitas}</a><br/>
        </div>

    )
}


export default function index() {
  return (

      <Rowcard>
          <ColumnCard>
          <Container>
            <Title>
                <Tentang src="https://www.linkpicture.com/q/Fiqri-abd.jpg" src2="https://www.linkpicture.com/q/FAR.jpg"/>
            </Title>
            </Container>
          </ColumnCard>
      </Rowcard>
    
  );
}
