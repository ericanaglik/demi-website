import React from "react";
import { Global, css, connect, styled, Head } from "frontity";



const Homepage = ({ state, libraries }) => {

  const data = state.source.get(state.router.link);
  let a = async () => {await libraries.source.api.get({endpoint: "posts"})}
  a().then(x => console.log(x))

  return (
    <>
      <HeaderText src={"http://5zq.7eb.myftpupload.com/wp-content/uploads/2020/10/DemiBangHorizontalLogo_Grey-1.png"}/>
      <HeaderPhoto src={"http://5zq.7eb.myftpupload.com/wp-content/uploads/2020/10/Rephresh-v2-2-scaled.jpg"}/>
      <HeaderContainer/>
      <Pls>
        <WelcomeArea>
          <WelcomeText src={"http://5zq.7eb.myftpupload.com/wp-content/uploads/2020/10/Welcome-1.png"}/>
          <WelcomePhoto src={"http://5zq.7eb.myftpupload.com/wp-content/uploads/2020/10/IMG_8903-1-scaled.jpg"}/>
          <WelcomeBio>Hi! My name is Demi Bang and welcome to my blog! I'm an Arizona blogger and influencer that focuses primarily on beauty, college/career, and travel. I'm a recent Arizona State University graduate and documenting my journey as I navigate through adulthood. In addition to my blog and social media, I work as a marketing expert at my day job and a nail technician on the weekends. <br></br><br></br><br></br>

Aside from constantly working, I'm also a cat mom to a chunky Bombay cat named Henry. I love learning new things, working out, and hosting game nights with friends.
<br></br><br></br><br></br>
Don't forget to subscribe to my newsletter down below.</WelcomeBio>
          <WelcomeContainerFront/>
          <WelcomeContainerBack/>
        </WelcomeArea>
      </Pls>
      <LatestPostsTitle>LATEST POSTS</LatestPostsTitle>
      <LatestPostsContainer/>
      
      <SubscribeContainer><SubscribeTitle>SUBSCRIBE TO MY NEWSLETTER</SubscribeTitle>
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

export default connect(Homepage);

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
  height: 50%;
  top: 180%;
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
  top: 1640px;
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
  height: 40%;
  top: 230%;
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
  font-family: elgocthin;
  text-align: center;
  top: 1693px;
  padding-top: 20px;
  font-size: 40px;
  letter-spacing: 4px;
  color: #322B28;
  
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

