
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const user = res.data;
        console.log('Google User:', user);

        if (!user.email.endsWith('@nitc.ac.in')) {
          alert('Only @nitc.ac.in emails allowed');
          return;
        }

        // ✅ Redirect to Dashboard
        navigate('/dashboard');
      } catch (error) {
        console.error('Failed to fetch user info', error);
      }
    },
    onError: () => {
      console.error('Login Failed');
    },
  });

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => login()}>Login with Google</button>
    </div>
  );
};

export default Login;


