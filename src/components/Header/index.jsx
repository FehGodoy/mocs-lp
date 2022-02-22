import React from 'react';
import * as Styled from './styles';
import ImgLogo from '../../assets/images/logo-left.png';
import LogoImgCenter from '../../assets/images/logo-center.svg';


function Header() {
  return (
        <>
            <Styled.Header id="header">
                <Styled.Nav>
                    <Styled.LogoLeft>
                        <Styled.ImgLogo src={ImgLogo}/>
                    </Styled.LogoLeft>
                    <Styled.LogoCenter>
                        <Styled.LogoImgCenter src={LogoImgCenter}/>
                    </Styled.LogoCenter>
                </Styled.Nav>
            </Styled.Header>
        </>
    )
}

export default Header;