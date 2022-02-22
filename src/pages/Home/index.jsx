import React from "react";
import * as Styled from './styles';
import Circle from '../../assets/images/circle.svg';
import Home2 from '../../assets/images/home-2.png';
import BigLogo from '../../assets/images/logo-left.png';
import Photo from '../../assets/images/home.jpg';
import PhotoR from '../../assets/images/home-3.jpg';
import Person from '../../assets/images/person.jpg';
import Person2 from '../../assets/images/person-2.jpg';
import Person3 from '../../assets/images/person-3.jpg';
import Person4 from '../../assets/images/person-4.jpg';
import Person5 from '../../assets/images/person-5.jpg';
import BrandsImage from '../../assets/images/brands.png';
import OwlCarousel from 'react-owl-carousel2';
import '../../../node_modules/react-owl-carousel2/lib/styles.css';
import '../../../node_modules/react-owl-carousel2/src/owl.theme.default.css';



function Home() {
  const options = {    
    nav: true,
    rewind: true,
    dots:false,
    autoplay: true,
    margin:10,
    navText: ["<",">"],
    center:true,
    autoplayHoverPause:false,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
  }
};

  return (
      
        <>
            <Styled.SectionWallpaper>
            <Styled.Sidebar>
                  <Styled.Box>
                    <Styled.Circle src={Circle}/>                  
                      <Styled.Link>
                        Instagram
                      </Styled.Link>
                      <Styled.Link>
                        Youtube
                      </Styled.Link>                  
                  </Styled.Box>
                </Styled.Sidebar>
              <Styled.Container>               
                <Styled.Text>
                  <Styled.TitleOver>
                  We multiply your content.
                  </Styled.TitleOver>
                  <Styled.TitleWhite>
                  Turning 1 video into 1 month of content.
                  </Styled.TitleWhite>
                  <Styled.Subtitle>
                    We cook up tasty bite-sized social videos that are contextual to each platform for you to create fans and make dough.
                  </Styled.Subtitle>
                </Styled.Text>
                <Styled.Photo>
                  <Styled.Img src={Home2} />
                </Styled.Photo>
              </Styled.Container>              
            </Styled.SectionWallpaper>
            <Styled.SectionNumbers>
              <Styled.Container>
                <Styled.Title>
                  <Styled.TitleSection>
                    Schedule a Call
                  </Styled.TitleSection>
                </Styled.Title>
                <Styled.BoxNumber>
                  <Styled.BoxNumbers>
                    <Styled.TitleNumber>
                        100+
                    </Styled.TitleNumber>
                    <Styled.SubtitleNumbers>
                      VIDEOS <br /> CREATED
                    </Styled.SubtitleNumbers>
                  </Styled.BoxNumbers>
                  <Styled.BoxNumbers>
                    <Styled.TitleNumber>
                        1M +
                    </Styled.TitleNumber>
                    <Styled.SubtitleNumbers>
                      COMBINED <br /> VIEWS
                    </Styled.SubtitleNumbers>
                  </Styled.BoxNumbers>
                  <Styled.BoxNumbers>
                    <Styled.TitleNumber>
                        3+
                    </Styled.TitleNumber>
                    <Styled.SubtitleNumbers>
                      MAJOR SOCIAL <br /> PLATFORMS COVERED
                    </Styled.SubtitleNumbers>
                  </Styled.BoxNumbers>
                  <Styled.BoxNumbers>
                    <Styled.TitleNumber>
                        7X
                    </Styled.TitleNumber>
                    <Styled.SubtitleNumbers>
                      ENGAGEMENT <br /> GROWTH
                    </Styled.SubtitleNumbers>
                  </Styled.BoxNumbers>
                </Styled.BoxNumber>
              </Styled.Container>
            </Styled.SectionNumbers>
            <Styled.SectionProblem>
              <Styled.Container>
              <Styled.HeadSection>
                <Styled.TitleSectionHead>
                  The Problem
                </Styled.TitleSectionHead>
              </Styled.HeadSection>
              <Styled.TitleSectionProblem>
                <Styled.TitleProblem>
                Consistently creating videos 
                <Styled.WordStyled>
                  is difficult
                </Styled.WordStyled>                
                </Styled.TitleProblem>
              </Styled.TitleSectionProblem>
              <Styled.SectionImgLogo>
                <Styled.BigLogo src={BigLogo} />
              </Styled.SectionImgLogo>
              <Styled.BoxTextProblem>
                <Styled.TextProblem>                  
                  YET, PROLIFIC VIDEO CREATORS EXIST. HOW ARE THEY ABLE TO DO IT?
                </Styled.TextProblem>
                <Styled.SubtextProblem>
                You believe in the power of video content marketing. Hell, you’ve made videos yourself. But now you need videos on overdrive without having to be the one who makes them, that’s when things got tough.
                </Styled.SubtextProblem>
              </Styled.BoxTextProblem>
              </Styled.Container>
            </Styled.SectionProblem>
            <Styled.SectionSymptoms>
              <Styled.Container>
              <Styled.HeadSection>
                <Styled.TitleSectionHead>
                  SYMPTOMS
                </Styled.TitleSectionHead>
              </Styled.HeadSection>
                <Styled.BoxContainer>
                  <Styled.BoxSym>
                    <Styled.TitleBoxSym>
                    You're not a babysitter
                    </Styled.TitleBoxSym>
                    <Styled.TextBoxSym>
                    You’ve hired editors before. But you’re spending just as much time directing them as you would have making the video yourself. Good talent that understands you and lifts that burden is a dime dozen, and the search feels endless.
                    </Styled.TextBoxSym>
                  </Styled.BoxSym>
                  <Styled.BoxSym>
                    <Styled.TitleBoxSym>
                    New ideas are a struggle
                    </Styled.TitleBoxSym>
                    <Styled.TextBoxSym>
                    You’ve hired editors before. But you’re spending just as much time directing them as you would have making the video yourself. Good talent that understands you and lifts that burden is a dime dozen, and the search feels endless.
                    </Styled.TextBoxSym>
                  </Styled.BoxSym>
                  <Styled.BoxSym>
                    <Styled.TitleBoxSym>
                    Your videos don't convert
                    </Styled.TitleBoxSym>
                    <Styled.TextBoxSym>
                    You’ve hired editors before. But you’re spending just as much time directing them as you would have making the video yourself. Good talent that understands you and lifts that burden is a dime dozen, and the search feels endless.
                    </Styled.TextBoxSym>
                  </Styled.BoxSym>
                </Styled.BoxContainer>
              </Styled.Container>
            </Styled.SectionSymptoms>
            <Styled.SectionSymptonsVersionTwo>
              <Styled.HeadSection>
                <Styled.TitleSectionHead>
                  SYMPTOMS
                </Styled.TitleSectionHead>
              </Styled.HeadSection>
              <Styled.Container>
                <Styled.BoxContext>
                  <Styled.TitleBoxGreen>
                    Contextual videos that build connections and convert.
                  </Styled.TitleBoxGreen>
                  <Styled.TextBoxGreen>
                  Picture your videos getting thousands of views, increasing your followers, and receiving comments and DMs asking for your help. Opportunities to help more people, guest speak on shows and podcasts, and sell your products are now a regular occurrence. All this is possible with contextual video content and a systematized process for creating them.
                  </Styled.TextBoxGreen>
                </Styled.BoxContext>
              </Styled.Container>
            </Styled.SectionSymptonsVersionTwo>
            <Styled.SectionPhoto>
              <Styled.PhotoRetrait>
                <img src={PhotoR} alt="Mocs" />
              </Styled.PhotoRetrait>
                <Styled.PhotoAbsolute>
                  <img src={Photo} alt="Mocs"/>
                </Styled.PhotoAbsolute>
            </Styled.SectionPhoto>
            <Styled.Weare>           
              <Styled.Container>
                <Styled.HeadSection>
                  <Styled.TitleSectionHead>
                  WHO WE ARE
                  </Styled.TitleSectionHead>
                </Styled.HeadSection>
                <Styled.TitleWe>
                  <h1>Why do it all yourself, when we can do it for you.</h1>
                </Styled.TitleWe>
                <Styled.TextBoxGreen>
                We want you to leverage our experience and avoid the mistakes that we’ve already made. We’re not just skilled editors – we’re a team of scholars, storytellers, strategists, copywriters, designers, and marketers. We focus on your brand’s personality and your audience’s wants and needs to create customized videos that help you hit your
                  </Styled.TextBoxGreen>
              </Styled.Container>
            </Styled.Weare>
            <Styled.SectionTestimonials>
              <Styled.Container>
                <Styled.HeadSection>
                  <Styled.TitleSectionHead>
                  TESTIMONIALS 
                  </Styled.TitleSectionHead>
                </Styled.HeadSection>
                <Styled.TitleWall>
                  <h1>Trusted by <br/> industry leaders</h1>
                </Styled.TitleWall>
                <Styled.TextWall>
                  <h6>FROM FEELING FRUSTRATED, TO CREATING CONTENT THAT ELEVATES THEIR INFLUENCE AND IMPACT.</h6>
                </Styled.TextWall>
              </Styled.Container>
            </Styled.SectionTestimonials>
            <Styled.SectionProducer>
              <Styled.ContainerCarousel>
                <OwlCarousel  options={options} >
                  <Styled.BoxProducer>
                    <Styled.ImageProducer>
                      <img src={Person} alt="Mocs"/>
                    </Styled.ImageProducer>
                    <Styled.BoxInfoProducer>
                      <Styled.BoxNameProducer>
                        <h2>Chris Do</h2>
                      </Styled.BoxNameProducer>
                      <Styled.ResumeProducer>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam similique molestias neque hic sint fuga impedit quis, illum fugiat iure tempora soluta asperiores ab.</p>
                      </Styled.ResumeProducer>
                      <Styled.FunctionProducer>
                        <h6>Emmy Award Winning Director</h6>
                      </Styled.FunctionProducer>
                    </Styled.BoxInfoProducer>
                  </Styled.BoxProducer>
                  <Styled.BoxProducer>
                    <Styled.ImageProducer>
                      <img src={Person2} alt="Mocs"/>
                    </Styled.ImageProducer>
                    <Styled.BoxInfoProducer>
                      <Styled.BoxNameProducer>
                        <h2>Melinda Livsey</h2>
                      </Styled.BoxNameProducer>
                      <Styled.ResumeProducer>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam similique molestias neque hic sint fuga impedit quis, illum fugiat iure tempora soluta asperiores ab.</p>
                      </Styled.ResumeProducer>
                      <Styled.FunctionProducer>
                        <h6>CEO of Uncertified</h6>
                      </Styled.FunctionProducer>
                    </Styled.BoxInfoProducer>
                  </Styled.BoxProducer>
                  <Styled.BoxProducer>
                    <Styled.ImageProducer>
                      <img src={Person3} alt="Mocs"/>
                    </Styled.ImageProducer>
                    <Styled.BoxInfoProducer>
                      <Styled.BoxNameProducer>
                        <h2>Dain Walker</h2>
                      </Styled.BoxNameProducer>
                      <Styled.ResumeProducer>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam similique molestias neque hic sint fuga impedit quis, illum fugiat iure tempora soluta asperiores ab.</p>
                      </Styled.ResumeProducer>
                      <Styled.FunctionProducer>
                        <h6>CEO of Uncertified</h6>
                      </Styled.FunctionProducer>
                    </Styled.BoxInfoProducer>
                  </Styled.BoxProducer>
                  <Styled.BoxProducer>
                    <Styled.ImageProducer>
                      <img src={Person4} alt="Mocs"/>
                    </Styled.ImageProducer>
                    <Styled.BoxInfoProducer>
                      <Styled.BoxNameProducer>
                        <h2>Erik Korem</h2>
                      </Styled.BoxNameProducer>
                      <Styled.ResumeProducer>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam similique molestias neque hic sint fuga impedit quis, illum fugiat iure tempora soluta asperiores ab.</p>
                      </Styled.ResumeProducer>
                      <Styled.FunctionProducer>
                        <h6>CEO of Victory Front</h6>
                      </Styled.FunctionProducer>
                    </Styled.BoxInfoProducer>
                  </Styled.BoxProducer>
                  <Styled.BoxProducer>
                    <Styled.ImageProducer>
                      <img src={Person5} alt="Mocs"/>
                    </Styled.ImageProducer>
                    <Styled.BoxInfoProducer>
                      <Styled.BoxNameProducer>
                        <h2>Neel Dhingra</h2>
                      </Styled.BoxNameProducer>
                      <Styled.ResumeProducer>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam similique molestias neque hic sint fuga impedit quis, illum fugiat iure tempora soluta asperiores ab.</p>
                      </Styled.ResumeProducer>
                      <Styled.FunctionProducer>
                        <h6>Real Estate Investor</h6>
                      </Styled.FunctionProducer>
                    </Styled.BoxInfoProducer>
                  </Styled.BoxProducer>
                  </OwlCarousel>
              </Styled.ContainerCarousel>
            </Styled.SectionProducer>
            <Styled.SectionBrands>
              <Styled.Container>
                <Styled.BoxBrands>
                  <Styled.ImageBrands>
                    <img src={BrandsImage} alt="Mocs"/>
                  </Styled.ImageBrands>
                </Styled.BoxBrands>
              </Styled.Container>
            </Styled.SectionBrands>
        </>
    );
}

export default Home;