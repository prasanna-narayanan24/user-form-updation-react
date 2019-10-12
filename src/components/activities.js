import React from 'react';

class Activity extends React.Component {
    getIcon = activity => {
        activity = activity.toLowerCase();
        let icon = "glyphicon-heart text-danger";
        if(activity.includes("follow")) {
            icon = "glyphicon-tasks text-primary"
        } else if(activity.includes("react")) {
            icon = "glyphicon-fire text-warning"
        } 
        if(activity.includes("comment")) {
            icon = "glyphicon-comment text-primary";
        }
        return icon;
    }

    renderAcitivity = activities => {
        return activities.map(activity =>
            <li key={activity.name} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-inline">
                    <span className={`glyphicon ${this.getIcon(activity.name)} mr-3`}></span>
                    {activity.name}
                </div>
                <span className="badge badge-primary badge-pill p-2">{activity.timestamp}</span>
            </li>
        );
    }
    render() {
        return (
            <React.Fragment>
                <h4>Recent Activities</h4>
                <ul className="list-group list-group-flush">
                    {this.renderAcitivity(this.props.activities)}
                </ul>
            </React.Fragment>
        );
    }
}

export default Activity;