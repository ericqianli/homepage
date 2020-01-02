import React from "react";

import { Grid, Typography } from "@material-ui/core";

import SectionHeader from "./SectionHeader";

const educations = [
    {
        school: "University of Michigan • 2008 - 2013",
        degree: "M.S and Ph.D. in Computer Science and Engineering",
        GPA: "4.00"
    },
    {
        school: "University of Hong Kong • 2006 - 2007",
        degree: "Exchange in Computer Science and Engineering",
        GPA: "3.81"
    },
    {
        school: "Zhejiang University • 2004 - 2008",
        degree: "Chu Kochen Honors College, B.S. in Information Engineering",
        GPA: "3.97"
    }
];

class EducationSection extends React.Component {
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
                    <SectionHeader>Education</SectionHeader>
                </Grid>

                <Grid
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    {educations.map((education, index) => (
                        <Grid
                            key={index}
                            container
                            item
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h5" align="center">
                                {education.school}
                            </Typography>
                            <Typography variant="h6" align="center">
                                {education.degree}
                            </Typography>
                            <Typography variant="body1" align="center">
                                GPA {education.GPA}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        );
    }
}

export default EducationSection;
