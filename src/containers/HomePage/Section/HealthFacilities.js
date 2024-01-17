import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class HealthFacilities extends Component {

    render() {
        return (
            <div className='section-share section-medical-facilities'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế</span>
                        <button className='btn-section'><span className='btn-section-item'>Xem thêm</span></button>
                    </div>
                    <div className='section-body'>  
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilities'></div>
                                <div>Bệnh viện Chợ Rẫy 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilities'></div>
                                <div>Bệnh viện Chợ Rẫy 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilities'></div>
                                <div>Bệnh viện Chợ Rẫy 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilities'></div>
                                <div>Bệnh viện Chợ Rẫy 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilities'></div>
                                <div>Bệnh viện Chợ Rẫy 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilities'></div>
                                <div>Bệnh viện Chợ Rẫy 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HealthFacilities);
