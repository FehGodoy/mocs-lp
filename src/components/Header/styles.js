import styled from "styled-components";


export const Header = styled.header`
padding:15px;
`;

export const Nav = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
`;

export const LogoLeft = styled.div`
    width: 50%;
`;

export const ImgLogo = styled.img`
width: 80px;
transition: all .7s;
cursor: pointer;

&:hover{
    transform: rotate(45deg);
}
`;

export const LogoCenter = styled.div`
width: 50%;
display: flex;
align-items:center;
position: relative;

`;

export const LogoImgCenter = styled.img`
width: 90px;
cursor: pointer;
position: absolute;
right: 20px;
`;

export const Links = styled.div`
padding: 0px 15px 0px 0px;
width:auto;
`;

export const Ordened = styled.ul`
list-style:none;
`;

export const Li = styled.li`
margin:5px 0px;
padding: 0px 10px;

&:last-child{
    background-color: var(--orange);
    
}
`;

export const Link = styled.a`
color: var(--white);
text-transform:uppercase;
font-weight:700;
font-size: .7rem;
letter-spacing: 2px;
cursor:pointer;
`;


