import {
    Box,
    Table,
    TableProps,
    Title,
    createStyles,
    rem,
} from "@mantine/core";

import { AccHDP } from "../../types";

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
    const { classes, theme } = useStyles();

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
        <Box sx={{ gridArea: "table", overflow: "auto" }}>
            <Table
                miw={700}
                highlightOnHover
                withBorder
                withColumnBorders
                striped
                {...props}
            >
                <thead className={classes.header}>
                    <tr style={{ backgroundColor: theme.colors.orange[5] }}>
                        {columns.map((column, index) => (
                            <th key={index}>
                                <Title color={theme.black} order={6}>
                                    {column}
                                </Title>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </Box>
    );
};

export default DataTable;
