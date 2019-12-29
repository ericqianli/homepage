import React from "react";

import { Box, Typography } from "@material-ui/core";

class SectionHeader extends React.Component {
    render() {
        return (
            <Box my={2}>
                <Typography variant="h4" align="center">
                    {this.props.children}
                </Typography>
            </Box>
        );
    }
}

export default SectionHeader;
