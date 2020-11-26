import React, { useEffect } from 'react';
import clsx from 'clsx';
import {
    Container, MenuItem, Menu,
    AppBar, Toolbar, Typography,
    IconButton, Drawer,
    List, ListItem,
    ListItemIcon, ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, Dashboard } from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles } from '@material-ui/core/styles';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';

// redux
import { connect } from 'react-redux';
import * as userActionCreators from '../store/actions';

// my components
import ShortenUrl from '../components/ShortenUrl/ShortenUrl';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import UrlDashboard from '../components/Dashboard/Dashboard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    }
}));

function Layout(props) {

    useEffect(() => {
        console.log('layout props::> ', props)
        if (props.auth) {
            props.setUrls();
        }
    })

    const classes = useStyles();
    // const [auth, setAuth] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isDrawerOpen, setDrawerStatus] = React.useState(false);

    const toggleDrawer = (status) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerStatus(status);
    };

    const list = () => {
        return props.auth ? (
            <div
                className={clsx(classes.list, {
                    [classes.fullList]: 'left'
                })}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <LinkIcon />
                        </ListItemIcon>
                        <ListItemText >
                            <NavLink
                                to="/home/"
                                exact
                                activeClassName="my-active">
                                URL-shortener</NavLink>
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText>
                            <NavLink
                                to="/dashboard/"
                                exact
                                activeClassName="my-active">
                                Dashboard</NavLink>
                        </ListItemText>
                    </ListItem>

                </List>
            </div>
        ) : <div className={clsx(classes.list, {
            [classes.fullList]: 'left'
        })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <LockOpenIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <NavLink
                                to="/login/"
                                exact
                                activeClassName="my-active">
                                Login</NavLink>
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <NavLink
                                to="/signup/"
                                exact
                                activeClassName="my-active">
                                Signup</NavLink>
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
    };
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        console.log(event.currentTarget)
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawer(true)}
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Kutti URL
          </Typography>
                    {props.auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
            <Container maxWidth="md">

                <Switch>
                    <Route path='/home' exact component={ShortenUrl} />
                    <Route path='/login' exact render={(props) => <Login {...props} />} />
                    <Route path='/signup' exact render={(props) => <Signup {...props} />} />
                    <ProtectedRoute path='/dashboard' component={UrlDashboard} />
                    {/* <ProtectedRoute path='/account' component={}/>  */}

                    <Redirect path='/' to='/home' />
                </Switch>
                {/* <ShortenUrl /> */}
            </Container>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUrls: () => dispatch(userActionCreators.storeUrls())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
