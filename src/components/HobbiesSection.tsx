import React from "react";
import { Link as RouterLink, Route, Switch } from "react-router-dom";

import { Grid, Link, Typography } from "@material-ui/core";

import SectionHeader from "./SectionHeader";

class HobbiesSection extends React.Component {
    render() {
        return (
            <Grid
                container
                item
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid container item direction="column">
                    <SectionHeader>Hobbies</SectionHeader>
                </Grid>

                <Grid item>
                    <Typography variant="h6" align="center">
                        {"Music • "}

                        <RouterLink
                            to="/data/fallen-star.pdf"
                            download
                            target="_blank"
                            style={{ textDecoration: "none" }}
                        >
                            <Link color="textPrimary">Poetry</Link>
                        </RouterLink>

                        {" • Ikebana"}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default HobbiesSection;
