import { Link } from "react-router-dom"

export default function NavBar () {
    const linkStyle = {
        padding:"10px",
        display:"block",
        fontSize:"18px",
        textDecoration:"none",
        color:"white"
    }
    const navContainerStyle = {
        backgroundColor:"#181d27",
        padding:"10px",
        display:"flex",
        gap:"5px",
        justifyContent:"center",
    }
    return (
        <div style={navContainerStyle}>
            <Link style={linkStyle} to= '/'>Home</Link>
            <Link style={linkStyle} to='/create' > Create</Link>
        </div>
    )
}