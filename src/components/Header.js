import { CDN_logo } from "../utilities/contents"; // it is a named export, so we can import it with any name

// we can use named import and default import in the same file like import { CDN_logo } , restvel from "../utilities/contents";

const  AppHeader = () => {
    return (
        <div className="header">
            <div className="logo">
              <img src= {CDN_logo} alt="App Logo" className="app-logo" />
            </div>
            
            <nav className="nav bar navbar-expand-lg navbar-light bg-light">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default AppHeader;