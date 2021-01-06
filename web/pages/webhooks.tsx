import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Button, Modal, Checkbox, Input, Typography, Tooltip, Select } from 'antd';
import { DeleteOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

import format from 'date-fns/format'

import {
    fetchData,
    DELETE_WEBHOOK,
    CREATE_WEBHOOK,
    WEBHOOKS,
} from "../utils/apis";

const availableEvents = {
    'CHAT': { name: 'Chat messages', description: 'When a user sends a chat message' },
    'USER_JOINED': { name: 'User joined', description: 'When a user joins the chat'},
    'NAME_CHANGE': { name: 'User name changed', description: 'When a user changes their name'},
    'VISIBILITY-UPDATE': { name: 'Message visibility changed', description: 'When a message visibility changes, likely due to moderation'},
    'STREAM_STARTED': {name: 'Stream started', description: 'When a stream starts'},
    'STREAM_STOPPED': {name: 'Stream stopped', description: 'When a stream stops'}

};

function convertEventStringToTag(eventString) {
    if (!eventString || !availableEvents[eventString]) {
        return null;
    }

    const event = availableEvents[eventString];
    const color = 'purple';

    return (
        <Tooltip key={eventString} title={event.description}>
            <Tag color={color} >
                {event.name}
            </Tag>
        </Tooltip>
    );
}

function NewWebhookModal(props) {
    var selectedEvents = [];
    const [name, setName] = useState('');

    const events = Object.keys(availableEvents).map(function (key) {
        return { value: key, label: availableEvents[key].description }
    });


    function onChange(checkedValues) {
        selectedEvents = checkedValues
    }

    function save() {
        props.onOk(name, selectedEvents)
    }

    return (
        <Modal title="Create New Webhook" visible={props.visible} onOk={save} onCancel={props.onCancel}>
            <div><Input value={name} placeholder="https://myserver.com/webhook" onChange={(input) => setName(input.currentTarget.value)} /></div>

            <p>
                Select the events that will be sent to this webhook.
            </p>
            <Checkbox.Group options={events} onChange={onChange} />
        </Modal>
    )
}

export default function Webhooks() {
    const [webhooks, setWebhooks] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const columns = [
        {
            title: '',
            key: 'delete',
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={() => handleDelete(record.id)} icon={<DeleteOutlined />} />
                </Space>
            )
        },
        {
            title: 'URL',
            dataIndex: 'url',
            key: 'url',
        },
        {
            title: 'Events',
            dataIndex: 'events',
            key: 'events',
            render: events => (
                <>
                    {events.map(event => {
                        return convertEventStringToTag(event);
                    })}
                </>
            ),
        },
        {
            title: 'Last Used',
            dataIndex: 'lastUsed',
            key: 'lastUsed',
            render: (lastUsed) => {
                if (!lastUsed) {
                    return 'Never';
                }
                const dateObject = new Date(lastUsed);
                return format(dateObject, 'P p');
            },
        },
    ];

    const getWebhooks = async () => {
        try {
            const result = await fetchData(WEBHOOKS);
            setWebhooks(result);
        } catch (error) {
            handleError(error);
        }
    };

    useEffect(() => {
        getWebhooks();
    }, []);

    async function handleDelete(id) {
        try {
            const result = await fetchData(DELETE_WEBHOOK, { method: 'POST', data: { id: id } });
            getWebhooks();
        } catch (error) {
            handleError(error);
        }
    }

    async function handleSave(url: string, events: string[]) {
        try {
            const newHook = await fetchData(CREATE_WEBHOOK, { method: 'POST', data: { url: url, events: events } });
            setWebhooks(webhooks.concat(newHook));
        } catch (error) {
            handleError(error);
        }
    }

    function handleError(error) {
        console.error("error", error);
        alert(error);
    }

    const showCreateModal = () => {
        setIsModalVisible(true);
    };

    const handleModalSaveButton = (url, events) => {
        setIsModalVisible(false);
        handleSave(url, events);
    };

    const handleModalCancelButton = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Title>Webhooks</Title>
            <Paragraph>
                A webhook is a callback made to an external API in response to an event.  These are endpoints that live outside of Owncast and run code who wants to be made aware of events that take place on your server.
            </Paragraph>
            <Paragraph>
                Read more about how to use webhooks at _some documentation here_.
            </Paragraph>

            <Table rowKey="id" columns={columns} dataSource={webhooks} pagination={false} />
            <Button onClick={showCreateModal}>Create Webhook</Button>
            <NewWebhookModal visible={isModalVisible} onOk={handleModalSaveButton} onCancel={handleModalCancelButton} />
        </div>
    );
}
