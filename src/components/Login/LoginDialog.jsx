import { useState,useContext } from 'react';
import { Dialog,Box,TextField,Typography,Button,styled } from '@mui/material';
import { authenticateSignup,authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
        height:70vh;
        width:90vh;

`;

const LoginButton = styled(Button)`
        text-transform:uppercase;
        background:#FB6416;
        color:#ffffff;
        height:48px;
        border-radius:2px;
`;

const RequestOtp = styled(Button)`
        text-transform:uppercase;
        background:#fff;
        color:#2874f0;
        height:48px;
        border-radius:2px;
        box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
        font-size:12px;
        color:#878787;
`;

const Image = styled(Box)`
        background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
        height:83%;
        width:28%;
        padding:45px 35px;
        & > p, & > h5 {
            color:#ffffff;
            font-weight:bold;
        }
`;


const CreateAccount = styled(Typography)`
            font-size:13px;
            color:#2874f0;
            text-align:center;
            font-weight:600;
            cursor:pointer;
`;
const Wrapper = styled(Box)`
        display:flex;
        flex-direction:column;
        padding : 25px 25px;
        flex : 1;
        & > div, & > Button, & > p {
            margin-Top: 20px;
        }
`;

const Error = styled(Typography)`
        font-size:10px;
        color:#ff6161;
        line-height:0;
        margin-top:10px;
        font-weight:600;
`; 

const accountInitialValues = {
        login: {
            view : 'login',
            heading:"Login",
            subheading:"Get access to your Orders, Wishlist and Recommandations"
        },
        signup: {
            view:'signup',
            heading:'Looks like youre new here',
            subheading:"Signup with your mobile number to get started"
        }

    }

    const signupIntitialValues = {
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:'',
        phone:''
    }

const loginInitialValues = {
    username:'',
    password:''
}


const LoginDialog = ({ open, setOpen }) => {


    const [account,toggleAccount]  = useState(accountInitialValues.login);
    const [signup,setSignup] = useState(signupIntitialValues);
    const {setAccount} = useContext(DataContext);
    const [login,setlogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
        
    }

    const onInputChange = (e) => {
        setSignup({ ...signup,[e.target.name]:e.target.value });
        
    }

    const signupUser = async () => {
      let response = await authenticateSignup(signup);
      if(!response) return ;
      handleClose();
      setAccount(signup.firstname);
    }

    const onValueChange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value});
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if (response.status === 200)
        {
            handleClose();
            setAccount(response.data.data.firstname);
        }
        else{
            setError(true);
        }
    } 


        return (
        <Dialog open={ open } onClose={handleClose} PaperProps={{sx: { maxWidth:'unset' }}}>
                <Component>
                    <Box style={{display:'flex',height:'100%'}}>
                        <Image>
                            <Typography varient="h5">{account.heading}</Typography>
                            <Typography style={{marginTop:20}}>{account.subheading}</Typography>
                        </Image>
                    { account.view === 'login' ?
                        <Wrapper>
                            <TextField varient="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter username"/>
                            {error && <Error>Please enter valid username or password</Error> }
                            <TextField varient="standard" onChange={(e) => onValueChange(e)} name="password" label="Enter Password"/>
                            <Text>By continuning ,you agree to flicart's terms of use and privacy policy</Text>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Typography style={{textAlign:'center'}}>OR</Typography>
                            <RequestOtp>Request OTP</RequestOtp>
                            <CreateAccount onClick={() => toggleSignup()}>New to flipcart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField varient="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname"/>
                            <TextField varient="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname"/>
                            <TextField varient="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter username"/>
                            <TextField varient="standard" onChange={(e) => onInputChange(e)} name="email"label="Enter Email"/>
                            <TextField varient="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password"/>
                            <TextField varient="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter phone"/>
                            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        </Wrapper>
                        }
                    </Box>
                </Component>
        </Dialog>
    )
}

export default LoginDialog;