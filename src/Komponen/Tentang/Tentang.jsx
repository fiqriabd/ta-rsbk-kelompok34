import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: #12CEF3;
border-radius: 0px;
box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
color: #B3B8CD;
position: relative;
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
  font-size:3vw
`

const Rowcard = styled.div
`
    display: table;
    width: 100%;
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
            <a>{props.nama}</a><br/>
        </div>

    )
}


export default function index() {
  return (

      <Rowcard>
          <ColumnCard>
          <Container>
            <Title>
                <Tentang nama="Fiqri Abdilah" src="https://www.linkpicture.com/q/Fiqri-abd.jpg" />
            </Title>
            </Container>
          </ColumnCard>
          <ColumnCard>
          <Container>
            <Title>
                <Tentang nama="Nuur Sirajuddin Faruq" src="https://www.linkpicture.com/q/FAR.jpg"/>
            </Title>
            </Container>
          </ColumnCard>
      </Rowcard>
    
  );
}
