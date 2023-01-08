

import { useState } from 'react';
import { AppBar,Toolbar,Box,Drawer,Typography,List,ListItem,styled, IconButton } from '@mui/material';

import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
import {Menu}   from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
        background = #2874f0;
        height: 55px;
`;

const Component = styled(Link)`
        margin-left:12%;
        line-height:0;
        text-decoration:none;
        color:inherit;
`;


const CustomButtonapper = styled(Box)(({theme}) => ({
    margin : '0 5% 0 auto',
    [theme.breakpoints.down('md')]:
    {
        display:'none'
    }
}));


const MenuButton = styled(IconButton)(({theme}) => ({
        display:'none',
        [theme.breakpoints.down('md')]:
        {
            display:'block'
        }
}));



const Header = () => {

    const [open,setOpen] = useState(false);
    const handleOpen = () => {
            setOpen(true);
    }

    const handleClose = () => {
            setOpen(false);
    }
    const list = () => (
        <Box style={{width:200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <StyledHeader style={{background:'#000'}}>
            <Toolbar style={{ minheight:55 }}>
                <MenuButton color='inherit' onClick={handleOpen}>
                    <Menu/>
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to={'/'}>
                    <Typography style={{fontSize:15,fontStyle:'italic'}}>ECART</Typography>
                </Component>
                    <Search/>
                    <CustomButtonapper>
                        <CustomButtons/>
                    </CustomButtonapper>
            </Toolbar>
        </StyledHeader>
        )
}

export default Header;