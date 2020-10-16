import React from "react";
import { Global, css, connect, styled, Head } from "frontity";



const Homepage = ({ state }) => {

  const data = state.source.get(state.router.link);

  return (
    <>
      <HeaderText src={"http://5zq.7eb.myftpupload.com/wp-content/uploads/2020/10/DemiBangHorizontalLogo_Grey-1.png"}/>
      <HeaderPhoto src={"http://5zq.7eb.myftpupload.com/wp-content/uploads/2020/10/Rephresh-v2-2-scaled.jpg"}/>
      <HeaderContainer/>
      
        <WelcomeText src={"http://5zq.7eb.myftpupload.com/wp-content/uploads/2020/10/Welcome-1.png"}/>
        <WelcomePhoto src={"http://5zq.7eb.myftpupload.com/wp-content/uploads/2020/10/IMG_8903-1-scaled.jpg"}/>
        <WelcomeContainerFront/>
        <WelcomeContainerBack/>
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
margin-top:970px;
left: 800px;


`;

const WelcomeContainerFront = styled.div`
background-color: #f0eceb;
width: 700px;
margin-top: 1000px;
height: 600px;
right: 100px;
position: absolute;
z-index: 3;
`;

const WelcomeContainerBack = styled.div`
background-color: #d2b7ae;
width: 700px;
margin-top: 1020px;
height: 600px;
right: 80px;
position: absolute;
z-index: 2;
`;

const WelcomePhoto = styled.img`
  height: 80%;
  left: 100px;
  margin-top: 900px;
  position: absolute;
`;

const WelcomeArea = styled.div`
  height: 95%;
  left: 100px;
  margin-top: 800px;
  position: absolute;
`;

