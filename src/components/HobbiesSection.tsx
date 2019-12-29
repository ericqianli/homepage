import React from "react";

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
                        <Link target="_blank" href="/data/fallen-star.pdf">
                            Poetry
                        </Link>
                        {" • Ikebana"}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default HobbiesSection;
