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
                                    Almost before we knew it, we had left the
                                    ground. Almost before we knew it, we had
                                    left the ground. Almost before we knew it,
                                    we had left the ground. Almost before we
                                    knew it, we had left the ground. Almost
                                    before we knew it, we had left the ground.
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
