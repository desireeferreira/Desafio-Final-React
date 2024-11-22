import styled from "styled-components";
import {Link} from "react-router-dom"

export const HeaderStyle = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
`
export const StyleLink = styled(Link)`
  text-decoration: none;
  color: #1e3932;
  
   &:hover{
       color: #f10071;
   }
`;

export const Ul = styled.ul`
display: flex;
width: 40vw;
justify-content: space-around;
list-style: none;

top:83px;
left:875px;
`
export const Li = styled.li`
&:hover{
  color: pink;
}
`