import React from 'react';
import Style from './About.module.scss';
import Terminal from './Terminal';
import { Box } from '@mui/material';
import { info } from '../../info/Info';

export default function About() {
  const firstName = info.firstName.toLowerCase();
  const lastName = info.lastName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {lastName} <span className={Style.green}>(master)</span> $
          </span>{' '}
          cat about-{firstName}.txt{' '}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about-{firstName}.txt <span className={Style.green}>(master)</span>{' '}
            ${' '}
          </span>
          <span style={{ fontSize: '0.98rem' }}>{info.bio}</span>
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {lastName} <span className={Style.green}>(master)</span> $
          </span>{' '}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {lastName}/skills/tools{' '}
            <span className={Style.green}>(master)</span> $
          </span>{' '}
          ls
        </p>
        <p style={{ color: info.baseColor, fontSize: '0.98rem' }}>
          {' '}
          Proficient With
        </p>
        <ul className={Style.skills} style={{ fontSize: '0.98rem' }}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor, fontSize: '0.98rem' }}>
          {' '}
          Exposed To
        </p>
        <ul className={Style.skills} style={{ fontSize: '0.98rem' }}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {lastName} <span className={Style.green}>(master)</span> $
          </span>{' '}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {lastName}/hobbies/interests{' '}
            <span className={Style.green}>(master)</span> $
          </span>{' '}
          ls
        </p>
        <ul style={{ fontSize: '0.98rem' }}>
          {info.hobbies.map((hobby, index) => (
            <li
              key={index}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Box component={'span'}>{hobby.emoji}</Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mt={'8rem'}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
