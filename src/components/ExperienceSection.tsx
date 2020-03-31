import React from "react";

import { Grid, Typography } from "@material-ui/core";

import SectionHeader from "./SectionHeader";

const experiences = [
    {
        name: "Facebook • 2013 - 2019",
        title: "Senior Software Engineer",
        description:
            "Building next generation big data analytics platforms and products to empower core business decision making. Built the universal query product supporting 10+ data sources, 8k+ daily active users and 80k+ daily queries. Constantly contributing to various data exploration, visualization and dashboarding products. Led multiple cross team projects, utilizing machine learning to improve query composition, interfacing query platform to anomaly detection and automating interactive dashboard creation. Actively interviewing and training employees on internal data products."
    },
    {
        name: "National University of Singapore • 2013 Summer",
        title: "Postdoctoral Researcher",
        description:
            "Proposed and implemented Automatic User Preference Inference with optimal pairwise comparisons."
    },
    {
        name: "IBM Almaden Research Center • 2011 & 2012 Summer",
        title: "Intern",
        description:
            "Implemented and patented Declarative Entity Integration Language. Prototyped and deployed streaming systems to empower Declarative Entity Integration in real time."
    }
];

class ExperienceSection extends React.Component {
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
                    <SectionHeader>Experience</SectionHeader>
                </Grid>

                <Grid
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    {experiences.map((experience, index) => (
                        <Grid
                            key={index}
                            container
                            item
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h5" align="center">
                                {experience.name}
                            </Typography>
                            <Typography variant="h6" align="center">
                                {experience.title}
                            </Typography>
                            <Typography variant="body1" align="center">
                                {experience.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        );
    }
}

export default ExperienceSection;
