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
import LinkedIn from "@material-ui/icons/LinkedIn";
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
                                        Li Qian
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
                                        <ListItem dense>
                                            <ListItemIcon>
                                                <LinkedIn fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText secondary="linkedin.com/in/ericqianli" />
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Typography variant="body1" align="center">
                                    As a researcher, engineer and art
                                    enthusiast, I believe the value of
                                    technology lies in making user tasks easy
                                    and enjoyable. As Big Data thrives through
                                    the Internet era, I have devoted my past
                                    decade to researching, designing and
                                    implementing data analytics platforms and
                                    products, which have helped thousands of
                                    users accomplish their data tasks with
                                    efficiency and ease. Now, the rise of
                                    cutting-edge technologies such as Node.js,
                                    React, Vue and Material Design unlocks an
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

                            <Grid key="footer" item>
                                <Typography variant="subtitle2">
                                    qianli.com
                                </Typography>
                                <Typography variant="subtitle1" align="center">
                                    Built with Node.js, React and Material UI
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
