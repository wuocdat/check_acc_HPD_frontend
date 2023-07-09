import {
    ScrollArea,
    Table,
    TableProps,
    Title,
    createStyles,
    rem,
} from "@mantine/core";
import { AccHDP } from "../../types";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
    header: {
        position: "sticky",
        top: 0,
        backgroundColor: theme.white,
        transition: "box-shadow 150ms ease",

        "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `${rem(1)} solid ${theme.colors.gray[2]}`,
        },
    },

    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));

interface DataTableProps extends TableProps {
    data: AccHDP[];
}

const columns = ["email", "password", "proxy", "group", "data", "status"];

const DataTable = ({ data, ...props }: DataTableProps) => {
    const { classes, cx, theme } = useStyles();
    const [scrolled, setScrolled] = useState(false);

    const rows = data.map((row, index) => (
        <tr key={index}>
            <td>{row.email}</td>
            <td>{row.password}</td>
            <td>{row.proxy}</td>
            <td>{row.group}</td>
            <td>{row.data}</td>
            <td>{row.status}</td>
        </tr>
    ));

    return (
        <ScrollArea
            h={500}
            onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
            <Table
                miw={700}
                highlightOnHover
                withBorder
                withColumnBorders
                striped
                {...props}
            >
                <thead
                    className={cx(classes.header, {
                        [classes.scrolled]: scrolled,
                    })}
                >
                    <tr style={{ backgroundColor: theme.colors.orange[2] }}>
                        {columns.map((column, index) => (
                            <th key={index}>
                                <Title order={6}>{column}</Title>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
};

export default DataTable;
