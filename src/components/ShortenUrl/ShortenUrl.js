import classes from './ShortenUrl.module.css';
import { Paper, TextField, Button, Link } from '@material-ui/core';
import API from '../../apis/url-api';
// import Clipboard from 'react-clipboard.js';
// import useClipboard from "react-use-clipboard";
import ValidUrl from 'valid-url';
import React, { useState } from 'react';

const ShortenUrl = (props) => {



    const [url, setUrl] = useState()
    // const [isCopied, setCopied] = useClipboard("");
    const [shortUrl, setShortUrl] = useState();

    const shorten = () => {
        if (ValidUrl.isUri(url)) {
            API.shorten(url).then((short) => {
                setShortUrl(short);
                // setCopied(short);
                console.log(shortUrl)
                // props.history.push('/url')
            });
        } else { alert('please paste a valid url'); }
    }

    let urlText;
    if (shortUrl) {
        urlText = <div className="well">
            <h2>Short URL</h2>
            <Link href={shortUrl} onClick={(event) => event.preventDefault()} variant="body2">
                {shortUrl}
            </Link>
            {/* <Clipboard
                data-clipboard-text={shortUrl}>
                copy url
            </Clipboard> */}
        </div>
    }

    return (
        <div className="container">

            <div className="jumbotron card" style={{ backgroundColor: '#fff', margin: '12px', alignItems: 'center' }}>
                <h1>URL shortener</h1>
                <TextField
                    style={{ width: '100%', margin: '15px' }}
                    id="url-text"
                    label="paste your url here"
                    variant="outlined"
                    onChange={(event) => setUrl(event.target.value)} />
                <Button style={{ margin: '15px' }} variant="contained" color="primary" onClick={shorten}>Shorten</Button>

                {urlText}
            </div>

        </div>
    );
};

export default ShortenUrl;