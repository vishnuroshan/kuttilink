import React, { Component } from 'react';
import Url from './Url/Url';
import { connect } from 'react-redux';
import * as userActionCreaters from '../../store/actions';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";

class Dashboard extends Component {

    state = {
        searchVal: '',
        urlArray: [...this.props.urls]
    }

    shouldComponentUpdate(_nextProps, nextState) {
        console.log('[Dashboard] shouldComponentUpdate: ', nextState.urlArray.length !== this.state.urlArray.length);
        return nextState.urlArray.length !== this.state.urlArray.length
    }
    componentDidMount() {
        if (!this.state.urlArray) {
            console.log('setting urls to props');
            this.props.setUrls();
        }
        if (!this.state.urlArray.length > 0) {
            console.log('setting props.urls to state');
            this.setState({ urlArray: this.props.urls });
        }
    }


    search = () => {
        const filteredList = this.state.urlArray.filter((elem) => elem.url.toLowerCase().match(this.state.searchVal.trim()));
        console.log(filteredList);
        this.setState({ urlArray: filteredList });
    }

    render() {
        return (

            <div style={{ marginTop: "12px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SearchBar
                            value={this.state.searchVal}
                            onChange={(newValue) => this.setState({ searchVal: newValue })}
                            onRequestSearch={() => this.search()}
                        />
                    </Grid>

                    {this.state.urlArray.map((url) => {
                        return <Grid
                            item xs={12}
                            key={url._id}>
                            <Url {...url} />
                        </Grid>
                    })}

                </Grid>
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