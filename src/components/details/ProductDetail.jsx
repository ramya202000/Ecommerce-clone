import { Typography,Box,styled,Table,TableBody,TableRow,TableCell } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';


const SmallText = styled(Box)`
        font-size:14px;
        vertical-align:base-line;
        & > p {
            font-size:14px;
            margin-top:10px;
            
        }
`;

const StyledBadge = styled(Badge)`
        margin-right:10px;
        color:#00cc00;
        font-size:15px;
        margin-left:10px;
`;

const ColumnText = styled(TableRow)`
        font-size:14px;
        vertical-align:baseline;
        & > td {
            font-size:14px;
            margin-top:10px;
            border:none;
        }

`;
const ProductDetail = ({product}) => {
    

    
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    return (
            <>
                 <Typography style={{marginLeft:10}}>{product.title.longTitle}</Typography>
                                    <Typography style={{margintop:5 ,color:'#878787',fontSize:14,marginLeft:10}}>
                                        8 Ratings and 1 Reviews
                                        
                                    </Typography>
                                    <Typography>
                                        <Box component="span" style={{fontSize:28,marginLeft:10}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                        <Box component="span" style={{color:'#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                                        <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>&nbsp;&nbsp;&nbsp;
                </Typography>
                <Typography style={{marginLeft:10}}>Available Offers</Typography>
                <SmallText>
                    <Typography><StyledBadge/>Get extra 20% offer upto 50 on 1 item(s) T&C</Typography>
                    <Typography><StyledBadge/>Get extra 2% off (price inclusive of cashback/coupon)</Typography>
                    <Typography><StyledBadge/>Buy this product and get upto ₹500 off on Flipkart Furniture</Typography>
                    <Typography><StyledBadge/>Purchase now & get a surprise cashback coupon for January / February 2023</Typography>
                    <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                    <Typography><StyledBadge/>Buy this product and get upto ₹500 off on Flipkart Furniture</Typography>
                </SmallText>
                <Table>
                    <TableBody>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                            <TableCell style={{fontWeight:600}}>Deliverd By {date.toDateString()} | ₹40</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Warrenty</TableCell>
                            <TableCell>No Warrenty</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Seller</TableCell>
                            <TableCell>
                                <Box component="span" style={{color:'#2874f0'}}>Super ComNet</Box>
                                <Typography>GST Invoice Available</Typography>
                                <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                            </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </ColumnText>
                    </TableBody>
                </Table>
            </>
    )
}

export default ProductDetail;