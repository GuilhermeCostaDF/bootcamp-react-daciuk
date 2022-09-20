import H2 from "./titles/h2";
import Button from "./botao";

function Conteudo(props) {
  return (
    <section>
      <H2>{props.titulo}</H2>
      <br />
      <p>{props.conteudo}</p>
      <div id="container">
        <Button kind="primary" text="Comece a usar"></Button>
        <Button kind="secondary" text="Faça o tutorial"></Button>
      </div>
    </section>
  );
}

export default Conteudo;
