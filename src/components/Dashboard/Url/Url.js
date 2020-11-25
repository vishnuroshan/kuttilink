import React from 'react'; import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Link, CardContent, ListItem } from "@material-ui/core";
// import useClipboard from "react-use-clipboard";



function UrlComponent(props) {

    // const [isCopied, setCopied] = useClipboard("sasdasd");

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });
    const classes = useStyles();

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.uniqueKey}</h5>
                <p className="card-text">{props.url}</p>
                <Link href={`${process.env.REACT_APP_API_URL}${props.uniqueKey}`} className="card-link">
                    {`${process.env.REACT_APP_API_URL}${props.uniqueKey}`}
                </Link>
                {/* <button className="btn btn-outline-primary" onClick={setCopied(`${process.env.REACT_APP_API_URL}${props.uniqueKey}`)}>copy to clipboard</button> */}
            </div>
        </div>

        // <Card classNameName={classNamees.root}>
        //     <CardContent>
        //         <Typography classNameName={classNamees.title} color="textSecondary" gutterBottom>
        //             Unique Key
        //         </Typography>

        //         <Typography variant="h5" component="h2">
        //             {props.uniqueKey}
        //         </Typography>
        //         <Typography classNameName={classNamees.title} color="textSecondary" gutterBottom>
        //             short url
        //         </Typography>

        //         <Typography variant="h5" component="h2">
        //             <Link href={`${process.env.REACT_APP_API_URL}${props.uniqueKey}`}>
        //                 {`${process.env.REACT_APP_API_URL}${props.uniqueKey}`}
        //             </Link>
        //         </Typography>

        //         <Typography classNameName={classNamees.title} color="textSecondary" gutterBottom>
        //             original link
        //         </Typography>

        //         <Typography variant="h5" component="h2">
        //             <Link href={props.url}>{props.url}</Link>
        //         </Typography>

        //         <Typography classNameName={classNamees.title} color="textSecondary" gutterBottom>
        //             clicks
        //         </Typography>

        //         <Typography variant="h6" component="h2">
        //             {props.clicks}
        //         </Typography>
        //     </CardContent>

        // </Card>
    );
};

export default UrlComponent;