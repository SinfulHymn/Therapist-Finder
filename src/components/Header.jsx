import { Link } from "react-router-dom"
import Nav from '../components/Nav'

export default function Header ({user,handleSignOut}) {

    return (
        
        <Nav user={user}
             handleSignOut={handleSignOut}/>
        
    )
}