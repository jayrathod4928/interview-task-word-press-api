"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '@mui/material';
import { AppForm } from '@/components/FormProvider/AppForm';
import { FieldGroup } from '@/components/FormProvider/FieldGroup';
import styles from './OrderForm.module.scss';

const FormInput = (props: any) => (
    <div className={styles.inputWrapper}>
        <input {...props} autoComplete="off" />
        {props.error && <p className={styles.errorText}>{props.error.message}</p>}
    </div>
);

const FormSelect = ({ value, onChange, placeholder, options, error }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) setIsOpen(false);
        };
        document.addEventListener('mousedown', clickOutside);
        return () => document.removeEventListener('mousedown', clickOutside);
    }, []);

    return (
        <div className={styles.selectWrapper} ref={containerRef}>
            <div
                className={`${styles.selectHeader} ${isOpen ? styles.active : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{value ? options.find((o: any) => o.value === value)?.label : placeholder}</span>
                <span className={styles.chevron}></span>
            </div>
            {isOpen && (
                <ul className={styles.optionsList}>
                    {options.map((opt: any) => (
                        <li key={opt.value} className={styles.optionItem} onClick={() => { onChange(opt.value); setIsOpen(false); }}>
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
            {error && <p className={styles.errorText}>{error.message}</p>}
        </div>
    );
};

const FormTextarea = (props: any) => (
    <div className={styles.inputWrapper}>
        <textarea {...props} />
        {props.error && <p className={styles.errorText}>{props.error.message}</p>}
    </div>
);

export default function OrderNowPage() {
    const form = useForm({ defaultValues: { name: '', designNumber: '', email: '', phone: '', message: '' } });

    const formFields = [
        { name: 'name', label: 'Name', md: 6, rules: { required: 'Name is required' }, renderer: FormInput },
        {
            name: 'designNumber', label: 'Custom Design Number', md: 6, rules: { required: 'Required' },
            renderer: FormSelect, fieldProps: { placeholder: 'Choose From Above', options: [
                    { value: '01', label: '01' }, { value: '02', label: '02' }, { value: '03', label: '03' }, { value: '04', label: '04' }
                ]}
        },
        { name: 'email', label: 'Email', md: 6, rules: { required: 'Email is required' }, renderer: FormInput },
        { name: 'phone', label: 'Phone number', md: 6, rules: { required: 'Phone is required' }, renderer: FormInput },
        { name: 'message', label: 'Message', xs: 12, rules: { required: 'Message is required' }, renderer: FormTextarea }
    ];

    return (
        <div className={styles.orderSection}>
            <Typography variant="h3" className={styles.title}>Order Now</Typography>
            <br/>
            <AppForm form={form} onSubmit={(data: any) => console.log(data)} submitButtonText="Send">
                <FieldGroup formFields={formFields} displayLabel fieldSize="medium" />
            </AppForm>
        </div>
    );
}