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
                  Multiplicamos seu conteúdo.
                  </Styled.TitleOver>
                  <Styled.TitleWhite>
                  Transformando 1 vídeo em 1 mês de conteúdo.
                  </Styled.TitleWhite>
                  <Styled.Subtitle>
                  Elaboramos vídeos sociais saborosos, em tamanho de mordida, que são contextuais a cada plataforma para que você crie ventiladores e faça massa.
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
                  AGENDE UMA CHAMADA
                  </Styled.TitleSection>
                </Styled.Title>
                <Styled.BoxNumber>
                  <Styled.BoxNumbers>
                    <Styled.TitleNumber>
                        100+
                    </Styled.TitleNumber>
                    <Styled.SubtitleNumbers>
                      VIDEOS <br /> CRIADOS
                    </Styled.SubtitleNumbers>
                  </Styled.BoxNumbers>
                  <Styled.BoxNumbers>
                    <Styled.TitleNumber>
                        1M +
                    </Styled.TitleNumber>
                    <Styled.SubtitleNumbers>
                      <br /> VIEWS
                    </Styled.SubtitleNumbers>
                  </Styled.BoxNumbers>
                  <Styled.BoxNumbers>
                    <Styled.TitleNumber>
                        3+
                    </Styled.TitleNumber>
                    <Styled.SubtitleNumbers>
                      MAIOR SOCIAL <br /> PLATAFORMAS COBERTAS
                    </Styled.SubtitleNumbers>
                  </Styled.BoxNumbers>
                  <Styled.BoxNumbers>
                    <Styled.TitleNumber>
                        7X
                    </Styled.TitleNumber>
                    <Styled.SubtitleNumbers>
                    ENGREGAMENTO <br /> CRESCIMENTO
                    </Styled.SubtitleNumbers>
                  </Styled.BoxNumbers>
                </Styled.BoxNumber>
              </Styled.Container>
            </Styled.SectionNumbers>
            <Styled.SectionProblem>
              <Styled.Container>
              <Styled.HeadSection>
                <Styled.TitleSectionHead>
                  O PROBLEMA
                </Styled.TitleSectionHead>
              </Styled.HeadSection>
              <Styled.TitleSectionProblem>
                <Styled.TitleProblem>
                Criando consistentemente vídeos
                <Styled.WordStyled>
                  é difícil
                </Styled.WordStyled>                
                </Styled.TitleProblem>
              </Styled.TitleSectionProblem>
              <Styled.SectionImgLogo>
                <Styled.BigLogo src={BigLogo} />
              </Styled.SectionImgLogo>
              <Styled.BoxTextProblem>
                <Styled.TextProblem>                  
                NO ENTANTO, EXISTEM CRIADORES DE VÍDEO PROLÍFICOS. COMO ELES SÃO CAPAZES DE FAZER ISSO?
                </Styled.TextProblem>
                <Styled.SubtextProblem>
                Você acredita no poder do marketing de conteúdo de vídeo. Você mesmo já fez vídeos. Mas agora você precisa de vídeos em overdrive sem ter que ser você quem os faz, foi aí que as coisas ficaram difíceis.
                </Styled.SubtextProblem>
              </Styled.BoxTextProblem>
              </Styled.Container>
            </Styled.SectionProblem>
            <Styled.SectionSymptoms>
              <Styled.Container>
              <Styled.HeadSection>
                <Styled.TitleSectionHead>
                SINTOMAS
                </Styled.TitleSectionHead>
              </Styled.HeadSection>
                <Styled.BoxContainer>
                  <Styled.BoxSym>
                    <Styled.TitleBoxSym>
                    Você não é uma babá.
                    </Styled.TitleBoxSym>
                    <Styled.TextBoxSym>
                    Você já contratou editores antes. Mas está gastando tanto tempo direcionando-os quanto gastaria fazendo o vídeo você mesmo. Um bom talento que entenda você e alivie esse fardo é difícil de encontrar e a busca parece interminável.
                    </Styled.TextBoxSym>
                  </Styled.BoxSym>
                  <Styled.BoxSym>
                    <Styled.TitleBoxSym>
                    Novas ideias são uma luta.
                    </Styled.TitleBoxSym>
                    <Styled.TextBoxSym>
                    Como uma agência que realiza filmagens, sabemos que novas ideias são uma luta constante. A indústria cinematográfica é um mundo competitivo e em constante evolução, e é essencial que estejamos sempre buscando maneiras de inovar e nos destacar.
                    </Styled.TextBoxSym>
                  </Styled.BoxSym>
                  <Styled.BoxSym>
                    <Styled.TitleBoxSym>
                    Vídeos não convertem.
                    </Styled.TitleBoxSym>
                    <Styled.TextBoxSym>
                    Como uma agência que realiza filmagens, sabemos que a conversão é a métrica mais importante para nossos clientes. Quando nossos clientes investem em vídeos, eles esperam obter um retorno sobre esse investimento, seja em forma de vendas, engajamento ou reconhecimento de marca. 
                    </Styled.TextBoxSym>
                  </Styled.BoxSym>
                </Styled.BoxContainer>
              </Styled.Container>
            </Styled.SectionSymptoms>
            <Styled.SectionSymptonsVersionTwo>
              <Styled.HeadSection>
                <Styled.TitleSectionHead>
                  SINTOMAS
                </Styled.TitleSectionHead>
              </Styled.HeadSection>
              <Styled.Container>
                <Styled.BoxContext>
                  <Styled.TitleBoxGreen>
                  Vídeos contextuais que constroem conexões e convertem.
                  </Styled.TitleBoxGreen>
                  <Styled.TextBoxGreen>
                  Imagine seus vídeos recebendo milhares de visualizações, aumentando seus seguidores e recebendo comentários e mensagens diretas pedindo sua ajuda. Oportunidades para ajudar mais pessoas, participar de programas e podcasts como convidado e vender seus produtos agora são uma ocorrência regular. Tudo isso é possível com conteúdo de vídeo contextual e um processo sistematizado para criá-los.
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
                  QUEM SOMOS
                  </Styled.TitleSectionHead>
                </Styled.HeadSection>
                <Styled.TitleWe>
                  <h1>Por que fazer tudo sozinho, quando podemos fazer isso por você.</h1>
                </Styled.TitleWe>
                <Styled.TextBoxGreen>
                Queremos que você aproveite nossa experiência e evite os erros que já cometemos. Não somos apenas editores habilidosos - somos uma equipe de estudiosos, contadores de histórias, estrategistas, redatores, designers e profissionais de marketing. Nosso foco é a personalidade da sua marca e as necessidades e desejos do seu público-alvo para criar vídeos personalizados que ajudam a alcançar seus objetivos.
                  </Styled.TextBoxGreen>
              </Styled.Container>
            </Styled.Weare>
            <Styled.SectionTestimonials>
              <Styled.Container>
                <Styled.HeadSection>
                  <Styled.TitleSectionHead>
                  NOSSA EQUIPE 
                  </Styled.TitleSectionHead>
                </Styled.HeadSection>
                <Styled.TitleWall>
                  <h1>Confiado por <br /> líderes da indústria.</h1>
                </Styled.TitleWall>
                <Styled.TextWall>
                  <h6>DE SE SENTIR FRUSTRADO A CRIAR CONTEÚDO QUE ELEVA SUA INFLUÊNCIA E IMPACTO.</h6>
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
                        <p>Um renomado diretor, produtor e roteirista americano. Ele dirigiu inúmeros filmes de sucesso.</p>
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
                        <p>Uma diretora e roteirista americana. Ela é mais conhecida por dirigir o filme Mulher-Maravilha, que foi um grande sucesso de bilheteria e ajudou a impulsionar a carreira dela.</p>
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
                        <p>Um diretor de fotografia britânico com mais de 35 anos de experiência em cinema. Ele já trabalhou em diversos filmes aclamados pela crítica, incluindo 1917, Blade Runner 2049 e Onde os Fracos Não Têm Vez.</p>
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
                        <p>Um diretor, produtor e roteirista americano que tem trabalhado no cinema há mais de 30 anos. Ele já dirigiu diversos filmes premiados, incluindo Faça a Coisa Certa e Malcolm X.</p>
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
                        <p>Um compositor de trilhas sonoras alemão que já trabalhou em mais de 150 filmes. Ele é conhecido por compor a música para filmes como O Rei Leão, Gladiador e A Origem.</p>
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