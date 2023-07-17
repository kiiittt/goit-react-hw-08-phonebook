import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// import { useAuth } from 'redux/auth/useAuth';
import RegisterPage from './Register/Register';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/Login';


// const RegisterPage = lazy(() =>
//   import('../pages/RegisterPage')
// );
// const ContactsPage = lazy(() =>
//   import('../pages/ContactsPage')
// );

// const LoginPage = lazy(() =>
//   import('../pages/Login')
// );

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const { isRefreshing, error } = useAuth();

  // console.log('isRefreshing', isRefreshing);
  // console.log('error', error);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
