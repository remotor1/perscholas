import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <nav className='footer__menu'>
          <ul className='footer__menu-links'>
            <li className='menu__item'>
              <a className='footer__menu-link' href='#'>
                {' '}
                Woman's
              </a>
            </li>
            <li className='menu__item'>
              <a className='footer__menu-link' href='#'>
                Men's
              </a>
            </li>
            <li className='menu__item'>
              <a className='footer__menu-link' href='#'>
                On the Street
              </a>
            </li>
            <li className='menu__item'>
              <a className='footer__menu-link' href='#'>
                The Catwalk
              </a>
            </li>
            <li className='menu__item'>
              <a className='footer__menu-link' href='#'>
                AdWatch
              </a>
            </li>
            <li className='menu__item'>
              <a className='footer__menu-link' href='#'>
                About
              </a>
            </li>
          </ul>
        </nav>
        <p className='footer__copyrigth'>&copy; 2013 Valet industries</p>
      </footer>
    </>
  );
};

export default Footer;
