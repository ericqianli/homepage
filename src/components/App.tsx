import React from "react";

import {
    Box,
    Container,
    CssBaseline,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MuiThemeProvider,
    Typography
} from "@material-ui/core";
import Email from "@material-ui/icons/MailOutline";
import Phone from "@material-ui/icons/PhoneIphone";

import theme from "../theme/muiTheme";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import HobbiesSection from "./HobbiesSection";
import ProjectsSection from "./ProjectsSection";
import PublicationsSection from "./PublicationsSection";
import ServicesSection from "./ServicesSection";

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <Container maxWidth="sm">
                    <Box mt={10} mb={4}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={4}
                        >
                            <Grid
                                container
                                item
                                direction="column"
                                justify="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid item>
                                    <Typography variant="h2">
                                        Qian, Li
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <List component="nav">
                                        <ListItem dense>
                                            <ListItemIcon>
                                                <Phone fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText secondary="650-339-9023" />
                                        </ListItem>
                                        <ListItem dense>
                                            <ListItemIcon>
                                                <Email fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText secondary="ericqianli@gmail.com" />
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>

                            <Grid
                                item
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Typography variant="body1" align="center">
                                    As a researcher, engineer and art
                                    enthusiast, I believe the value of
                                    technology is to make user tasks simple and
                                    pleasant. As Big Data thrives through the
                                    Internet era, I have devoted my past decade
                                    to researching, designing and implementing
                                    data analytics platforms and products, which
                                    have helped thousands of users accomplishing
                                    their data tasks with efficiency and ease.
                                    Now, arising cutting-edge technologies such
                                    as Node.js, React and Vue unlock an
                                    unparalleled opportunity to bring data
                                    analytics to a new level -- simple,
                                    beautiful and powerful. I am excited to
                                    leverage my expertise in engineering and
                                    passion in art to fulfill the vision of next
                                    generation data products, delivering a
                                    smooth and pleasant user data experience.
                                </Typography>
                            </Grid>

                            <ExperienceSection />

                            <ProjectsSection />

                            <EducationSection />

                            <PublicationsSection />

                            <ServicesSection />

                            <HobbiesSection />

                            <Box my={2} />

                            <Grid item>
                                <Typography variant="subtitle2">
                                    www.qianli.com
                                </Typography>
                                <Typography variant="subtitle1" align="center">
                                    Built with Node.js and React
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
