import styled from "styled-components";

function Header(props) {
  return (
    <Cabe>
      <h1>{props.text}</h1>
    </Cabe>
  );
}

const Cabe = styled.header`
  background-color: #1b2430;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 5px;

  h1 {
    color: white;
  }
`;

export default Header;
