import React, { useEffect, useState} from 'react'
import gettingin from "./assets/gettingin.jpg"
import styled from "styled-components"
import NavBarCommon from "./NavBar_Common";
function About(){
    return (
        <div>
          <NavBarCommon />
          <Section id="hero">
            <div className="background">
              <img src={gettingin} alt="" />
            </div>
            <div className="content">
              <div className="title">
                <h1>ABOUT US</h1>
                <p>
                  RideShare makes travel more convinient and affordable to the users.
                  If you are travelling with a few empty seats, we will try to make your trip a bit profitable
                  by finding you some good company.
                </p>
              </div>
            </div>
          </Section>
        </div>
  );
}

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  .background {
    img {
      height: 15%;
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        margin-top: 0rem;
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 15vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
  }
`;

export default About;
