// packages
import React from 'react';
import styled from 'styled-components';
import { sanitizeHtml } from 'method';
import * as color from 'constants/colors';
import Construction from 'assets/construction.jpeg';

const StyledUpper = styled.div`
  width: 100%;
  background-color: ${color.LIGHT_GREY_COLOR};
  display: flex;
  flex-direction: row;
  @media (max-width: 1023px) {
    align-items: center;
    justify-content: flex-end;
    flex-direction: column-reverse;
  }
`;

const StyledDownner = styled.div`
  width: 100%;
  background-color: ${color.DEFAULT_YELLOW};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.FONT_BLUE_COLOR};
  border-bottom: solid 1px #dcdcdc;
`;

const StyledUpperLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  @media (max-width: 1023px) {
    flex: none;
  }
`;

const StyledUpperRight = styled.div`
  display: flex;
  flex: 1;
`;

const StyledImg = styled.img`
  height: 680px;
  width: 680px;
  @media (max-width: 1023px) {
    margin: 15px 0px;
    display: block;
    flex: none;
  }
  @media (max-width: 680px) {
    height: 500px;
    width: 400px;
  }
  @media (max-width: 400px) {
    height: 300px;
    width: 350px;
  }
  @media (max-width: 350px) {
    height: 200px;
    width: 300px;
  }
`;

const StyledUpperLeftContent1 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

const StyledUpperLeftContent = styled.div`
  display: flex;
  flex: 1.25;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
`;

const StyledTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 50px 0px 40px 0px;
  @media (max-width: 1023px) {
    justify-content: center;
    align-items: center;
  }
`;

const StyledTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  color: ${color.DEFAULT_BACKGROUND};
  margin: 10px;
  font-weight: 600;
  letter-spacing: 0.05em;
  @media (max-width: 768px) {
    font-size: 45px;
  }
  @media (max-width: 400px) {
    font-size: 35px;
  }
`;

const StyledHr = styled.div`
  width: 116px;
  height: 5px;
  color: ${color.DEFAULT_BACKGROUND};
  background-color: ${color.DEFAULT_BACKGROUND};
  border: 1px solid ${color.DEFAULT_BACKGROUND};
  margin: 10px;
`;

const StyledUpperLeftContentInner = styled.div`
  color: ${color.DARK_BLUE_COLOR};
  line-height: 1.7em;
  font-size: 17px;
  margin: 10px 40px 0px 10px;
  @media (max-width: 1023px) {
    margin: 0px 40px 40px 40px;
  }
`;

const StyledDownnerInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    width: 140px;
  }
`;

const StyledDownnerInnerWrap = styled.div`
  display: flex;
  flex: ${(props) => (props.noFlex ? '1' : 'none')};
  justify-content: center;
  align-items: center;
  margin: 8px 0px;
  @media (max-width: 1023px) {
    flex: none;
    width: 150px;
    margin: 8px 0px;
  }
`;

const StyledDownnerNumber = styled.div`
  font-size: 60px;
  font-weight: 300;
  color: ${color.DEFAULT_BACKGROUND};
  @media (max-width: 1023px) {
    font-size: 40px;
  }
`;

const StyledDownnerText = styled.div`
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5em;
  text-align: center;
  font-weight: 300;
  color: ${color.DEFAULT_BACKGROUND};
`;

const StyledDownnerOuter = styled.div`
  max-width: 1024px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  @media (max-width: 1023px) {
    width: 300px;
    flex-wrap: wrap;
  }
`;

const paragraph = `
GenOptiMizE strives to expand pharmacogenomic testing accessibility, optimize individual drug therapies, and streamline healthcare through a personalized and proactive approach to medicine. 
<br>
<br>
To bring pharmacogenomics services into the mainstream healthcare system as a standard of practice and transform our health care system from one that is reactive to proactive.
`;

const data = [
  {
    number: 2023,
    name: 'Year<br>Established',
  },
  {
    number: 4,
    name: 'Hospitals<br>Contracted',
  },
  {
    number: 9,
    name: 'Pharmacies<br>Contracted',
  },
];

function About(props: { isMobile: boolean }): JSX.Element {
  const { isMobile } = props;
  return (
    <>
      <StyledUpper id="about">
        <StyledUpperLeft>
          {!isMobile && <StyledUpperLeftContent1 />}
          <StyledUpperLeftContent>
            <StyledTitleWrap>
              <StyledTitle>ABOUT</StyledTitle>
              <StyledHr />
            </StyledTitleWrap>

            <StyledUpperLeftContentInner
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(paragraph) }}
            />
          </StyledUpperLeftContent>
        </StyledUpperLeft>

        <StyledUpperRight>
          <StyledImg src={Construction} alt="about" />
        </StyledUpperRight>
      </StyledUpper>

      <StyledDownner>
        <StyledDownnerOuter>
          {data.map((val, key) => (
            <StyledDownnerInnerWrap key={key} noFlex={key !== 3}>
              <StyledDownnerInner>
                <StyledDownnerNumber>{val.number}</StyledDownnerNumber>
                <StyledDownnerText dangerouslySetInnerHTML={{ __html: sanitizeHtml(val.name) }} />
              </StyledDownnerInner>
            </StyledDownnerInnerWrap>
          ))}
        </StyledDownnerOuter>
      </StyledDownner>
    </>
  );
}

export default About;
