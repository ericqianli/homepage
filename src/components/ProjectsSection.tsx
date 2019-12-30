import React from "react";

import { Grid, Link, Typography } from "@material-ui/core";
import Open from "@material-ui/icons/OpenInNew";

import SectionHeader from "./SectionHeader";

const projects = [
    {
        name: "Data Sweet",
        link: "/data/fallen-star.pdf",
        description:
            "An integrated solution for user-friendly query and visualization workflow, built with Node.js and React. Features dimensional query and client side visualization. Architected to be completely independent of query source and view library."
    },
    {
        name: "Ocean & Morus",
        link: "/data/fallen-star.pdf",
        description:
            "A platform dedicated to collecting, presenting and exchanging timeless arts, reflecting simple design, rich culture and exquisite craftsmanship."
    },
    {
        name: "Ishhoikka",
        link: "/data/fallen-star.pdf",
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
                    {projects.map((project, index) => (
                        <Grid key={index} item>
                            <Link
                                variant="h5"
                                align="center"
                                color="textPrimary"
                                target="_blank"
                                href={project.link}
                            >
                                <Grid
                                    container
                                    item
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <Grid item>{project.name}</Grid>

                                    <Open fontSize="small" />
                                </Grid>
                            </Link>
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
