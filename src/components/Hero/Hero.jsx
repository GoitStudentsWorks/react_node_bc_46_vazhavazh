import React from 'react';

import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { HeroWrapper } from 'components/HeroWrapper/HeroWrapper';

import { СhooseYourBreakfast } from 'components/СhooseYourBreakfast/СhooseYourBreakfast';
import { Search } from 'components/Search/Search';

export const Hero = () => {
  return (
    <>
      <HeroTitle />
      <HeroWrapper>
        <СhooseYourBreakfast />
        <Search />
      </HeroWrapper>
    </>
  );
};
