import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubTitleContainer } from './menu-item.styles';



const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer imageUrl={imageUrl} className='menu-item-background-image' />
    <ContentContainer className='menu-item-content'>
      <TitleContainer> { title.toUpperCase() } </TitleContainer>
      <SubTitleContainer> SHOP NOW </SubTitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);