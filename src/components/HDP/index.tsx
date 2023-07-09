import { Box } from "@mantine/core";

import Header from "./Header";
import DataTable from "./DataTable";
import { mockDataAcc } from "./constants";
import SideBar from "./SideBar";
import Footer from "./Footer";

const HDP = () => {
    return (
        <Box
            h="100%"
            component="div"
            display="grid"
            p="xs"
            pb={0}
            sx={(theme) => ({
                gridTemplateColumns: "1fr 250px",
                gridTemplateRows: "auto 1fr auto",
                gridTemplateAreas: `
                    "header sidebar"
                    "table sidebar"
                    "footer footer"
                `,
                gridGap: theme.spacing.xs,
                boxSizing: "border-box",
            })}
        >
            <Header />
            <DataTable data={mockDataAcc} />
            <SideBar />
            <Footer />
        </Box>
    );
};

export default HDP;
