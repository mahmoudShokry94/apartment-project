"use client";
import { Button, Col, Form, Row, Table, Typography } from "antd";
import styles from "./index.module.css";
import { Apartment } from "@/DomainModel";
import { useEffect, useState } from "react";
import { ResultReport } from "@/types";
import { getApartments } from "@/network";
import Link from "next/link";
import Search from "antd/es/input/Search";



const ApartmentList = () => {
  const [currentApartments, setCurrentApartments] =
    useState<Apartment[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(5);
  const [currentTotalCount, setCurrentTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      title: "#",
      render: (_: any, _1: Apartment, index: number) => ((currentPageIndex - 1) * currentPageSize + index +1),
      width: "3ch",
    },
    {
      title: "Name",
      render: (item: Apartment) => (
        <Link href={`/apartment/${item.id}`}>{item.name}</Link>
      ),
    },
    {
      title: "Property Type",
      dataIndex: "propertyType",
      key: "propertyType",
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "Price (EGP)",
      dataIndex: "price",
      render: (price: number) => <a>{price.toLocaleString("en-us")}</a>,
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    getApartments({
      pagination: { pageIndex: currentPageIndex - 1, pageSize: currentPageSize },
    }).then((response) => {
      setCurrentApartments(response.data.results);
      setCurrentPageIndex(response.data.resultReport.pageIndex + 1);
      setCurrentPageSize(
        response.data.resultReport.pageSize < currentPageSize
          ? currentPageSize
          : response.data.resultReport.pageSize
      );
      setCurrentTotalCount(response.data.resultReport.totalCount);
      setIsLoading(false);
    })

  }, []);
  const handlePaginationChange = async (
    pageIndex: number,
    pageSize: number
  ) => {
    setIsLoading(true);
    const response = await getApartments({
      pagination: { pageIndex: pageIndex - 1, pageSize },
    });

    setCurrentApartments(response.data.results);
    setCurrentPageIndex(response.data.resultReport.pageIndex + 1);
    setCurrentPageSize(
      response.data.resultReport.pageSize < pageSize
        ? pageSize
        : response.data.resultReport.pageSize
    );
    setCurrentTotalCount(response.data.resultReport.totalCount);
    setIsLoading(false);
  };

  const handleFilterChange = async (projectName: string) => {
    setIsLoading(true);
    const response = await getApartments({
      pagination: { pageIndex: currentPageIndex - 1, pageSize: currentPageSize },
      filters: { projectName },
    });

    setCurrentApartments(response.data.results);
    setCurrentPageIndex(response.data.resultReport.pageIndex + 1);
    setCurrentPageSize(
      response.data.resultReport.pageSize < currentPageSize
        ? currentPageSize
        : response.data.resultReport.pageSize
    ); setCurrentTotalCount(response.data.resultReport.totalCount);
    setIsLoading(false);
  };

  return (
    <div className={styles["table-wrapper"]}>
      <Row justify={"space-between"}>
        <Col xs={12} offset={12} style={{ textAlign: "end" }}>
          <Link href="/apartment/new"><Button>Create</Button></Link>
        </Col>
      </Row>
      <Row justify={"space-between"}>
        <Col xs={6}>
          <Form>
            <Typography.Text>Project Name</Typography.Text>
            <Search
              placeholder="Enter Project Name"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={handleFilterChange}
            />
          </Form>
        </Col>
      </Row>
      <Table
        loading={isLoading}
        rowKey={"id"}
        dataSource={currentApartments ?? []}
        columns={columns}
        rootClassName={styles["table"]}
        bordered
        pagination={{
          pageSize: currentPageSize,
          current: currentPageIndex,
          total: currentTotalCount,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20, 50, 100],
          onChange: handlePaginationChange,
        }}
        scroll={{ x: 800 }}
      />
    </div>
  );
};

export default ApartmentList;
