import { Group, Tabs, Title } from "@mantine/core";
import { useState } from "react";
import { IconHome2, IconLayoutDashboard } from "@tabler/icons-react";

import HDP from "./components/HDP";

function App() {
    const [activeTab, setActiveTab] = useState<string | null>("hdp");

    return (
        <Tabs
            value={activeTab}
            onTabChange={setActiveTab}
            h="100vh"
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Tabs.List>
                <Tabs.Tab value="hdp">
                    <Group spacing="xs">
                        <IconHome2 size={20} /> <Title order={6}>HDP</Title>
                    </Group>
                </Tabs.Tab>
                <Tabs.Tab value="view">
                    <Group spacing="xs">
                        <IconLayoutDashboard size={20} />
                        <Title order={6}>View</Title>
                    </Group>
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="hdp" sx={{ flex: 1, overflow: "hidden" }}>
                <HDP />
            </Tabs.Panel>
            <Tabs.Panel value="view">Second panel</Tabs.Panel>
        </Tabs>
    );
}

export default App;
