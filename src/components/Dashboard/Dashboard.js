import React, { Component } from 'react';
import Url from './Url/Url';
import { connect } from 'react-redux';
import * as userActionCreaters from '../../store/actions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.setUrls();
    }
    render() {
        return (
            <div>
                {this.props.urls.map((url) => {
                    return <Url
                        key={url._id}
                        {...url}
                    />
                })}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        urls: state.urls
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUrls: () => dispatch(userActionCreaters.storeUrls())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);