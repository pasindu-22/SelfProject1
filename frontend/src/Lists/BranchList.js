import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        showSorterTooltip: {
            target: 'full-header',
        },
    },
    {
        title: 'Name',
        dataIndex: 'name',
        showSorterTooltip: {
            target: 'full-header',
        },
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Location',
        dataIndex: 'location',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Contact Info',
        dataIndex: 'contact_info',
        showSorterTooltip: {
            target: 'full-header',
        },
    },
    {
        title: 'Admin ID',
        dataIndex: 'admin_id',
        showSorterTooltip: {
            target: 'full-header',
        },
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        showSorterTooltip: {
            target: 'full-header',
        },
    },
    {
        title: 'Updated At',
        dataIndex: 'updatedAt',
        showSorterTooltip: {
            target: 'full-header',
        },
    },
];

const BranchList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend using Axios
        axios.get('http://localhost:5000/api/admins/branches')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                alert('Failed to fetch data');
            });
    }, []);

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div style={{display:"flex",flexDirection:"row",flex:3, height:"10vh", width:"auto", background:"#b7defb"}}>
        <Table size='large'
            columns={columns}
            dataSource={data}
            onChange={onChange}
            rowKey="id" 
            showSorterTooltip={{
                target: 'sorter-icon',
            }}
        />
        </div>
    );
};


export default BranchList;
