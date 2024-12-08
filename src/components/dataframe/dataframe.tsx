import React, { FC } from "react";
import { Table } from "antd";

interface DataframeProps {
    data: {
        dataSource: Array<Record<string, any> & { key: string }>
        columns: Array<{
            key: string
            title: string
            dataIndex: string
        }>
    }
}

export const Dataframe: FC<DataframeProps> = (props) => {
    const {
        data: {
            columns,
            dataSource
        }
    } = props;

    return <Table dataSource={dataSource} columns={columns} size="small" pagination={false} />
}