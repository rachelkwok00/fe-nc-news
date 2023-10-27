import { Link} from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../Contexts/UserContext"

export default function Navbar(){
    const {signInState ,usernameState} = useContext(UserContext)
    const [signIn] = signInState;
const [username] = usernameState

    return (<>
 <Link to={'/'}><p>Home</p></Link>
 <Link to={'/account'}><p id="username-container">{signIn?  `Signed in as: ${username}` : 'Sign In'}</p></Link>
 </>
 )
}
