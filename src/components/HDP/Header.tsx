import {
    Button,
    Flex,
    Group,
    Select,
    TextInput,
    Title,
    rem,
    useMantineTheme,
} from "@mantine/core";
import { IconFileInvoice, IconRepeat } from "@tabler/icons-react";
import { ReactNode, useState } from "react";

interface LeftLabelInputProps {
    label: string;
    input: ReactNode;
    flex?: number;
}

const LeftLabelInput = ({ flex, label, input }: LeftLabelInputProps) => {
    return (
        <Group spacing={rem(4)} sx={{ flex: flex }}>
            <Title order={6}>{label}</Title>
            {input}
        </Group>
    );
};

const Header = () => {
    const theme = useMantineTheme();

    const [value, setValue] = useState<string | null>("react");

    return (
        <Flex
            align="center"
            gap="xs"
            pb="xs"
            sx={{ borderBottom: `1px solid ${theme.colors.gray[3]}` }}
        >
            <LeftLabelInput label="Search:" input={<TextInput size="xs" />} />
            <LeftLabelInput
                label="Group:"
                input={
                    <Select
                        value={value}
                        onChange={setValue}
                        data={[
                            { value: "react", label: "React" },
                            { value: "ng", label: "Angular" },
                            { value: "svelte", label: "Svelte" },
                            { value: "vue", label: "Vue" },
                        ]}
                        size="xs"
                    />
                }
            />
            <LeftLabelInput
                flex={1}
                label="Path File Account:"
                input={<TextInput size="xs" sx={{ flex: 1 }} />}
            />
            <Button leftIcon={<IconRepeat size={rem(20)} />} variant="outline">
                Đổi File Acc
            </Button>
            <Button
                leftIcon={<IconFileInvoice size={rem(20)} />}
                variant="outline"
            >
                Mở File Acc
            </Button>
        </Flex>
    );
};

export default Header;
