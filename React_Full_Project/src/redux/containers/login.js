import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { login } from '../actions/auth';

import LoginForm from '../../views/Pages/Login/';

class Login extends Component {
    transferToDashboardIfLoggedIn(){
        if (this.props.auth.user.token){
            this.props.history.push(this.props.from || { pathname: '/' });
        }
    }
    componentWillMount() {
        this.transferToDashboardIfLoggedIn();
    }
    componentDidUpdate() {
        this.transferToDashboardIfLoggedIn();
    }

    render() {
      const { auth, login } = this.props;

        return (
            <LoginForm auth={auth} login={login} />
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
    login:(info) => dispatch(login(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
