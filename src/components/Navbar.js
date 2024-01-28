import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from './home/Toggler';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { info } from '../info/Info';

const links = [
  {
    name: 'Home',
    to: '/',
    active: 'home',
  },
  {
    name: 'About',
    to: '/about',
    active: 'about',
  },
  {
    name: info.initials,
    type: 'initials',
    to: '/',
    active: 'home',
  },
  {
    name: 'Projects',
    to: '/portfolio',
    active: 'portfolio',
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === '/'
      ? 'home'
      : location.pathname.slice(1, location.pathname.length)
  );

  return (
    <Box
      component={'nav'}
      width={'100%'}
      position={'fixed'}
      top={0}
      left={0}
      zIndex={100}
      bgcolor={'#1f1f1f'}
      borderBottom={'0.5px solid rgb(99, 95, 95)'}
      padding={'8px 0'}
    >
      <Box
        component={'ul'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={{ xs: '2rem', md: '8rem' }}
        fontSize={{ md: '1rem', xs: '0.8rem' }}
        fontWeight={'bold'}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={'li'}
            className={link.active === active && !link.type && Style.active}
          >
            <Link
              to={link.to}
              onClick={() => setActive(link.active)}
              className={Style.link}
            >
              {!link.type && <p style={{ padding: ' 0.5rem' }}>{link.name}</p>}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </Box>
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
