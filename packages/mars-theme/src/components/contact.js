import React from "react";
import { Global, css, connect, styled, Head } from "frontity";



const Contact = ({ state, libraries }) => {

  const data = state.source.get(state.router.link);
  let a = async () => {await libraries.source.api.get({endpoint: "posts"})}
  a().then(x => console.log(x))

  return (
    <>
      <HeaderText src={"http://5zq.7eb.myftpupload.com/wp-content/uploads/2020/10/DemiBangHorizontalLogo_Grey-1.png"}/>
      <HeaderPhoto src={"http://5zq.7eb.myftpupload.com/wp-content/uploads/2019/12/DB-3-scaled.jpg"}/>
      <HeaderContainer/>

      <ContactContainer>
        <ContactTextContainer>
          <ContactTitle>CONTACT ME</ContactTitle>
          <ContactText>Please fill out the form or send an email<br></br> directly to demi@demibang.com</ContactText>
          <SnailMailTitle>SNAIL MAIL</SnailMailTitle>
          <SnailMailText>112 N Central Ave<br></br>Phoenix, AZ 85004</SnailMailText>

        </ContactTextContainer>
        <ContactFormContainer>

          <ContactInput type={"text"} name={"name"} placeholder={"NAME"}/>

          <ContactInput type={"email"} name={"name"} placeholder={"EMAIL"}/>

          <ContactInput type={"email"} name={"name"} placeholder={"SUBJECT"}/>

          <ContactMessageInput type={"text"} name={"name"} placeholder={"MESSAGE"}/>
        <ContactButtonInput type={"submit"} value={"SUBMIT"} />
        </ContactFormContainer>
      </ContactContainer>
  
      <LatestPostsTitle>INTERESTED IN WORKING WITH ME?</LatestPostsTitle>
      <LatestPostsContainer/>
      <FeaturedInTitle>FEATURED IN</FeaturedInTitle> 
      <FeaturedInContainer><FeaturedPhoto src={"http://5zq.7eb.myftpupload.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-20-at-3.58.25-PM.png"}/></FeaturedInContainer>

      <PartnershipsTitle>PARTNERSHIPS</PartnershipsTitle>
      <PartnershipsContainer>
        <PartnershipsListContainer>
          <Partnerships1>BIORE<br></br>HOME DEPOT<br></br>ELLIE ACTIVEWEAR<br></br>TRIP ADVISOR<br></br>HARPER WILDE<br></br>GLOSSIER<br></br>THE HOME DEPOT<br></br>GORJANA<br></br>COLOURPOP<br></br>THE BODY SHOP<br></br>GHOST BED<br></br>COLOR ME MINE<br></br>OLAY</Partnerships1>
          <Partnerships2>CAREFREE<br></br>SUMMER'S EVE<br></br>RENUZIT<br></br>FRY'S FOOD<br></br>WHOLE FOODS<br></br>SHOEDAZZLE<br></br>GOT2b<br></br>VICTORIA'S SECRET<br></br>TOLL BROTERS<br></br>KROGER<br></br>ADIDAS<br></br>COTTONELLE<br></br>VIVA TOWELS</Partnerships2>
          <Partnerships3>EXPRESS<br></br>ULTA BEAUTY<br></br>LOVE WELLNESS<br></br>SHOEDAZZLE<br></br>GILLETTE VENUS<br></br>COORS<br></br>KRETSCHMAR DELI<br></br>CUROLOGY<br></br>ALMAY<br></br>LISTERINE<br></br>SONIC<br></br>REPHRESH<br></br>WRANGLERS</Partnerships3>
          
        </PartnershipsListContainer>
      </PartnershipsContainer>

      
      
      <SubscribeContainer>
        <WorkTitle>I CAN'T WAIT TO WORK WITH YOU!</WorkTitle>
        <Line></Line>
          <SubscribeTitle>SUBSCRIBE TO MY NEWSLETTER</SubscribeTitle>
        <SubscribeForm>
          <SubscribeLabel>
            <SubscribeInput type={"text"} name={"name"} placeholder={"FIRST NAME"}/>
          </SubscribeLabel>
          <SubscribeLabel>
            <SubscribeInput type={"email"} name={"name"} placeholder={"EMAIL"}/>
          </SubscribeLabel>
          <SubscribeButtonInput type={"submit"} value={"SUBSCRIBE!"} />
        </SubscribeForm>
      </SubscribeContainer>
    </>
  );
};

export default connect(Contact);

const PartnershipsContainer = styled.div`
position: absolute;
background-color: #f0eceb;
width: 100%;
height: 620px;
top: 2700px;
z-index: 1;
`;
const Partnerships1 = styled.p`
line-height: 1.6;
letter-spacing: 2px;
font-size: 20px;
`;
const Partnerships2 = styled.p`
line-height: 1.6;
letter-spacing: 2px;
font-size: 20px;
`;
const Partnerships3 = styled.p`
line-height: 1.6;
letter-spacing: 2px;
font-size: 20px;
`;
const PartnershipsListContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 50px;

`;

const PartnershipsTitle = styled.p`
  font-family: elgocthin;
  position: absolute;
  top: 2638px;
  left: 10%;
  z-index: 900;
  font-size: 40px;
  letter-spacing: 4px;
  color: #322B28;
`;

const FeaturedInContainer = styled.div`
position: absolute;

width: 100%;
height: 70%;
display: flex;
flex-direction: row;
justify-content: center;
top: 210%;
margin: auto;
`;

const FeaturedPhoto = styled.img`
display: block;
margin: auto;
width: 800px;
`;

const FeaturedInTitle = styled.p`
  font-family: elgocthin;
  position: absolute;
  top: 2063px;
  left: 10%;
  z-index: 900;
  font-size: 40px;
  letter-spacing: 4px;
  color: #322B28;
`;

const ContactContainer = styled.div`
position: absolute;

width: 100%;
height: 70%;
display: flex;
flex-direction: row;
justify-content: center;
top: 100%;
margin: auto;
`;
const ContactTextContainer = styled.div`
padding-right: 20px

`;
const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 35px;
  

`;
const ContactTitle = styled.p`
font-family: elgocthin;
font-size: 30px;
  letter-spacing: 2px;
  color: #322B28;
  margin-bottom: -10px;
`;
const ContactText = styled.p`
color: #322B28;
padding-bottom: 40px;
`;
const SnailMailTitle = styled.p`
font-family: elgocthin;
font-size: 30px;
  letter-spacing: 2px;
  color: #322B28;
  margin-bottom: -10px;
`;
const SnailMailText = styled.p`
color: #322B28;
`;
const ContactInput = styled.input`
border: 2px solid #d1b6ad;
background-color: #f0eceb;
color: #8a766b;
padding: 5px;
width: 300px;
letter-spacing: 2px;
margin: 5px;
`;

const ContactMessageInput = styled.input`
border: 2px solid #d1b6ad;
background-color: #f0eceb;
color: #8a766b;
padding: 5px;
word-wrap: normal;
line-height: 100px;
letter-spacing: 2px;
margin: 5px;
`;
const ContactButtonInput = styled.input`
border: none;
background-color: transparent;
color: #8a766b;
padding: 10px;
font-size: 20px;
letter-spacing: 2px;
margin: 10px;

`;

const HeaderText = styled.img`
  z-index: 3;
  width: 60%;
  position: absolute;
  margin-top: 25px;
  margin-left: 20%;
  margin-right: 25%;
  margin-bottom: 10px;
  display: block;

`;

const HeaderPhoto = styled.img`
  width: 80%;
  z-index: 2;
  height: 60%; /* height of container */
  left: 10%;
  right: 10%;
  margin-top: 180px;
  object-fit: cover;
  position: absolute;
`;

const HeaderContainer = styled.div`
  position: absolute;
  background-color: #f0eceb;
  width: 100%;
  height: 50%;
  z-index: 1;
`;

const WelcomeText = styled.img`
position: absolute;
z-index: 10;
width: 350px;
top: 20px;
left: 400px;


`;

const WelcomeContainerFront = styled.div`
background-color: #f0eceb;
width: 600px;
top: 50px;
height: 500px;
left: 290px;
position: absolute;
z-index: 3;
`;

const WelcomeContainerBack = styled.div`
background-color: #d2b7ae;
width: 620px;
top: 70px;
height: 500px;
left: 290px;
position: absolute;
z-index: 2;
`;

const WelcomePhoto = styled.img`
  height: 600px;
  position: absolute;
  left: -110px;



`;

const WelcomeArea = styled.div`

position: absolute;
top: 100%;
z-index: 50;
`
const Pls = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
width: 800px;


`;

const LatestPostsContainer = styled.div`
  position: absolute;
  background-color: #f0eceb;
  width: 100%;
  height: 700px;
  top: 1425px;
  z-index: 1;
`;

const WelcomeBio = styled.p`
  width: 500px;
  z-index: 100;
  top: 100px;
  position: absolute;
  left: 350px;
  font-size: 19px;
  color: #322B28;
`;

const LatestPostsTitle = styled.p`
  font-family: elgocthin;
  position: absolute;
  top: 1360px;
  left: 10%;
  z-index: 10;
  font-size: 40px;
  letter-spacing: 4px;
  color: #322B28;
`;

const SubscribeContainer = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 60%;
  top: 350%;
  z-index: 1;
`;

const SubscribeTitle = styled.p`
  font-family: elgocthin;
  text-align: center;
  top: 1693px;
  padding-top: 20px;
  font-size: 40px;
  letter-spacing: 4px;
  color: #322B28;
`;

const SubscribeForm = styled.form`
  font-family: elgocthin;
  text-align: center;
  top: 1693px;
  padding-top: 20px;
  font-size: 40px;
  letter-spacing: 4px;
  color: #322B28;
`;

const SubscribeLabel = styled.label`

  
`;

const SubscribeInput = styled.input`
border: 2px solid #d1b6ad;
background-color: #f0eceb;
color: #8a766b;
padding: 10px;
width: 20%;
letter-spacing: 2px;
margin: 10px;

`;

const SubscribeButtonInput = styled.input`
border: none;
background-color: transparent;
color: #8a766b;
padding: 10px;
font-size: 20px;
letter-spacing: 2px;
margin: 10px;

`;

const WorkTitle = styled.p`
  font-family: elgocthin;
  text-align: center;
  top: 1693px;
  padding-top: 20px;
  font-size: 40px;
  letter-spacing: 4px;
  color: #322B28;
`;

const Line = styled.hr`
margin-top: 50px;
margin-bottom: 50px;
border: 1px solid #d1b6ad;
text-align: center;
width: 650px;
`;

