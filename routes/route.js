import express from  'express';
import { userSignUp,userLogin } from '../controller/user-controller.js';
// import { addItemInCart } from '../controller/cart-controller.js';
import { getProducts,getProductById } from '../controller/product-controller.js';
import { addPaymentGateway,paytmResponse } from '../controller/payment-controller.js';
const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login',userLogin);

router.get('/products',getProducts);
router.get('/products/:id',getProductById);
// router.post('/cart/add', addItemInCart);
router.post('/payment',addPaymentGateway);
router.post('/callback',paytmResponse);
export default router;