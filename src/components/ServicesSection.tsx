import React from "react";

import { Grid, Typography } from "@material-ui/core";

import SectionHeader from "./SectionHeader";

const services = [
    {
        organization: "Proceedings of ACM SIGMOD 2015, 2016",
        title: "Program Committee"
    },
    {
        organization: "Proceedings of the VLDB Endowment 2014, 2015",
        title: "Program Committee"
    },
    {
        organization: "ACM Transactions on Database Systems 2015",
        title: "Reviewer"
    },
    {
        organization: "Proceedings of the VLDB Endowment 2014",
        title: "Treasury Chair"
    }
];

class ServicesSection extends React.Component {
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
                    <SectionHeader>Services</SectionHeader>
                </Grid>

                <Grid
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    {services.map(service => (
                        <Grid
                            container
                            item
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h6" align="center">
                                {service.organization}
                            </Typography>
                            <Typography variant="body1" align="center">
                                {service.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        );
    }
}

export default ServicesSection;
