"use client";
import { Menu as AntdesignMenu } from "antd";
import { usePathname, useRouter } from "next/navigation";

export const NawyMenu = () => {
    const router = useRouter()
    const pathname = usePathname();

  return (
    <AntdesignMenu
      mode="horizontal"
      selectedKeys={[pathname]}
      items={[
        {
          key: "/",
          label: `Home`,
          onClick: () => router.push("/"),
        },
      ]}
    />
  );
};

export default NawyMenu