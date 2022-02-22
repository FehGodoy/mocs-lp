import styled from "styled-components";


export const Footer = styled.footer`
padding: 50px 0px 50px 0px;
position: relative;

`;

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    border-top: 1px solid #1a1a1a;
`;

export const BoxSocial = styled.div`
padding: 35px 0px 15px 0px;
    ul{
        display:flex;
        list-style:none;
        justify-content:center;
        li{
            margin: 0px 15px;
            color: var(--white);
            font-size: 20px;
            cursor:pointer;
            transition: ease-in .2s;

            &:hover{
                color: var(--orange);
            }
        }
    }
`;

export const BoxContact = styled.footer`
text-align:center;
padding: 10px 0px 0px 0px;

@media screen and (max-width:767px){
        padding: 10px;
    }

p{
    color: var(--white);
    text-transform:uppercase;
    font-weight:600;
    letter-spacing:1px;
}

`;

export const LinkAnchor = styled.div`
position:absolute;
right:90px;

@media screen and (max-width:767px){
        right:15px;
        
    }

a{
    color: var(--white);
    text-decoration:none;
    text-transform:uppercase;
    font-size: 12px;
    font-weight:500;
    letter-spacing:1px;
}

`;

