import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';
import './App.css';
import BlogPage from './pages/BlogPage';
import BlogDetail from './components/blog/BlogDetail';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/forgot" component={ForgotPasswordPage} />
      <Route path="/blogs" component={BlogPage} />
      <Route path="/blogd" component={BlogDetail} />
    </Switch>
  );
}

export default App;
