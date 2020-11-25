import React, { Component } from 'react';
import Url from './Url/Url';
import { connect } from 'react-redux';
import * as userActionCreaters from '../../store/actions';
import { Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";

class Dashboard extends Component {

    state = {
        searchVal: '',
        array: [...this.props.urls]
    }
    componentDidMount() {
        console.log(this.state)
        this.props.setUrls();
    }

    search = (searchVal) => {
        console.log(searchVal)
    }
    render() {
        return (
            <div style={{ marginTop: "12px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SearchBar
                            value={this.state.searchVal}
                            onChange={(newValue) => this.setState({ value: newValue })}
                            onRequestSearch={() => this.search(this.state.searchVal)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {this.state.array.map((url) => {
                            return <Url
                                key={url._id}
                                {...url}
                            />
                        })}
                    </Grid>
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