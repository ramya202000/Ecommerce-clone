
import { Box,Button,styled } from '@mui/material';
import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/Paytm';
const LeftContainer = styled(Box)(({theme}) => ({
    minwidth:'40%',
    padding:'40px 0 0 80px',
    [theme.breakpoints.down('lg')]:
    {
        padding:'20px 40px'
    }
}));



const Image = styled('img')({
    padding:'15px',
    width:'90%'
});

const StyledButton = styled(Button)(({theme}) => ({
    width:'48%',
    height:50,
    borderRadius:2,
    [theme.breakpoints.down('md')]:
    {
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:
    {
        width:'48%'
    }
}));



const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity] = useState(1);
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(id,quantity));
        navigate('/cart'); 
    }

    const buyNow = async() => {
        let response = await payUsingPaytm({ amount:500,email:'nithishs829@gmail.com'});
        let information = {
            action:'https://securegw-stage.paytm.in/order/process',
            params:response
        }
        post(information);
    }

    return (
        <LeftContainer>
            <Box style={{    padding:'15px 20px', border:'1px solid #f0f0f0'}}>
            <Image src={product.url} alt="detailimage"/>
            </Box>
            <StyledButton varient='contained' onClick={() => addItemToCart()} style={{marginRight:10,background:'#2d3138',color:'#ffffff'}}><Cart/>Add to Cart</StyledButton>
            <StyledButton varient='contained' style={{background:'#1b1d21',color:'#ffffff'}} onClick={() => buyNow()}><Flash/>Buy Now</StyledButton>
        </LeftContainer>
    )
}


export default ActionItem;