import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  color: #1e3932;
`;
export const Div = styled.div`
width: 30vw;

h2{
    font-size: 40px;
}
`
export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
transition: background-color 0.3s ease;

 &:hover {
 background-color: #00874c;
 }
&:active {
  background-color: #004d30;
}
`;