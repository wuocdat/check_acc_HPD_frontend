import { Button, Flex, Mark, Text } from "@mantine/core";

const data = [93505, 0, 0, 24, 23, 2340, 0, 204];

const Footer = () => {
    return (
        <Flex
            align="center"
            justify="space-between"
            h={40}
            sx={(theme) => ({
                gridArea: "footer",
                borderTop: `1px solid ${theme.colors.gray[3]}`,
            })}
        >
            <Text>
                Tổng: <Mark>{data[0]}</Mark> Ok person{" "}
                <Mark color="green">{data[1]}</Mark> Ok Pro{" "}
                <Mark color="green">{data[2]}</Mark> Pass Wrong{" "}
                <Mark color="red">{data[3]}</Mark> Pass Expired{" "}
                <Mark color="orange">{data[4]}</Mark> No Acc{" "}
                <Mark color="gray">{data[5]}</Mark> Identify{" "}
                <Mark color="blue">{data[6]}</Mark> Temporary{" "}
                <Mark color="blue">{data[7]}</Mark>
            </Text>
            <Button>Reset Number Backup</Button>
        </Flex>
    );
};

export default Footer;
