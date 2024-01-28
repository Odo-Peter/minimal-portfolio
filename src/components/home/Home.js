import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { Box } from '@mui/material';
import { info } from '../../info/Info';

export default function Home() {
  return (
    <Box
      component={'main'}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'2rem'}
      marginTop={{ xs: '4rem', md: '8rem' }}
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={'odo peter'}
        style={{ background: info.gradient }}
        component={'img'}
        src={me}
        width={{ xs: '35vh', md: '48vh' }}
        height={{ xs: '35vh', md: '48vh' }}
        borderRadius={'50%'}
        p={'0.75rem'}
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <Box>
        <h1>
          Hi, I'm{' '}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {`${info.firstName} ${info.lastName}`}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>I'm {info.position}.</h2>
        <Box component={'ul'} p={'1rem'} marginBottom={'2rem'}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={'flex'}
          gap={'1.5rem'}
          fontSize={{ xs: '1.6rem', md: '2rem' }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
