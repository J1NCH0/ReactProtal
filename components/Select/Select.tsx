import React from 'react';
import styles from './Select.module.css'
import { Select } from 'antd';
import { FaDiscord } from 'react-icons/fa';

const { Option } = Select;

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const options = [
    { label: 'Btn.Davit', value: 'batoniDaviti'},
    { label: 'Gogita', value: 'Gogita' },
];

const App: React.FC = () => (
    <div>
        <Select defaultValue={options[0].value} style={{ width: 145 }} onChange={handleChange} className={styles.borderRadiusSelect}>
            {options.map((option) => (
                <Option key={option.value} value={option.value} disabled={option.disabled}>
                    <div className={styles.selectInput}>
                        <FaDiscord />
                        <span  className={'ant-span'}  label={option.label}>{option.label}</span>
                    </div>
                </Option>
            ))}
        </Select>
    </div>
);

export default App;
