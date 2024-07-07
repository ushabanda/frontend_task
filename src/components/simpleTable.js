import { React } from "react";
import { Table, Button,Modal } from 'antd';
import 'antd/dist/antd.css';

const { confirm } = Modal;
const SimpleTable = ({ dataSource, onDelUser,onEditUser }) => {

  const confirmDelete = (id) => {
    confirm({
      title: 'Do you want to delete this user?',
      content: 'This cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onDelUser(id);
      },
    });
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div>
        <Button type="primary" onClick={() => onEditUser(record)} className="edit-btn">Edit</Button>
        <Button type="primary" danger onClick={()=>confirmDelete(record.id)} >Delete</Button>
        </div>
      )
    },
  ];
  return (
    <div className="header-box">
      {dataSource.length ? (
        <Table columns={columns} dataSource={dataSource} rowKey="id" />
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
