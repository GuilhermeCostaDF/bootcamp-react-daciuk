import styled from "styled-components";

function Footer({ children }) {
  return <Rodape>{children}</Rodape>;
}

const Rodape = styled.footer`
  background-color: #51557e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 5px;
  font-size: 12px;
`;

export default Footer;
