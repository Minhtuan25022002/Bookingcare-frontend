import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils'
import * as actions from '../../../store/actions'

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        // try {
        //     let res = await getAllCodeService('gender');
        //     if(res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //render auto chạy vào => didupdate
        // quá khứ previous và hiện tại  (this)
        if(prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
    }

    render() {
        let genders = this.state.genderArr;
        let language = this.props.language;
        // console.log('redux',genderRedux);
        
        return (
            <div className='user-redux-container' >
                <div className='title'>
                    User Redux Minh Tuan
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='col-12'><FormattedMessage id='manage-user.add'/></div>
                        <form>
                            <div className="row my-3">
                                <div className="form-group col-md-3">
                                    <label><FormattedMessage id='manage-user.email'/></label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label><FormattedMessage id='manage-user.password'/></label>
                                    <input type="password" className="form-control"/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label><FormattedMessage id='manage-user.first-name'/></label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label><FormattedMessage id='manage-user.last-name'/></label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="row my-3" >
                                <div className="form-group col-md-3">
                                    <label><FormattedMessage id='manage-user.phone-number'/></label>
                                    <input type="text" className="form-control"/>
                                </div>                                                 
                                <div className="form-group col-md-9">
                                    <label><FormattedMessage id='manage-user.address'/></label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="row my-3" >
                                <div className="form-group col-md-3">
                                    <label><FormattedMessage id='manage-user.gender'/></label>
                                    <select className="form-select">
                                        {genders && genders.length > 0 &&
                                            genders.map((item, index) => {
                                                return (
                                                    <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label><FormattedMessage id='manage-user.position'/></label>
                                    <select className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label><FormattedMessage id='manage-user.role'/></label>
                                    <select className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label><FormattedMessage id='manage-user.image'/></label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary"><FormattedMessage id='manage-user.submit'/></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        //state.admin bởi vì admin đã khai báo là key trong file rootReducers
        genderRedux: state.admin.genders,
    };
};

//fire 1 action
const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
        // changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
