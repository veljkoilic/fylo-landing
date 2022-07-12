import './header.scss'

export const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <img src="./images/logo.svg" alt="Logo" />
        </div>
        <nav className="menu">
            <ul>
                <li>Feature</li>
                <li>Team</li>
                <li>Login</li>
            </ul>
        </nav>
    </div>
  )
}
