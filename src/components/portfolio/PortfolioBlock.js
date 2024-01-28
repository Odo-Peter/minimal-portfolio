import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';

function PortfolioBlock(props) {
  const { image, live, source, title } = props;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box component={'img'} src={image} alt={'mockup'} />
      <h1 style={{ fontSize: '1.2rem' }}>{title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.6rem'}
        alignItems={'center'}
        fontSize={'1rem'}
        py={'2rem'}
      >
        <Box
          py={1}
          px={2}
          border={'1px solid black'}
          borderRadius={'25px'}
          fontSize={'0.9rem'}
          width={'10rem'}
          display={'flex'}
          gap={'4px'}
          justifyContent={'center'}
        >
          <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
        </Box>

        <Box
          p={1}
          px={2}
          border={'1px solid black'}
          borderRadius={'25px'}
          fontSize={'0.9rem'}
          width={'10rem'}
          display={'flex'}
          gap={'4px'}
          justifyContent={'center'}
        >
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
