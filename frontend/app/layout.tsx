import "antd/dist/reset.css";
import "./globals.css";
import type { Metadata } from "next";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import styles from './layout.module.css'
import NawyMenu from "@/components/Menu";

export const dynamic = "force-static"; // Ensures all styles load before rendering


export const metadata: Metadata = {
  title: "Nawy Task"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
      >
        <Layout >
          <Header className={styles['header']}>
            <NawyMenu />
          </Header>
          <Layout>
            <Content className={styles['content']}>{children}</Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
