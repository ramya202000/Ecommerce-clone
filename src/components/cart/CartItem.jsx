import { Box, Typography,styled, Button } from "@mui/material";
import { removeFromCart } from "../../redux/actions/cartActions";
import { addEllipsis } from "../../utils/common-utils";
import ButtonGroup from "./ButtonGroup";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
        border-top:1px solid #f0f0f0;
        display :flex;
        background:#fff;
`;
const LeftCompoennt = styled(Box)`
    margin:20px;
    display:flex;
    flex-direction:column;
`;
const SmallText = styled(Typography)`
    color:#878787;
    font-size:14px;
    margin-top:10px;
    margin-left:5;
`;

const Remove = styled(Button)`
    margin-top:20px;
    font-size:16px;
    color:#000;
    font-weight:600;
`;

const CartItem = ({item}) => {
    
    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <Component>
            <LeftCompoennt>
                    <img src={item.url} style={{height:110,width:110}}  alt="product"/>
                    <ButtonGroup/>
            </LeftCompoennt>
            <Box style={{margin:20}}>
                    <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                    <SmallText>
                            Seller:RetailNet
                            
                    </SmallText>
                    <Typography style={{margin:'20px 0'}}>
                                        <Box component="span" style={{fontWeight:600,fontSize:18,marginLeft:10}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                        <Box component="span" style={{color:'#878787'}}><strike>{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                                        <Box component="span" style={{color:'#388E3C'}}>{item.price.discount}</Box>&nbsp;&nbsp;&nbsp;
                    </Typography>
                    <Remove onClick={() => removeItemFromCart(item.id)}>REMOVE</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;