import React from "react";

const Map = () => {
    return (
        <>
            <div className="google-map">
                <div className="embed-responsive embed-responsive-21by9">
                    <iframe
                        className="embed-responsive-item"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Moscow%20Alekseevskaya+(My%20Business%20Name)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </>
    );
};

export default Map;
