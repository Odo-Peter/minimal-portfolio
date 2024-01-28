import React from 'react';
import Style from './Terminal.module.scss';
import classNames from 'classnames';
import { Box } from '@mui/material';

const iconClass = 'fa fa-circle';

function Terminal(props) {
  const { text } = props;

  return (
    <Box
      component={'section'}
      className={classNames(Style.terminal, Style.shadowed)}
      width={{ xs: '80%', md: '60%' }}
      borderRadius={'0.5rem'}
      mb={'4rem'}
    >
      <Box
        sx={{ backgroundColor: '#8c8c8c' }}
        p={'0.5rem'}
        borderRadius={'0.5rem 0.5rem 0 0'}
        fontSize={'1rem'}
      >
        <i className={classNames(iconClass, Style.red)} />
        <i className={classNames(iconClass, Style.amber)} />
        <i className={classNames(iconClass, Style.green)} />
      </Box>
      <Box
        py={{ xs: '1rem', md: '1.6rem' }}
        px={{ xs: '2rem', md: '2.5rem' }}
        borderRadius={'0 0 0.5rem 0.5rem'}
        sx={{ backgroundColor: '#27242f', lineHeight: '1.5' }}
        fontSize={'1.1rem'}
        fontFamily={'Courier New, Courier, monospace'}
      >
        {text}
      </Box>
    </Box>
  );
}

export default Terminal;
