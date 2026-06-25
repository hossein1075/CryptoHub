"use client";
import React from 'react'
import { Table, Button, Group, Badge } from "@mantine/core";

function TransactionWalletTable() {
    const rows = [
        {
            asset: "Bitcoin",
            symbol: "BTC",
            firstWordName: "B",
            color: "bg-amber-500",
            type: "خرید",
            amount: "0.25 BTC",
            price: "$117,500",
            total: "$29,375",
            date: "1405/05/17",
            status: "تکمیل شده",
        },
        {
            asset: "Ethereum",
            symbol: "ETH",
            firstWordName: "E",
            color: "bg-blue-500",
            type: "فروش",
            amount: "1.50 ETH",
            price: "$3,700",
            total: "$5,550",
            date: "1405/05/16",
            status: "تکمیل شده",
        },
        {
            asset: "Tether",
            symbol: "USDT",
            firstWordName: "T",
            color: "bg-green-500",
            type: "واریز",
            amount: "500 USDT",
            price: "$1",
            total: "$500",
            date: "1405/05/15",
            status: "در انتظار",
        },
        {
            asset: "Solana",
            symbol: "SOL",
            firstWordName: "S",
            color: "bg-purple-500",
            type: "برداشت",
            amount: "12 SOL",
            price: "$185",
            total: "$2,220",
            date: "1405/05/14",
            status: "رد شده",
        },
    ];
    return (
        <Table.ScrollContainer minWidth={800}>
            <Table withRowBorders={false}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th className="headerItem">ارز</Table.Th>
                        <Table.Th className="headerItem">نوع تراکنش</Table.Th>
                        <Table.Th className="headerItem">مقدار</Table.Th>
                        <Table.Th className="headerItem">قیمت</Table.Th>
                        <Table.Th className="headerItem">مبلغ کل</Table.Th>
                        <Table.Th className="headerItem">تاریخ</Table.Th>
                        <Table.Th className="headerItem">وضعیت</Table.Th>
                        <Table.Th className="headerItem">جزئیات</Table.Th>
                        <Table.Th></Table.Th>
                    </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                    {rows.map((item, index) => (
                        <Table.Tr
                            key={`${item.symbol}-${index}`}
                            className={`${index % 2 === 0 ? "bg-white!" : "bg-gray-50!"
                                } transition-all duration-300 hover:shadow-sm!`}
                        >
                            {/* ارز */}
                            <Table.Td>
                                <div className="flex items-center gap-3 justify-start">
                                    <div
                                        className={`${item.color} size-8 rounded-full flexCenter text-white text-10px font-bold shadow-sm`}
                                    >
                                        {item.firstWordName}
                                    </div>

                                    <div className="flex flex-col text-right">
                                        <span className="font-bold text-gray-800 text-sm">
                                            {item.symbol}
                                        </span>

                                        <span className="text-11px text-gray-400 mt-0.5">
                                            {item.asset}
                                        </span>
                                    </div>
                                </div>
                            </Table.Td>

                            {/* نوع تراکنش */}
                            <Table.Td>
                                <Badge
                                    variant="transparent"
                                    className={`font-medium ${item.type === "خرید" || item.type === "واریز"
                                            ? "text-emerald-500!"
                                            : "text-red-500!"
                                        }`}
                                >
                                    {item.type}
                                </Badge>
                            </Table.Td>

                            {/* مقدار */}
                            <Table.Td className="font-medium text-gray-800">
                                {item.amount}
                            </Table.Td>

                            {/* قیمت */}
                            <Table.Td className="font-medium text-gray-800">
                                {item.price}
                            </Table.Td>

                            {/* مبلغ کل */}
                            <Table.Td className="font-medium text-gray-800">
                                {item.total}
                            </Table.Td>

                            {/* تاریخ */}
                            <Table.Td className="text-gray-600 text-sm">
                                {item.date}
                            </Table.Td>

                            {/* وضعیت */}
                            <Table.Td>
                                <Badge
                                    variant="light"
                                    color={
                                        item.status === "تکمیل شده"
                                            ? "green"
                                            : item.status === "در انتظار"
                                                ? "yellow"
                                                : "red"
                                    }
                                >
                                    {item.status}
                                </Badge>
                            </Table.Td>

                            {/* جزئیات */}
                            <Table.Td>
                                <Button
                                    variant="white"
                                    size="xs"
                                    className="text-xs! rounded-full! font-normal! text-gray-600! border-2 border-gray-200!"
                                >
                                    مشاهده
                                </Button>
                            </Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    )
}

export default TransactionWalletTable