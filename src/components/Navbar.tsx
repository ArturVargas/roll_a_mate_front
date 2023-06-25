import Nav from "react-bootstrap/Nav";

function ListExample() {
  return (
    <Nav defaultActiveKey="/deposit" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/deposit">Deposit</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/pay">Pay</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/withdraw">Withdraw</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ListExample;
