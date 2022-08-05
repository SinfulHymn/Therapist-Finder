import { Link } from "react-router-dom"
export default function Nav ({user,handleSignOut}) {
    // console.log('this is user',user)
    return (
        <nav className="navbar p-2 navbar-expand-lg bg-primary" >
            <div className="container-fluid">
              
            <Link  to="/">
                <img src="https://i.imgur.com/7w9MouD.png" className="ms-5-md" style={{height: "5rem"}}/>
            </Link>
            <button className="navbar-toggler float-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
               
                <div className="collapse navbar-collapse" id="navbarColor03" >
                    <ul className="navbar-nav ms-auto " style={{fontSize:"1.4em", marginRight:"1em"}} >
                        <li className="nav-item test">
                            <Link className="nav-link active test" to="/">Home
                                <span className="visually-hidden test">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item test">
                            <Link className="nav-link active" to="/therapists">Therapists
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item test">
                            <Link className="nav-link active test" to="/about">About
                            <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div id="signInDiv" className="nav-link active test"> <span className="visually-hidden">(current)</span></div>
                           
                        </li>
                        { Object.keys(user).length != 0 ?
                        <li className="ms-2 nav-item d-flex justify-content-center align-content-center">
                            <div className="d-flex justify-content-center align-content-center">

                            <button className="btn btn-light test" onClick={(e)=> handleSignOut(e)}> signout </button>
                            </div>
                        </li>: <></>
                        }
                        {!user }
                        {Object.keys(user).length != 0 &&
                        <>
                        
                        <li className="nav-item">
                        <img className="ms-3" src={user.picture} alt="" style={{height: "3rem"}}/>
                        </li>
                        </>
                        }
                    </ul>

                </div>
            </div>
        </nav>

        // <div className="nav">
        //     <div className="navlinks">
        //         <Link to="/therapists">Home</Link>
        //         <Link to="/about">About</Link>
        //     </div>
        // </div>
    )
}