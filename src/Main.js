import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload } from 'antd';
import {useEffect, useState} from 'react';
import {read, utils} from 'xlsx';
import { Table, Select } from "antd";



const Main = ()=>{
    const [datas, setDatas] = useState({});

    const handleUpload = async (file)=>{
        console.log(file)

        const ab = await file.arrayBuffer();
        const wb = read(ab);
        const ws = wb.Sheets[wb.SheetNames[0]];
        
        const data = utils.sheet_to_json(ws, {header:1});

        console.log(data);
        let tempData = {
            // A1A
            A1A: data.slice(12,38),
            // A1B
            A1B: data.slice(42,53),
            // A2
            A2:  data.slice(59,74),
            // A3
            A3: data.slice(80,96),
            // A4
            A4: data.slice(101,117),
            // A5
            A5: data.slice(122,137),
            // A6
            A6: data.slice(143,149),
            // A7
            A7: data[153],
            // A8
            A8: data.slice(159,165),
            // A9
            A9: data.slice(170,174),
            //A10
            A10: data.slice(179,185),
            //A11
            A11: data.slice(190,201),   
        };
        console.log(tempData);


        setDatas(tempData);

    };

    return (
        <>
        <Space
        direction="horizontal"
        style={{
        width: ''
        }}
        size="large"
        >
            <Upload
                action="https://localhost:3000/"
                listType="text"
                maxCount={1}
                accept='.xlsx'
                beforeUpload={handleUpload}
            >
                <Button icon={<UploadOutlined />}>Upload di sini</Button>
            </Upload>
        </Space>

        <div id='Laporan'>
        <p>Pilih data : </p>
        <Select
            defaultValue="A1A"
            style={{
                width: 120,
            }}
            onChange={()=>{

            }}
            options={[
                {
                value: 'A1A',
                label: 'A1A',
                },
                {
                    value: 'A1B',
                    label: 'A1B',
                    },
                {
                value: 'A2',
                label: 'A2',
                },
                {
                value: 'A3',
                label: 'A3',
                },
                {
                value: 'A4',
                label: 'A4',
                },
                {
                    value: 'A5',
                    label: 'A5',
                },
                {
                value: 'A6',
                label: 'A6',
                },
                {
                    value: 'A7',
                    label: 'A7',
                },
                {
                value: 'A8',
                label: 'A8',
                },
                {
                    value: 'A9',
                    label: 'A9',
                },
                {
                    value: 'A10',
                    label: 'A10',
                },
                {
                value: 'A11',
                label: 'A11',
                }
            ]}
        />
        <Table virtual scroll={{ x: 2000, y: 500 }}></Table>
        </div>
    </>
    )
}

export default Main;