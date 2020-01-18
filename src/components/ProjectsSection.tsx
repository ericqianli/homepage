import React from "react";

import { Grid, Link, Typography } from "@material-ui/core";
import Open from "@material-ui/icons/OpenInNew";

import { ReactComponent as DataSweetLogo } from "../logo/data-sweet.svg";
import { ReactComponent as IsshoikkaLogo } from "../logo/isshoikka.svg";
import { ReactComponent as OceanMorusLogo } from "../logo/ocean-morus.svg";
import SectionHeader from "./SectionHeader";

const projects = [
    {
        name: "Data Sweet",
        logo: <DataSweetLogo opacity={0.87} width={22} height={22} />,
        link: "https://datasweet.app",
        description:
            "An integrated solution for user-friendly query and visualization workflow, built with Node.js, React, Material UI, Firebase and GraphQL. Features dimensional query and client side visualization. Architected to be completely independent of query source and view library."
    },
    {
        name: "Ocean & Morus",
        logo: <OceanMorusLogo opacity={0.87} width={18} height={18} />,
        link: "https://oceanmorus.com/",
        description:
            "A platform dedicated to collecting, presenting and exchanging timeless arts, which reflect simple design, rich culture and exquisite craftsmanship."
    },
    {
        name: "Ishhoikka",
        logo: <IsshoikkaLogo opacity={0.87} width={8} height={32} />,
        link: "http://isshoikka.com",
        description:
            "Personal flower arrangement exhibition, empowered with HHVM and React."
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
                                    spacing={3}
                                >
                                    {project.logo}

                                    <Grid item>{project.name}</Grid>

                                    <Open fontSize="small" />
                                </Grid>
                            </Link>
                            <Typography variant="body1" align="justify">
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
