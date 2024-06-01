import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload } from 'antd';

const Main = ()=>{

    return (
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
                beforeUpload={(file)=>{

                return false;
                }}
            >
                <Button icon={<UploadOutlined />}>Upload di sini</Button>
            </Upload>
        </Space>
    )
}

export default Main;