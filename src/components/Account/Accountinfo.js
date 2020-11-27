import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as userActionCreators from '../../store/actions';
import { CircularProgress, Grid, TextField, Typography, IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons'
import API from '../../apis/url-api';

class Accountinfo extends Component {


    state = {
        user: {},
        isReadOnly: true
    }

    componentDidMount() {
        API.getUser().then(user => {
            console.log('', user)
            this.setState({ user });
            console.log('state: > ', this.state)
        })
    }

    toggleEditable = () => {
        this.setState({ isReadOnly: !this.state.isReadOnly })
    }


    render() {
        return Object.keys(this.state.user).length > 0 ? <div className="container ">
            <Typography variant='h4'>Account</Typography>
            <IconButton aria-label="delete" onClick={this.toggleEditable}>
                <Edit />
            </IconButton>
            <Grid
                style={{ marginTop: '12px', width: '100%' }}
                container
                spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        style={{ width: '80%' }}
                        id="outlined-read-only-input"
                        label="First name"
                        defaultValue={this.state.user.firstname}
                        InputProps={{
                            readOnly: this.state.isReadOnly,
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        style={{ width: '80%' }}
                        id="outlined-read-only-input-11"
                        label="Last name"
                        defaultValue={this.state.user.lastname}
                        InputProps={{
                            readOnly: this.state.isReadOnly,
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        style={{ width: '80%' }}
                        id="outlined-read-only-input-113"
                        label="Last name"
                        defaultValue={this.state.user.lastname}
                        InputProps={{
                            readOnly: this.state.isReadOnly,
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        style={{ width: '80%' }}
                        id="outlined-read-only-input-121"
                        label="Email"
                        defaultValue={this.state.user.email}
                        InputProps={{
                            readOnly: this.state.isReadOnly,
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        style={{ width: '80%' }}
                        id="outlined-read-only-input-121"
                        label="Status"
                        defaultValue={this.state.user.status}
                        InputProps={{
                            readOnly: this.state.isReadOnly,
                        }}
                        variant="outlined"
                    />
                </Grid>

            </Grid>
        </div> : <CircularProgress />
    }
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {

    return {
        setUser: (user) => dispatch(userActionCreators.setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accountinfo);