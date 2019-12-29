import React from "react";

import { Grid, Typography } from "@material-ui/core";

import SectionHeader from "./SectionHeader";

const publications = [
    {
        title: "Learning User Preferences by Adaptive Pairwise Comparison",
        publisher: "Proceedings of the VLDB Endowment 2015",
        authors: ["Li Qian", "Jinyang Gao", "H. V. Jagadish"]
    },
    {
        title: "Organic Databases",
        publisher:
            "International Journal of Computational Science and Engineering 2015",
        authors: ["H. V. Jagadish", "Li Qian", "Arnab Nandi"]
    },
    {
        title:
            "Incremental Information Integration Using a Declarative Framework",
        publisher: "USPTO 2014",
        authors: [
            "Mauricio A",
            "Hernandez-Sherrington",
            "Lucian Popa",
            "Li Qian"
        ]
    },
    {
        title: "Reducing End-User Burden in Everyday Data Organization",
        publisher: "University of Michigan 2013",
        authors: ["Li Qian"]
    },
    {
        title: "Sample-Driven Schema Mapping",
        publisher: "Proceedings of ACM SIGMOD 2012",
        authors: ["Li Qian", "Michael J. Cafarella", "H. V. Jagadish"]
    },
    {
        title: "Organic Databases",
        publisher: "Databases in Networked Information Systems 2011",
        authors: ["H. V. Jagadish", "Arnab Nandi", "Li Qian"]
    },
    {
        title: "CRIUS: User-Friendly Database Design",
        publisher: "Proceedings of the VLDB Endowment 2011",
        authors: ["Li Qian", "Kristen LeFevre", "H. V. Jagadish"]
    }
];

class PublicationsSection extends React.Component {
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
                    <SectionHeader>Publications</SectionHeader>
                </Grid>

                <Grid
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    {publications.map(publication => (
                        <Grid
                            container
                            item
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h6" align="center">
                                {publication.title}
                            </Typography>
                            <Typography variant="body1" align="center">
                                {publication.publisher}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        );
    }
}

export default PublicationsSection;
