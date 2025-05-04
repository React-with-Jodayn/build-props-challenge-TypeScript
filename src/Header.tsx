export default function Header() {
  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#017575",
    zIndex: 1024,
    color: "white",
    padding: "25px 0",
    fontSize: "x-large",
    margin: "auto",
    boxShadow: "0 0 5px 0 #00000",
  };

  return <h1 style={headerStyle}>Ahmad Maher Alomari</h1>;
}
