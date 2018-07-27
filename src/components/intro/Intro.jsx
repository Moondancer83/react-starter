import React from "react";

import './intro.scss';

export default class Intro extends React.Component {
    render () {
        return (
            <div id={'intro'}>
                <div id={'react-logo'} />
                <h1>starter</h1>
                <p>
                    Gives you a predefined project skeleton with preset webpack config.
                </p>
                <p className={'center'}>
                    <a href={'https://github.com/Moondancer83/react-starter'} target={'_blank'}>lives on <span id={'github-logo'}/></a>
                </p>
            </div>
        );
    }
}