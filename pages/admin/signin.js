import { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { handleLogin } from '../../utils/auth';
import axios from 'axios';
import Link from 'next/link';
import catchErrors from '../../utils/catchErrors';
import baseUrl from '../../utils/baseUrl';

const INITIAL_USER = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [user, setUser] = useState(INITIAL_USER);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const onDismiss = () => setError(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url = `${baseUrl}/api/v1/auth/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data);
      setLoading(false);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className='login-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='login-content'>
                <h2>Login</h2>
                {error ? (
                  <Alert
                    variant='danger'
                    show={error ? true : false}
                    onClose={onDismiss}
                  >
                    {error}
                  </Alert>
                ) : (
                  ''
                )}

                <form className='login-form' onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='demo@example.com'
                      name='email'
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='demo'
                      name='password'
                      value={user.password}
                      onChange={handleChange}
                    />
                  </div>

                  <button type='submit' className='default-btn'>
                    Login
                    {loading ? (
                      <Spinner
                        color='success'
                        className='product-spinner'
                        animation='border'
                        size='sm'
                      />
                    ) : (
                      ''
                    )}
                  </button>

                  <div className='text-center'>
                    <Link href='/forgot-password'>
                      <a className='forgot-password'>Lost your password?</a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
