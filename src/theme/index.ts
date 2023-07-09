import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
    components: {
        Button: {
            defaultProps: {
                size: "xs",
            },
        },
        Text: {
            defaultProps: {
                size: "xs",
            },
        },
        Mark: {
            defaultProps: {
                fw: 700,
                px: "xs",
            },
        },
    },
    primaryColor: "orange",
};

export default theme;
