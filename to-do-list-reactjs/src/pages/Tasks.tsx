/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Table, Button, Space } from 'antd';
import type { ColumnsType, TablePaginationConfig, TableProps } from 'antd/es/table';
import type { SorterResult } from 'antd/es/table/interface';
import { useAuthStore } from '../stores/useAuthStore';
import { useNavigate, Link } from 'react-router-dom';
import { apiClient } from '../libraries/api-client';

interface Task {
  id: string;
  title: string;
  description: string;
  assignee_id: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: 'ascend' | 'descend' | undefined;
  filters?: Record<string, any>;
}

export default function Tasks() {
  const { loggedInUser, logOut } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const hasRole = (roleName: string) => {
    return loggedInUser?.roles?.some((r: any) => r.name === roleName);
  };

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const tasks = (await apiClient.get('/workspaces/tasks')) as Task[];
      setData(tasks);
      setTableParams((prev) => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          total: tasks.length, // hoặc từ backend nếu có pagination
        },
      }));
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [loggedInUser, navigate]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTableChange: TableProps<Task>['onChange'] = (pagination, filters, sorter) => {
      const order = (sorter as SorterResult<Task>).order;
    setTableParams({
      pagination,
      filters,
      sortField: (sorter as SorterResult<Task>).field as string,
       sortOrder: order === 'ascend' || order === 'descend' ? order : undefined,
    });
  };

  const columns: ColumnsType<Task> = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: true,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Assignee',
      dataIndex: 'assignee_id',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => alert(`Edit ${record.id}`)}>
            Edit
          </Button>
          <Link to={`/task-isr/${record.id}`}>View</Link>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center border">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">📋 Tasks Dashboard</h2>
          <p className="text-sm text-gray-500">View and manage all your assigned tasks</p>
        </div>
        <div className="space-x-3">
          {hasRole('Administrators') && (
            <Button type="primary" onClick={() => navigate('/add-tasks')}>
              + Add Task
            </Button>
          )}
          <Button
            onClick={() => {
              logOut();
              navigate('/login');
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <Table<Task>
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
        bordered
      />
    </div>
  );
}
