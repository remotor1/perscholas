import './Nav.css';

const Nav = () => {
  return (
    <nav className='menu' ria-label='Main Navigation' role='navigation'>
      <ul className='menu__links'>
        <li className='menu__item'>
          <a className='menu__link' href='#'>
            Woman's
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='#'>
            Men's
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='#'>
            On the Street
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='#'>
            The Catwalk
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='#'>
            AdWatch
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='#'>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
