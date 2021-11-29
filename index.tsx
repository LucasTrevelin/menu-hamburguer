import React, { useState } from 'react'
import { BurguerLine, MenuButton } from './styles'

export const MenuHamburguer : React.FC = () => {

    const [open, setOpen] = useState(false);
    return (
        <MenuButton onClick={() => {setOpen(!open)}}>
            <BurguerLine open={open} />
        </MenuButton>
    )
}