import { useState } from "react";
import copolaranjag from "../../assets/image/copolaranjag.png"; 
import copovermelhog from "../../assets/image/copovermelhog.png";
import copoamarelog from "../../assets/image/copoamarelog.png"; 
import copolaranjap from "../../assets/image/copolaranjap.png"; 
import copovermelhop from "../../assets/image/copovermelhop.png"; 
import copoamarelop from "../../assets/image/copoamarelop.png"; 

export default function Home() {
  const [copo, setCopo] = useState(copolaranjag); 
  const [bgColor, setBgColor] = useState("#037143"); 

  const alterarcopo = (copoImagem, corFundo) => {
    setCopo(copoImagem);
    setBgColor(corFundo);
  };

  return (
    <main>
      <section>
        <img src={copo} alt="Copo grande" /> 
        <h1>Mais que Café</h1>
        <p>Isso é Starbucks</p>
        <p>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
          quentes e frias, doces diferenciados e sanduíches.
        </p>
        <button onClick={() => alert("Obrigado por querer saber mais!")}>
          SAIBA MAIS
        </button>
        <div>
          <img
            src={copolaranjap}
            alt="Copo laranja pequeno"
            onClick={() => alterarcopo(copolaranjag, "#037143")} 
          />
          <img
            src={copovermelhop}
            alt="Copo vermelho pequeno"
            onClick={() => alterarcopo(copovermelhog, "#ff0000")} 
          />
          <img
            src={copoamarelop}
            alt="Copo amarelo pequeno"
            onClick={() => alterarcopo(copoamarelog, "#ffc107")} 
          />
        </div>
      </section>
    </main>
  );
}
