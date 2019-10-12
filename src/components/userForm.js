import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ImageGallery from './imageGallery';

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ]
    }

    handleChange = (date) => {
        let formattedDate = `${this.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        this.props.actions.handleDate(formattedDate);
    }

    handleSettings = (node) => {
        let settingsIndex = node.target.id.split("-")[2];
        this.props.actions.toggleSettings(settingsIndex);
    }

    render() {
        const { userInfo } = this.props;
        return (
            <div className="container p-5">
                <ImageGallery onImageSelect={this.props.actions.handleLogo} currentLogo = {userInfo.logo} />
                <form>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Name</label>
                                <input onChange={this.props.actions.handleName} value={userInfo.name} type="text" placeholder="Your name" className="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Email</label>
                                <input onChange={this.props.actions.handleEmail} value={userInfo.accountInformation.email} type="text" placeholder="Email address" className="form-control form-control-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="password" className="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Confirm password</label>
                                <input type="password" placeholder="password confirmation" className="form-control form-control-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Location</label>
                                <input onChange={this.props.actions.handleLocation} value={userInfo.location} type="text" placeholder="Location" className="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Date of birth</label><br />
                                <DatePicker
                                    onChange={this.handleChange}
                                    placeholderText="Date of birth"
                                    className="form-control form-control-lg"
                                    selected={new Date(userInfo.accountInformation.dob)}
                                    dateFormat="MMM dd, yyyy"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <div className="form-group">
                                <label>Phone number</label>
                                <input onChange={this.props.actions.handlePhone} value={userInfo.contacts.phone} type="text" placeholder="Phone number" className="form-control form-control-lg" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Page link</label>
                                <input onChange={this.props.actions.handleLink} value={userInfo.contacts.link} type="text" placeholder="Link to your page / profile" className="form-control form-control-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={this.handleSettings} className="form-check-input" id={`settings-index-${0}`} type="checkbox" value={userInfo.settings[0].value} checked={userInfo.settings[0].value} />
                        <label className="form-check-label" htmlFor={`settings-index-${0}`}>Show Notifications</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={this.handleSettings} className="form-check-input" id={`settings-index-${1}`} type="checkbox" value={userInfo.settings[1].value} checked={userInfo.settings[1].value} />
                        <label className="form-check-label" htmlFor={`settings-index-${1}`}>Dark theme</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={this.handleSettings} className="form-check-input" id={`settings-index-${2}`} type="checkbox" value={userInfo.settings[2].value} checked={userInfo.settings[2].value} />
                        <label className="form-check-label" htmlFor={`settings-index-${2}`}>Ad-Blocks</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={this.handleSettings} id={`settings-index-${3}`} className="form-check-input" type="checkbox" value={userInfo.settings[3].value} checked={userInfo.settings[3].value} />
                        <label className="form-check-label" htmlFor={`settings-index-${3}`}>Email updates</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Bio</label>
                        <textarea className="form-control form-control-lg" onChange={this.props.actions.handleBio} value={userInfo.accountInformation.bio} rows="7" style={{ resize: "none" }}></textarea>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserForm;