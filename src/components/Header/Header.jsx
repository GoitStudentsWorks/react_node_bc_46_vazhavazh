import React from 'react';
import { useState } from 'react';
import logo from '../../assets/svg/header/logo.svg';
import burger from '../../assets/svg/header/burger.svg';
import style from './Header.module.scss';
import Menu from './Menu/Menu';
import Dropdown from './Dropdown/Dropdown';
import { NavLink } from 'react-router-dom';
import ToggleTheme from 'components/theme/ToggleTheme';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  let { avatarURL, name } = useSelector(getUserName);

  return (
    <header className={`${style.header} ${style.container}`}>
      <div className={style.navWrapper}>
        <NavLink to="/">
          <img className={style.logo} src={logo} alt="logo" />
        </NavLink>
        <Menu setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
      </div>
      <div className={style.userWrapper}>
        <div
          onClick={() => setIsDropdownActive(!isDropdownActive)}
          className={style.userInfoWrapper}
        >
          {avatarURL && (
            <img className={style.avatar} src={avatarURL} alt="avatar" />
          )}
          <p className={style.username}>{name}</p>
          <div className={style.toggle}>
            <ToggleTheme />
          </div>
        </div>
        <Dropdown
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
        />
        <div className={style.burgerWrapper}>
          <button
            className={style.burgerBtn}
            type="button"
            onClick={() => setIsMenuActive(true)}
          >
            <img className={style.burger} src={burger} alt="burger button" />
            {/* <svg className={style.burger}>
              <use className={style.burger} href={burger}></use>
            </svg> */}
          </button>
        </div>
      </div>
    </header>
  );
};

// 1bd9f20d66aafa61f9aac797505b16d683f0c1fa
