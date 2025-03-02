
import { Card, Col, Divider, Row, Tag } from "antd"
import styles from "./index.module.css"
import { getApartmentById } from "@/network"

const ApartmentDetails = async ({
    params,
}: {
    params: { id: string }
}) => {

    const apartmentId = params.id
    const { data: apartment } = await getApartmentById(apartmentId)

    if(!Object.keys(apartment).length){
        return <div>Invalid Apartment id</div>
    }
    return <Card title="Apartment Details" className={styles['card']} extra={<Tag className={styles['tag']} color="success">{apartment.propertyType}</Tag>}>
        <Row>
            <Col span={12} className={styles['text-start']}>
                <p>Apartment Name:</p>
            </Col>
            <Col span={12} className={styles['text-end']}>
                <p>{apartment?.name??""}</p>
            </Col>
        </Row>
        <Divider />
        <Row>
            <Col span={12} className={styles['text-start']}>
                <p>Project Name:</p>
            </Col>
            <Col span={12} className={styles['text-end']}>
                <p>{apartment?.projectName??""}</p>
            </Col>
        </Row>
        <Divider />
        <Row>
            <Col span={12} className={styles['text-start']}>
                <p>Area:</p>
            </Col>
            <Col span={12} className={styles['text-end']}>
                <p>{apartment?.area??""} &#13216;</p>
            </Col>
        </Row>
        <Divider />
        <Row>
            <Col span={12} className={styles['text-start']}>
                <p>Floor:</p>
            </Col>
            <Col span={12} className={styles['text-end']}>
                <p>{apartment?.floorNumber??""}</p>
            </Col>
        </Row>
        <Divider />
        <Row>
            <Col span={12} className={styles['text-start']}>
                <p>Price:</p>
            </Col>
            <Col span={12} className={styles['text-end']}>
                <p>{apartment?.price?.toLocaleString("en-us")??""} EGP</p>
            </Col>
        </Row>
    </Card>
}

export default ApartmentDetails