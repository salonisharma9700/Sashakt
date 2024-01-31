import React, { Component } from 'react';

class Gbot extends Component {
    componentDidMount() {
        (function (d, m) {
            var kommunicateSettings =
                { "appId": "2b5d432609fd93c78be7ba427891b119c", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }

    render() {
        return (
            <div className='Gbot'  style={{  marginTop: '2rem', marginBottom: 0 }}>
                <h1></h1>
            </div>
        );
    }
}

export default Gbot;
