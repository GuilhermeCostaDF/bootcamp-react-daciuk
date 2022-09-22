import Header from "./components/header";
import Navegacao from "./components/navegacao";
import MenuLateral from "./menuLateral";
import Conteudo from "./components/conteudo";
import Footer from "./components/footer";
import { useState } from "react";
// import { useEffect } from "react";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #1B2430;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  max-width: 1200px;
`;

function App() {
  const obj = [
    {
      id: 1,
      title: "Pratique React",
      content:
        "React foi pensado desde o início para ser adotado gradualmente e você pode usar menos ou mais da biblioteca de acordo com sua necessidade. Se você quer uma amostra do React, adicionar interatividade a uma página HTML simples ou iniciar uma aplicação React complexa, os links desta seção o ajudarão no início.",
    },
    {
      id: 2,
      title: "Aprenda React",
      content:
        "As pessoas chegam ao React com diferentes conhecimentos e com diferentes métodos de aprendizado. Independente de preferir uma abordagem mais teórica ou mais prática, esperamos que ache esta seção útil. Se você preferir aprender fazendo, comece com o nosso tutorial prático. Se você preferir aprender os conceitos passo-a-passo, inicie com o nosso guia dos principais conceitos. Como qualquer tecnologia desconhecida, React tem uma curva de aprendizado. Com prática e um pouco de paciência, você pegará o jeito. ",
    },
    {
      id: 3,
      title: "Mantenha-se Informado",
      content:
        "O blog do React é a fonte oficial para as atualizações feitas pelo time do React. Qualquer coisa importante, incluindo notas de lançamento ou notificações de depreciação, serão postadas primeiro lá. Você também pode seguir o @reactjs no Twitter, mas você não perderá nenhuma informação essencial se apenas ler o blog.Nem toda versão do React tem sua própria publicação no blog. Mas você encontrará um detalhado registro de mudanças para cada versão no arquivo CHANGELOG.md no repositório do React, assim como na página de Versões. ",
    },
  ];

  const [titulo, setTitulo] = useState(obj[0].title);
  const [content, setContent] = useState(obj[0].content);

  function trocaTituloEConteudo(e) {
    setTitulo(obj[e.target.id - 1].title);
    setContent(obj[e.target.id - 1].content);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header text="React Bootcamp"></Header>
        <Navegacao children="Menu" />
        <main>
          <MenuLateral>
            {obj.map((obj) => (
              <li>
                <p onClick={trocaTituloEConteudo} id={obj.id}>
                  {obj.title}
                </p>
              </li>
            ))}
          </MenuLateral>
          <Conteudo titulo={titulo} conteudo={content} />
        </main>
        <Footer>&#169; Developed by - Guilherme Costa 2022</Footer>
      </Container>
    </>
  );
}

export default App;

//AULAS 12 13 14
//AULAS 12 13 14
//AULAS 12 13 14

// function App() {
//   // const [inputValue, setInputValue] = useState("");

//   // function handleChange(e) {
//   //   setInputValue(e.target.value);
//   // }

//   const [counter, setCounter] = useState(0);

//   return (
//     <>
//       <Title>{counter}</Title>
//       <Buttons setCounter={setCounter} />

//       {/* <Form inputValue={inputValue} handleChange={handleChange} /> */}
//     </>
//   );
// }

// function Title({ children }) {
//   return <h1>{children}</h1>;
// }

// function Buttons({ setCounter }) {
//   function increment() {
//     setCounter((prevState) => prevState + 1);
//   }

//   function decrement() {
//     setCounter((prevState) => prevState - 1);
//   }

//   return (
//     <>
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//     </>
//   );
// }

// // function Form({ inputValue, handleChange }) {
// //   return (
// //     <form>
// //       <input value={inputValue} onChange={handleChange}></input>
// //       <button type="submit">Enviar</button>
// //     </form>
// //   );
// // }

// export default App;

/// AULA 15, 16
/// AULA 15, 16
/// AULA 15, 16

// const url = "https://cdn.apicep.com/file/apicep/[CEP].json";

// function App() {
//   useEffect(() => {
//     async function getCep() {
//       const response = await fetch(url.replace("[CEP]", "71916-500"));
//       const json = await response.json();
//       console.log(json);
//     }

//     getCep();
//   });

//   return (
//     <>
//       <button>Buscar</button>
//     </>
//   );
// }

// export default App;

// function App() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <>
//       <Counter counter={counter} setCounter={setCounter} />
//       <button onClick={() => setCounter((c) => c - 1)}>-</button>
//       <button onClick={() => setCounter((c) => c + 1)}>+</button>
//     </>
//   );
// }

// function Counter({ counter }) {
//   console.log("counter");

//   useEffect(() => {
//     console.log("useEffect de counter");

//     return () => {
//       console.log("clean effect de counter");
//     };
//   });

//   return (
//     <>
//       <h1>{counter}</h1>
//     </>
//   );
// }

// export default App;
