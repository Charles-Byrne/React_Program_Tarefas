import styled from 'styled-components'
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc"

// é obrigatório começar com a letra maiúscula a variável.
export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
export const TodoList = styled.div`
 background-color: white;
 padding: 30px 20px;
 border-radius: 5px;

 h3 {
  color: #8052EC;
  font-size: 18px;
  text-align: center;
 }

 ul {
  padding: 0;
  margin-top: 60px;
  
 }
 
`

export const Input = styled.input`
 border: 2px solid rgba(209, 211, 212, 0.4);
 border-radius: 5px;
 height: 40px;
 margin-right: 40px;
 width: 342px;
 
`
export const Button = styled.button`
background: #8052EC;
border-radius: 5px;
border: none;
height: 40px;
color: #FFFFFF;
font-weight: 900;
font-size: 17px;
line-height: 2px;
width: 130px;
cursor:pointer;

&:hover {
  opacity: 0.8;
 }
 
 &:active{
  opacity: 0.6;
 }
`
export const ListItem = styled.div`
background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;
height: 60px;
display: flex;
align-items: center;
margin-bottom: 30px;
padding: 0 20px ;
width: 500px;
justify-content:space-between;

li {
  list-style: none;
}
`

export const Check = styled(FcCheckmark)`
cursor: pointer;
padding: 10px;
`
export const Trash = styled(FcEmptyTrash)`
cursor: pointer;
padding: 10px;
`