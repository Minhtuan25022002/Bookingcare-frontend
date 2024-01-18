import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import LogoMe from '../../../assets/zuize/me.jpg'

class About extends Component {
    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-container'>
                    <div className='section-about-header'>
                        Truyền thông nói về BookingCare
                    </div>
                    <div className='section-about-content'>
                        <div className='content-left'>
                            <iframe width="592" height="322" style={{ borderRadius: '15px' }} 
                                src="https://www.youtube.com/embed/7tiR7SI4CkI" 
                                title="BookingCare trên VTV1 ngày 21/02/2018 - Chương trình Cà phê khởi nghiệp" 
                                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className='content-right'>
                            <img src={LogoMe} style={{
                                width: '592px', 
                                height: '322px',
                                objectFit: 'cover'
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
