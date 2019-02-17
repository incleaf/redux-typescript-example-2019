import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { RootState } from './redux/store';
import { Dispatch } from 'redux';
import { UserActions } from './redux/userActions';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class App extends Component<Props> {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.isFetching ? 'Fetching...' : `Hello, ${this.props.userName}!`}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    userName: state.user.name,
    isFetching: state.user.isFetching
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchUser: () => {
      dispatch(UserActions.fetchProfileRequest());
      setTimeout(() => {
        dispatch(UserActions.fetchProfileSuccess({ name: 'Mark' }));
      }, 1500);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
