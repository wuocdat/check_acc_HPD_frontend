import { Button, Flex, Mark, Text } from "@mantine/core";

const data = [93505, 0, 0, 24, 23, 2340, 0, 204];

const Footer = () => {
    return (
        <Flex
            align="center"
            justify="space-between"
            pos="fixed"
            bottom={0}
            left={0}
            right={0}
            h={40}
            sx={(theme) => ({
                borderTop: `1px solid ${theme.colors.gray[3]}`,
            })}
        >
            <Text>
                Tổng: <Mark>{data[0]}</Mark> Ok person{" "}
                <Mark fw={700} color="green">
                    {data[1]}
                </Mark>{" "}
                Ok Pro{" "}
                <Mark fw={700} color="green">
                    {data[2]}
                </Mark>{" "}
                Pass Wrong{" "}
                <Mark fw={700} color="red">
                    {data[3]}
                </Mark>{" "}
                Pass Expired{" "}
                <Mark fw={700} color="orange">
                    {data[4]}
                </Mark>{" "}
                No Acc{" "}
                <Mark fw={700} color="gray">
                    {data[5]}
                </Mark>{" "}
                Identify{" "}
                <Mark fw={700} color="blue">
                    {data[6]}
                </Mark>{" "}
                Temporary{" "}
                <Mark fw={700} color="blue">
                    {data[7]}
                </Mark>
            </Text>
            <Button>Reset Number Backup</Button>
        </Flex>
    );
};

export default Footer;
