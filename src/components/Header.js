import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'
import {
  Link
} from "react-router-dom";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <Link to="/"><img src="/images/logo.svg" alt="logo" /></Link>
      <Menu>
        {cars && cars.map((car, index) => (
          <Link key={index} to="/cars">{car}</Link>

        ))}

      </Menu>
      <RightMenu>
        <Link to="/tp">
          Shop</Link>
        <Link to="/">Tesla Account</Link>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
          <li key={index}><Link to="/">{car}</Link></li>
        ))}

        <li><Link to="/">Used Invenhrefry</Link></li>
        <li><Link to="/">Trade-in</Link></li>
        <li><Link to="/">Cybertruck</Link></li>
        <li><Link to="/">Roadster</Link></li>

      </BurgerNav>


      {/* <Route path="/shop">

          </Route> */}
      {/*<Route path="/">
            <TeslaAccount />
          </Route>
          <Route path="/">
            <UsedInvenhrefry />
          </Route>
          <Route path="/">
            <TradeIn />
          </Route>
          <Route path="/">
            <Cybertruck />
          </Route>
          <Route path="/">
            <Roadster />
          </Route> */}
    </Container>
  )
}


// function TeslaAccount() {
//   return <h2>TeslaAccount</h2>
// }
// function UsedInvenhrefry() {
//   return <h2>UsedInventory</h2>
// }
// function TradeIn() {
//   return <h2>TradeIn</h2>
// }
// function Cybertruck() {
//   return <h2>Cybertruck</h2>
// }
// function Roadster() {
//   return <h2>Roadster</h2>
// }


export default Header

const Container = styled.div`
  min-height: 3.75rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0.625rem;
    flex-wrap: nowrap;
  };

  @media(max-width: 768px){
    display: none;
  };
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin: 0.625rem;
  }

`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 18.75rem;
  z-index: 100;
  padding:  1.25rem;
  transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform 0.2s ;
  li{
    list-style: none;
    padding: 0.9375rem;
    border-bottom: 1px solid rgba(0, 0, 0, .2)
  }
  a{
    font-weight: 500;
  }
`

const CustomClose = styled(CloseIcon)`
  
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  `