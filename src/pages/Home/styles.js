import styled from "styled-components";
import Wallpaper from '../../assets/images/home-4.jpg';


export const SectionWallpaper = styled.section`
    position: relative;
    /* display: flex;
    align-items: center;
    flex-direction: column; */
`;

export const Container = styled.div`
    max-width:1120px;
    margin: 0 auto;
    
`;

export const Sidebar = styled.div`
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -75px;
    top: 30%;

    @media screen and (max-width:767px){
        display: none;
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
`;

export const Circle = styled.img`
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    margin: 0px 15px 0px 0px;
`;

export const Link = styled.a`
    color: var(--white);
    margin: 0px 12px 0px 10px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;

    &:last-child{
        position: relative;
        &::before{
            content: '';
            display: block;
            width: 10px;
            height: 2px;
            background-color: var(--orange);
            position: absolute;
            left: -16px;
            top: 10px;
        }
    }
`;

export const Text = styled.div`
    width: 70%;
    z-index: 99;
    margin-left: 50px;
    position: relative;
    z-index:9999;
    @media screen and (max-width:767px){        
        margin-top: 55px;
        margin-left: 0;
        padding: 0px 15px;
        width: 100%;
    }
`;


export const TitleOver = styled.h2`
    -webkit-text-stroke: 1px #EDEEEF;
    color: transparent;
    font-size: 5.2rem;
    font-weight: 600;
    line-height: 1;

    @media screen and (max-width:767px){
           font-size:35px;
    }
    /* @media screen and (max-width:767px){

    } */

`;

export const TitleWhite = styled.h2`
    font-size: 5.2rem;
    font-weight: 600;
    color: var(--white);
    line-height: 1;
    margin-bottom: 40px;

    @media screen and (max-width:767px){
           font-size:60px;
    }
`;

export const Photo = styled.div`
    width: 25%;
    position: absolute;
    right: 20%;
    bottom: 10%;
    z-index: 1;
    transition: ease-in .4s;

    &:hover{
        bottom: 13%;
    }
    @media screen and (max-width:767px){
        width: 100%;
        right: 0;
    }
`;

export const Subtitle = styled.h5`
    font-size: 1.2rem;
    color: var(--white);
    font-weight: 400;
    max-width: 50%;
    text-align: left;

    @media screen and (max-width:767px){
        max-width:100%;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    
`;

export const SectionNumbers = styled.section`
    margin: 50px 0px;
`;

export const Title = styled.div`
text-align:center;

`;

export const TitleSection = styled.h6`
    color: var(--white);
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: var(--orange);
    position: relative;
    max-width: 220px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    transition: ease-in .5s;

    &::before{
        content: '';
    display: block;
    width: 12px;
    height: 3px;
    background: var(--orange);
    position: absolute;
    left: -20px;
    }
`;

export const BoxNumber   = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:767px){
        flex-direction:column
    }
`;

export const BoxNumbers = styled.div`
    width: 33%;
`;

export const TitleNumber = styled.h1`
    color: var(--white);
    font-size: 4rem;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;

`;

export const SubtitleNumbers = styled.h5`
    color: var(--white);
    line-height: 1;
`;


export const SectionProblem = styled.section`
    margin: 80px 0px;
    position: relative;
`;

export const HeadSection = styled.div`
    margin: 40px 0px;
`;

export const TitleSectionProblem = styled.div`
    
`;

export const TitleSectionHead = styled.h5`
        color: var(--orange);
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    max-width: 125px;

    @media screen and (max-width:767px){
        margin-left:20px;
    }

    &::after{
        content: '';
    display: block;
    width: 10px;
    height: 2px;
    background: var(--orange);
    position: absolute;
    right: 0;
    top: 10px;
    }
`;

export const TitleProblem = styled.h5`
        color: var(--white);
    font-size: 7rem;
    font-weight: 500;
    line-height: 1.1;

    @media screen and (max-width:767px){
           font-size:50px;
           text-align:center
    }
    
`;

export const WordStyled = styled.h5`
        -webkit-text-stroke: 1px #EDEEEF;
    color: transparent;
    font-weight: 600;
`;

export const SectionImgLogo = styled.div`
        position: absolute;
    right: 0;
    width: 35%;
    top: 0;
`;

export const BigLogo = styled.img`
        width: 100%;
`;

export const BoxTextProblem = styled.div`
    margin: 15px auto;
    max-width: 365px; 
`;

export const TextProblem = styled.h5`
    color: var(--white);
    font-size: .9rem;

    @media screen and (max-width:767px){
           text-align:center;
    }
`;

export const SubtextProblem = styled.h5`
    color: var(--white);
    font-weight: 400;
    margin-top: 20px;

    @media screen and (max-width:767px){
           text-align:center;
            padding: 0px 15px;
    }
`;

export const SectionSymptoms = styled.section`
    margin: 50px 0px;
`;

export const BoxContainer = styled.div`
    display: flex;

    @media screen and (max-width:767px){
        flex-direction:column
    }
`;

export const BoxSym = styled.div`
        margin: 0px 15px;
`;

export const TextBoxSym = styled.p`
        color: var(--white);
    font-weight: 400;
    margin-top: 30px;
`;

export const TitleBoxSym = styled.h3`
        font-size: 2.5rem;
    color: var(--white);
    font-weight: 700;
`;

export const SectionSymptonsVersionTwo = styled.section`
    margin: 100px 0px 50px 0px;
    background-color: var(--greenDark);
    max-width:85%;
    padding:40px;
    position: relative;

    @media screen and (max-width:767px){
           max-width:100%;
           padding: 20px ;
    }
`;

export const BoxContext = styled.div`
    
`;

export const TextWall = styled.div`
    max-width:50%;
    margin-top:40px;
    @media screen and (max-width:767px){
           max-width:100%;
           padding: 0px 20px;
           text-align:center;
    }
    h6{
        color: var(--white);
    font-size:1rem;
    font-weight: 500;
    line-height:1.2;
    letter-spacing:4px;
    }
`;

export const TitleWall = styled.div`
    
    h1{
        color: var(--white);
    font-size:4.1rem;
    font-weight: 600;
    line-height:1;

    @media screen and (max-width:767px){
           text-align:center;
    }
    }
`;

export const SectionTestimonials = styled.section`
    background-image: url(${Wallpaper});
    background-size: 60% auto;
    background-repeat:no-repeat;
    background-position: 100% 0%;
    padding: 10% 0% 8% 0%;
    margin-top:100px;

    h5{
        color: var(--orange);
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    max-width: 125px;

    &::after{
        content: '';
    display: block;
    width: 10px;
    height: 2px;
    background: var(--orange);
    position: absolute;
    right: -10px;
    top: 10px;
    }
    }
`;

export const SectionPhoto = styled.section`
    position: relative;
    width: 100%;
    margin-top: 300px;
    height: auto;
`;

export const TitleWe = styled.div`
    max-width:70%;

    @media screen and (max-width:767px){
        max-width:100%;
    }
    h1{
        color: var(--white);
    font-size:4.4rem;
    font-weight: 700;
    line-height:1;

    @media screen and (max-width:767px){
        font-size:45px;
        text-align:center;
    }
    }
`;

export const Weare = styled.section`
    margin-top:180px;
`;

export const PhotoRetrait = styled.div`
    

    img{
        width: 60%;
        position: absolute;
        top: -255px;
        object-fit: cover;
        height: 225px;
        object-position: center;
    }

`;

export const PhotoAbsolute = styled.div`
    

    img{
        width: 30%;
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;

export const TitleBoxGreen = styled.h1`
    color: var(--white);
    font-size:4.9rem;
    font-weight: 700;
    line-height:1;

    @media screen and (max-width:767px){
           text-align:center;
           font-size:40px
    }
`;

export const TextBoxGreen = styled.p`
    max-width:50%;
    margin: 20px auto 0px auto;
    color: var(--white);
    line-height:1.7;

    @media screen and (max-width:767px){
        max-width:90%;
        text-align:center;
    }
`;

export const SectionProducer = styled.section`
 /* padding: 0% 0% 0% 10%; */
 margin-top: 3%;


 .owl-nav{
    position: relative;
    @media screen and (min-width:1100px){
        margin-left:120px;
    }    
    div{
        background: transparent!important;
        font-size:40px!important;
        font-weight:700!important;
        color: var(--orange)!important;

        &.owl-prev{
            position: absolute;
            left: 0;
        }
        &.owl-next{
            position: absolute;
            left: 35px;
        }
    }
 }
`;

export const ContainerCarousel = styled.div`
    max-width:auto;
`;

export const BoxCarousel = styled.div`
 
`;
export const BoxProducer = styled.div`
 max-width: 95%;

 @media screen and (max-width:767px){
        max-width:100%;
    }
`;
export const BoxInfoProducer = styled.div`
 
`;
export const FunctionProducer = styled.div`
     margin-top: 25px;
     @media screen and (max-width:767px){
        padding: 10px;
    }

     h6{
        color: var(--white);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
     }
`;
export const ResumeProducer = styled.div`
 @media screen and (max-width:767px){
        padding: 10px;
    }
 p{
    color: var(--white);
    font-weight: 300;
    font-size: 15px;
 }
`;
export const BoxNameProducer = styled.div`
 margin-top: 20px;

 @media screen and (max-width:767px){
        padding: 10px;
    }
 h2{
    text-transform: uppercase;
    color: var(--white);
    letter-spacing: 4px;
    font-weight: 600;
 }
`;
export const ImageProducer = styled.div`
 height: 250px;

 img{
    width: 100%;
    object-fit: cover;
    height: 100%;
    object-position:center 50%;
 }
`;

export const SectionBrands = styled.section`
 margin: 100px 0px 40px 0px;
`;

export const BoxBrands = styled.div`
 background-color: var(--silver);
 padding: 55px;

 @media screen and (max-width:767px){
        padding:20px 10px;
    }
`;

export const ImageBrands = styled.div`
 width: 100%;

 img{
     width: 100%;
 }
`;