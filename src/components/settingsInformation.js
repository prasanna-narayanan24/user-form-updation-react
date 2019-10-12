import React from 'react';

class SettingsInformation extends React.Component {
    renderSettings = settings => {
        return settings.map(setting => {
            return <div key={setting.name} className="d-flex justify-content-between">
                <span>{setting.name}</span>
                <span className={`text-dark glyphicon ${setting.value ? "glyphicon-star" : "glyphicon-star-empty"}`}></span>
            </div>
        })
    }

    render() {
        const {settings} = this.props;
        return(
            <React.Fragment>
                <h4>Settings</h4>
                {this.renderSettings(settings)}
            </React.Fragment>
        );
    }
}

export default SettingsInformation;