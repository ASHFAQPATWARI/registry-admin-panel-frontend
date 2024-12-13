import StoreInfo, { IShowStoreInfoDrawerConfig } from "@/components/StoreInfo";
import { useTableScroll } from "@/hooks/useTableScroll";
import { fetchStores } from "@/services/stores.service";
import { ColumnsType, EAdminRole, IStore } from "@/types";
import { getAdminRole } from "@/utils/helper";
import { PlusOutlined, UserAddOutlined } from "@ant-design/icons";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Button, Flex, Image, Table, Tooltip, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ICreateStoreAdminConfig } from "../../stores.types";
import CreateStoreAdmin from "../CreateStoreAdmin";

function StoresTable() {
  const { t } = useTranslation();
  const { tableRef, scroll } = useTableScroll();
  const [openStoreInfo, setOpenStoreInfo] =
    useState<IShowStoreInfoDrawerConfig>({
      open: false,
    });
  const [openStoreAdminCreate, setOpenStoreAdminCreate] =
    useState<ICreateStoreAdminConfig>({
      open: false,
    });

  const isInternalAdmin = getAdminRole() === EAdminRole.INTERNAL_ADMIN;

  const { data, isFetching } = useQuery({
    queryKey: ["stores"],
    queryFn: fetchStores,
    placeholderData: keepPreviousData,
  });

  const columns: ColumnsType<IStore> = [
    {
      title: "",
      dataIndex: "storeLogo",
      key: "images",
      width: 82,
      render: (value) => {
        const logo = value ?? "/public/common/no-image.png";
        return (
          <div
            onClick={(event) => {
              event.stopPropagation(); // Prevent row click event when interacting with the group
            }}
          >
            <Image
              width={50}
              height={50}
              src={`${process.env.NEXT_PUBLIC_ASSET_URL}${logo}`}
              preview={Boolean(value)}
              onClick={(event) => {
                event.stopPropagation(); // Prevent row click event
              }}
              alt=""
            />
          </div>
        );
      },
    },
    {
      title: t("stores.nameEn"),
      dataIndex: "nameEn",
      key: "nameEn",
      align: "start",
    },
    {
      title: t("stores.nameAr"),
      dataIndex: "nameAr",
      key: "nameAr",
      align: "start",
    },
    {
      title: t("stores.locationEn"),
      dataIndex: "locationEn",
      key: "locationEn",
      align: "start",
    },
    {
      title: t("stores.locationAr"),
      dataIndex: "locationAr",
      key: "locationAr",
      align: "start",
    },
    {
      title: t("stores.contact"),
      dataIndex: "contactNumber",
      key: "contactNumber",
      align: "start",
      render: (_, record) => (
        <span>
          {record.countryCode} {record.mobileNumber}
        </span>
      ),
    },
    {
      title: t("stores.email"),
      dataIndex: "email",
      key: "email",
      align: "start",
    },
    {
      title: "",
      dataIndex: "",
      key: "action",
      align: "start",
      render: (_, record) => (
        <Flex gap="small">
          <Tooltip title={t("stores.addStoreAdmin")}>
            <Button
              size="small"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenStoreAdminCreate({
                  storeId: record.id,
                  storeName: record.nameEn,
                  open: true,
                });
              }}
              icon={<UserAddOutlined />}
            />
          </Tooltip>
        </Flex>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div>
          <Typography.Title level={4} className="!m-0">
            {t("stores.stores")}
          </Typography.Title>
        </div>
        {isInternalAdmin && (
          <div>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setOpenStoreInfo({ open: true });
              }}
            >
              {t("stores.createStore")}
            </Button>
          </div>
        )}
      </div>
      <div className="my-6">
        <Table<IStore>
          ref={tableRef}
          dataSource={data?.data}
          columns={columns}
          loading={isFetching}
          sticky={{ offsetHeader: 10 }}
          scroll={scroll}
          rowKey={(row) => row.id}
          onRow={(record) => {
            return {
              onClick: () => {
                setOpenStoreInfo({ open: true, storeId: record.id });
              },
            };
          }}
        />
      </div>
      <StoreInfo
        config={openStoreInfo}
        onClose={() => setOpenStoreInfo({ open: false })}
      />
      <CreateStoreAdmin
        config={openStoreAdminCreate}
        onClose={() => setOpenStoreAdminCreate({ open: false })}
      />
    </>
  );
}

export default StoresTable;
