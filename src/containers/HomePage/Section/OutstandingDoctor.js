import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class OutstandingDoctor extends Component {

    render() {
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật</span>
                        <button className='btn-section'><span className='btn-section-item'>Xem thêm</span></button>
                    </div>
                    <div className='section-body'>  
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-outstanding-doctor'></div>
                                </div>
                                <div className='position text-center' style={{ width: '280px' }}>
                                    <div>Giáo sư, tiến sĩ 1</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-outstanding-doctor'></div>
                                </div>
                                <div className='position text-center' style={{ width: '280px' }}>
                                    <div>Giáo sư, tiến sĩ 2</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-outstanding-doctor'></div>
                                </div>
                                <div className='position text-center' style={{ width: '280px' }}>
                                    <div>Giáo sư, tiến sĩ 3</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-outstanding-doctor'></div>
                                </div>
                                <div className='position text-center' style={{ width: '280px' }}>
                                    <div>Giáo sư, tiến sĩ 4</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-outstanding-doctor'></div>
                                </div>
                                <div className='position text-center' style={{ width: '280px' }}>
                                    <div>Giáo sư, tiến sĩ 5</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-outstanding-doctor'></div>
                                </div>
                                <div className='position text-center' style={{ width: '280px' }}>
                                    <div>Giáo sư, tiến sĩ 6</div>
                                    <div>Cơ xương khớp</div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
