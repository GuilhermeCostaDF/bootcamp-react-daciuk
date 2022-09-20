import H1 from "./titles/h1";

function Header(props) {
  return (
    <header>
      <H1 className="logo">{props.text}</H1>
    </header>
  );
}

export default Header;
