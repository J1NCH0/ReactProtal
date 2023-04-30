import React from 'react';
import styles from './Sortselect.module.css'
import { Select } from 'antd';

const { Option } = Select;

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const options = [
    { label: 'ყველა', value: 'All'},
];

const options2 = [
     { label: 'დასრულებული', value: 'Ended' },
]

const App: React.FC = () => (
    <div className={styles.selectsWrapper}>
        <Select defaultValue={options[0].value} style={{ width: 106 }} onChange={handleChange} className={styles.BorderedSelect}>
            {options.map((option) => (
                <Option key={option.value} value={option.value} disabled={option.disabled}>
                    <div className={styles.selectInput}>
                        <span  className={'ant-select-span'}  label={option.label}>{option.label}</span>
                    </div>
                </Option>
            ))}
        </Select>
        <Select defaultValue={options2[0].value} style={{ width: 172 }} onChange={handleChange} className={styles.BorderedSelect}>
            {options2.map((option) => (
                <Option key={option.value} value={option.value} disabled={option.disabled}>
                    <div className={styles.selectInput}>
                        <span  className={'ant-select-span'}  label={option.label}>{option.label}</span>
                    </div>
                </Option>
            ))}
        </Select>
    </div>

);

export default App;
