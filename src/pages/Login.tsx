import { useState } from 'react'
import LoginForm from '../components/LoginForm';
import VerificationCode from './TwoFa';

const Login = () => {
  const [email, setEmail] = useState("");
  const [isVerify, setIsVerify] = useState(false);
  return (
    <>
    {(!isVerify)? <LoginForm setEmail={setEmail} setIsVerify={setIsVerify}/>:<VerificationCode email={email}/>}
    </>
  )
}

export default Login