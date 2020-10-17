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
          <WelcomeContainerFront/>
          <WelcomeContainerBack/>
        </WelcomeArea>
      </Pls>
      <LatestPostsContainer/>
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
`;

