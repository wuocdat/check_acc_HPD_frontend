import { Flex, Stack } from "@mantine/core";
import Header from "./Header";
import SideBar from "./SideBar";
import DataTable from "./DataTable";
import { mockDataAcc } from "./constants";
import Footer from "./Footer";

const HDP = () => {
    return (
        <Stack>
            <Flex p="xs" pb={40} gap="xs" sx={{ flex: 1 }}>
                <Stack sx={{ flex: 1 }}>
                    <Header />
                    <DataTable data={mockDataAcc} />
                </Stack>
                <SideBar />
            </Flex>
            <Footer />
        </Stack>
    );
};

export default HDP;
