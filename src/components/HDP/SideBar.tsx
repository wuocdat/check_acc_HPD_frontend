import {
    Button,
    Divider,
    Group,
    NumberInput,
    Radio,
    Stack,
    Title,
} from "@mantine/core";
import {
    IconFileInvoice,
    IconNotes,
    IconPlayerPlayFilled,
    IconPlayerStopFilled,
} from "@tabler/icons-react";
import { useState } from "react";

const WIN_VALUE = "win";
const ANDROID_VALUE = "android";
const IOS_VALUE = "ios";

const SideBar = () => {
    const [value, setValue] = useState(IOS_VALUE);

    return (
        <Stack sx={{ gridArea: "sidebar" }}>
            <Stack spacing="xs">
                <Divider label={<Title order={6}>Chức năng</Title>} />
                <Button
                    leftIcon={<IconPlayerPlayFilled />}
                    variant="outline"
                    color="green"
                >
                    Băt đầu
                </Button>
                <Button
                    leftIcon={<IconPlayerStopFilled />}
                    variant="outline"
                    color="red"
                >
                    Dừng lại
                </Button>
            </Stack>
            <Stack spacing="xs">
                <Divider label={<Title order={6}>Cài đặt chung</Title>} />
                <NumberInput
                    min={0}
                    size="xs"
                    defaultValue={1}
                    label="Số luồng:"
                />
                <NumberInput
                    min={0}
                    size="xs"
                    defaultValue={1}
                    label="Delay giữa 2 session (giây):"
                />
                <NumberInput
                    min={0}
                    size="xs"
                    defaultValue={1}
                    label="Số lần re_login_session:"
                />
            </Stack>
            <Stack spacing="xs">
                <Divider label={<Title order={6}>Cài đặt UA</Title>} />
                <Radio.Group value={value} onChange={setValue} size="xs">
                    <Group position="apart">
                        <Radio value={WIN_VALUE} label="Win" />
                        <Radio value={ANDROID_VALUE} label="Android" />
                        <Radio value={IOS_VALUE} label="IOS" />
                    </Group>
                </Radio.Group>
            </Stack>
            <Stack spacing="xs">
                <Divider label={<Title order={6}>Cài đặt Proxy</Title>} />
                <Button leftIcon={<IconNotes size={20} />} variant="outline">
                    List Proxy
                </Button>
            </Stack>
            <Stack spacing="xs">
                <Divider label={<Title order={6}>Output</Title>} />
                <Button
                    leftIcon={<IconFileInvoice size={20} />}
                    variant="outline"
                >
                    Mở File Output
                </Button>
            </Stack>
        </Stack>
    );
};

export default SideBar;
