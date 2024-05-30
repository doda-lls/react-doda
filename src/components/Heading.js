function Heading(props) {
  const headingStyle = {
    color: "blue",
    fontFamily: "times",
  }
    return <h1 style={headingStyle}>Header {props.firstName}</h1>
  }
  
export default Heading;