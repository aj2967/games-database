import { NavLink } from 'react-router-dom';

import './styles.scss';

const Nav = () => {
  return (
    <header>
      <nav>
        <div>
          <h3>Game Database</h3>
        </div>
        <div className='links'>
          <NavLink to='/'>Games</NavLink>
          {/* <NavLink to='/free'>Free to play</NavLink>
          <NavLink to='/giveaways'>Giveaways</NavLink> */}
        </div>
      </nav>
    </header>
  )
}

export default Nav