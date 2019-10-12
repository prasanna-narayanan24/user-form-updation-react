import React from "react";

class AccountInformation extends React.Component {
    render() {
        const { accountInformation } = this.props;
        return (
            <React.Fragment>
                <h4>Account Information</h4>
                <div className="d-block">
                    <span>{accountInformation.dob}</span>
                </div>
                <div className="d-block mt-2">
                    <strong>Bio</strong>
                </div>
                <hr />
                <p>{accountInformation.bio}</p>
            </React.Fragment>
        );
    }
}

export default AccountInformation;