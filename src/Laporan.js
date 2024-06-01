import { Table, Select } from "antd";
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

const Laporan = ()=>{
    
    return (
        <div id='Laporan'>
            <p>Pilih data : </p>
            <Select
                defaultValue="A1A"
                style={{
                    width: 120,
                }}
                onChange={handleChange}
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
    )
}

export default Laporan;