import React from "react";
import profileImages from "../assets/profile-pics/loadProfilePics";

class ImageGallery extends React.Component {
    render() {
        const {currentLogo} = this.props;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <div id="mdb-lightbox-ui"></div>
                        <div className="mdb-lightbox no-margin">
                            {profileImages.map(image => {
                                return <figure onClick={() => this.props.onImageSelect(image)} key={image} className="cursor-pointer col-md-3 image-gallery-item">
                                    { 
                                        currentLogo === image && <span className="border border-success p-2 selected-image-badge text-success glyphicon glyphicon-ok"></span>
                                    }
                                    <img src={image} alt="" className="img-fluid"/>
                                </figure>
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ImageGallery;