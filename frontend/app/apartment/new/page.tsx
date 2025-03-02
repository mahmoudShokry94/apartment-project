"use client";
import { Button, Card, Col, Form, Input, InputNumber, Row, Select } from "antd";
import styles from "./index.module.css";
import { Apartment } from "@/DomainModel";
import { useState } from "react";
import { insertApartment } from "@/network";
import { useRouter } from "next/navigation";

const NewApartment = () => {
    const [isLoading,setIsLoading]= useState(false)
    const router = useRouter();

    const handleOnSubmit = async(payload: Pick<Apartment, 'name' | 'projectName' | 'area' | 'floorNumber' | 'price' | 'propertyType'>) => { 
        setIsLoading(true)
        const response = await insertApartment(payload as unknown as Apartment)
        console.log({response})

        setIsLoading(false)
        if(response.data?.apartmentId){
            console.log(response.data?.apartmentId)
            router.push(`/apartment/${response.data.apartmentId}`)
        }
    };

    return (
        <Card title="Create New Apartment" className={styles["card"]}>
            <Form onFinish={handleOnSubmit} layout="inline" initialValues={{propertyType:"Apartment"}}>
                <Form.Item name="name" rules={[{ required: true }]} label="Name" layout="vertical">
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="projectName" rules={[{ required: true }]} label="Project Name" layout="vertical">
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="area" rules={[{ required: true }]} label="Area" layout="vertical">
                    <InputNumber type="number"/>
                </Form.Item>
                <Form.Item name="floorNumber" rules={[{ required: true }]} label="Floor" layout="vertical">
                    <InputNumber type="number"/>
                </Form.Item>
                <Form.Item name="price" rules={[{ required: true }]} label="Price" layout="vertical">
                    <InputNumber type="number"/>
                </Form.Item>
                <Form.Item name="propertyType" label="Property Type" layout="vertical">
                    <Select
                        style={{ width: 120 }}
                        options={[
                            { value: "Apartment", label: "Apartment" },
                            { value: "Villa", label: "Villa" },
                            { value: "Twin House", label: "Twin House" },
                        ]}
                    />
                </Form.Item>

                <Row justify={"end"} className={styles['button-container']}>
                    <Col xs={12} offset={12}>
                        <Button type="primary" htmlType="submit" loading={isLoading}>Create</Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default NewApartment;
