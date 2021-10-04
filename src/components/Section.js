import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';




function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (

    <Wrap bgImg={backgroundImg}>


      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        <Buttons>

          <ButtonGroup>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {rightBtnText &&
              <RightButton>
                {rightBtnText}
              </RightButton>

            }

          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" alt="Arrow" />
        </Buttons>
      </Fade>
    </Wrap >
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: orange;
  // background-image: url(/images/model-s.jpg);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImg}")`}

`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 1.875rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`

const LeftButton = styled.div`
  background-color: rgba(32,26,32,0.8);
  height: 2.5rem;
  width: 16rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;
  margin: 0.5rem;
`

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  height: 2.5rem;
  display: block;
  margin: 0rem auto 0.5rem auto;
  animation: animateDown infinite 1.5s;

`

const Buttons = styled.div`

`