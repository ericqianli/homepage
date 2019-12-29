import React from "react";

import { Grid, Typography } from "@material-ui/core";

import SectionHeader from "./SectionHeader";

const projects = [
    {
        name: "Data Sweet",
        description:
            "An integrated solution for user-friendly query and visualization workflow, built with Node.js and React. Features dimensional query and client side visualization. Architected to be completely independent of query source and view library."
    },
    {
        name: "Ocean & Morus",
        description:
            "A platform dedicated to collecting, presenting and exchanging timeless arts, reflecting simple design, rich culture and exquisite craftsmanship."
    },
    {
        name: "Ishhoikka",
        description: "Personal Ikebana work exhibition."
    }
];

class ProjectsSection extends React.Component {
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
                    <SectionHeader>Projects</SectionHeader>
                </Grid>

                <Grid
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    {projects.map(project => (
                        <Grid
                            container
                            item
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h5" align="center">
                                {project.name}
                            </Typography>
                            <Typography variant="body1" align="center">
                                {project.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        );
    }
}

export default ProjectsSection;
