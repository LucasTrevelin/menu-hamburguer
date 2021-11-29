import styled from 'styled-components'

interface BurguerLineProps {
  open: boolean
}

export const MenuButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all ease-in-out .5s ;
  border: 3px solid black;
  background-color: white;
`
export const BurguerLine = styled.div<BurguerLineProps>`
width: 50px;
height: 6px;
background: ${({open}) => open ? 'transparent' : 'black'};
border-radius: 5px;
box-shadow: ${({open}) => open ? 'none' : '0 2px 5px rgba(255,101,47,.2)'};
transition: all ease-in-out .5s ;
transform: ${({open}) => open && 'translateX(-50px)'};

&::before, &::after{
content: '';
position: absolute;
width: 50px;
right: 12px;
height: 6px;
background: black;
border-radius: 5px;
box-shadow: 0 2px 5px rgba(255,101,47,.2);
transition: all ease-in-out .5s ;

}

&::before {
  transform: translateY(-16px);
  transform: ${({open}) => open && 'rotate(45deg) translate(42.5px,-42.5px)'};
}

&::after {
  transform: translateY(16px);
  transform: ${({open}) => open && 'rotate(-45deg) translate(45px,45px)'};
}



`