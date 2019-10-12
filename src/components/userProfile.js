import React from "react";
import AccountInformation from "./accountInformation";
import SettingsInformation from "./settingsInformation";
import ContactInformation from "./contactInformation";
import Activity from "./activities";

class UserProfile extends React.Component {
    render() {
        const { userProfile } = this.props;
        const { accountInformation } = userProfile;
        return (<React.Fragment>
            <div className="container p-5">
                <div className="row profile-info-contaienr">
                    <div className="col-sm-6 col-md-6 user-details">
                        <div className="user-image">
                            <img src={userProfile.logo} alt="" className="img-circle user-image-container" />
                        </div>
                        <div className="user-info-block">
                            <div className="user-heading">
                                <h3>{userProfile.name}</h3>
                                <span className="help-block">{userProfile.location}</span>
                            </div>
                            <ul className="navigation">
                                <li className="active">
                                    <a data-toggle="tab" href="#information">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#settings">
                                        <span className="glyphicon glyphicon-cog"></span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#email">
                                        <span className="glyphicon glyphicon-envelope"></span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#events">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </a>
                                </li>
                            </ul>
                            <div className="user-body border">
                                <div className="tab-content">
                                    <div id="information" className="tab-pane active">
                                        <AccountInformation accountInformation={accountInformation} />
                                    </div>
                                    <div id="settings" className="tab-pane">
                                        <SettingsInformation settings={userProfile.settings} />
                                    </div>
                                    <div id="email" className="tab-pane">
                                        <ContactInformation info={userProfile.contacts} />
                                    </div>
                                    <div id="events" className="tab-pane">
                                        <Activity activities={userProfile.activities} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}

export default UserProfile;