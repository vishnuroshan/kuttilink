import React, { Component } from 'react';
import Url from './Url/Url';
import { Grid, CircularProgress } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import API from '../../apis/url-api';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVal: '',
            urlArray: [],
            filteredArray: []
        }
    }

    componentDidMount() {
        API.getUrls().then((result) => {
            this.setState({ urlArray: result.data, filteredArray: result.data });
        });
    }

    search = (searchVal) => {

        this.setState({ filteredArray: [...this.state.urlArray] });
        if (searchVal.length > 2) {
            const filteredList = this.state.filteredArray.filter((elem) => elem.url.toLowerCase().match(searchVal.trim()));
            this.setState({ filteredArray: filteredList });
        }

    }

    render() {
        return this.state.urlArray.length > 0 ?
            <div style={{ marginTop: "12px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SearchBar
                            placeholder="Search by URL"
                            value={this.state.searchVal}
                            onChange={(newValue) => this.search(newValue)}
                        />
                    </Grid>
                    {this.state.filteredArray.length > 0 ? this.state.filteredArray.map((url) => {
                        return <Grid
                            item xs={12}
                            key={url._id}>
                            <Url {...url} />
                        </Grid>
                    }) : <p>no result</p>}

                </Grid>
            </div>
            : <CircularProgress />
    }
};

export default Dashboard;