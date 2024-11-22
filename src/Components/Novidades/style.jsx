import styled from "styled-components";

export const Section = styled.section`
background-color: #1e3932;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  color: #FFFFFF;
  padding: 0 5%; 
`;

export const Div = styled.div`
width: 30vw;

width: 40%; 
  h5 {
    font-size: 16px;
    color: #ffffff
  }
  h4 {
    font-size: 40px;
    margin-bottom: 15px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
   }
`;

export const ImageContainer = styled.div`
  width: 40%; 
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover; 
  }
`;

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






