import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Link, CardContent, ListItem, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { ExpandMore } from '@material-ui/icons'
// import useClipboard from "react-use-clipboard";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
    }
}));

function UrlComponent(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        // <div className="card">
        //     <div className="card-body">
        //         <h5 className="card-title">{props.uniqueKey}</h5>
        //         <p className="card-text">{props.url}</p>
        //         <Link href={`${process.env.REACT_APP_API_URL}${props.uniqueKey}`} className="card-link">
        //             {`${process.env.REACT_APP_API_URL}${props.uniqueKey}`}
        //         </Link>
        //         {/* <button className="btn btn-outline-primary" onClick={setCopied(`${process.env.REACT_APP_API_URL}${props.uniqueKey}`)}>copy to clipboard</button> */}
        //     </div>
        // </div>

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Link
                    href={`${process.env.REACT_APP_API_URL}${props.uniqueKey}`}
                    className={classes.heading}>{`${process.env.REACT_APP_API_URL}${props.uniqueKey}`}
                </Link>
                <Typography variant="caption" className={classes.secondaryHeading}>{props.url}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                clicks: {props.clicks}
            </AccordionDetails>
        </Accordion>

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