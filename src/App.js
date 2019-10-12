import React from 'react';
import './App.css';
import UserProfile from './components/userProfile';
import UserForm from './components/userForm';
import initialState from "./state/initialState";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userProfile: initialState,
    }

    this.actions = {
      handleName: val => this.setState({userProfile: {...this.state.userProfile, name: val.target.value}}),
      handleEmail: this.handleEmail,
      handleLocation: node => this.setState({userProfile: {...this.state.userProfile, location: node.target.value}}),
      handleDate: date => this.setState({userProfile: {...this.state.userProfile, accountInformation: {...this.state.userProfile.accountInformation, dob: date}}}),
      handlePhone: node => this.setState({userProfile: {...this.state.userProfile, contacts: {...this.state.userProfile.contacts, phone: node.target.value}}}),
      handleLink: node => this.setState({userProfile: {...this.state.userProfile, contacts: {...this.state.userProfile.contacts, link: node.target.value}}}),
      handleBio: node => this.setState({userProfile: {...this.state.userProfile, accountInformation: {...this.state.userProfile.accountInformation, bio: node.target.value}}}),
      handleLogo: logo => this.setState({userProfile: {...this.state.userProfile, logo}}),
      toggleSettings: this.toggleSettings,
    }
  }

  handleEmail = node => {
    let email = node.target.value;
    const {accountInformation, contacts} = this.state.userProfile;
    accountInformation.email = email;
    contacts.email = email;

    this.setState({userProfile: {...this.state.userProfile, accountInformation, contacts}});
  }

  toggleSettings = index => {
    const {settings} = this.state.userProfile;

    settings[index].value = !settings[index].value;
    this.setState({userProfile: {...this.state.userProfile, settings}});
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-12 col-md-6 col-sm-3">
            <UserForm userInfo = {this.state.userProfile} actions = {this.actions} />
          </div>
          <div className="col-12 col-md-6 col-sm-9">
            <UserProfile userProfile={this.state.userProfile} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
