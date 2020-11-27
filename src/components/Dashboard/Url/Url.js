import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { ExpandMore } from '@material-ui/icons';

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
                id="panel1bh-header">
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
    );
};

export default UrlComponent;