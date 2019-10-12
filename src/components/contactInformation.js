import React from "react"

class ContactInformation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h4>Contact us</h4>
                <div className="d-flex flex-column">
                    <div className="d-block"><strong className="mr-3">Email:</strong>{this.props.info.email}</div>
                    <div className="d-block"><strong className="mr-3">Phone:</strong>{this.props.info.phone}</div>
                    <hr />
                    <a href={"https://"+this.props.info.link}>View page</a>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactInformation;