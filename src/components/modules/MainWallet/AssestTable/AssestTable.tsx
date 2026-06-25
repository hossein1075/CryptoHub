"use client";
import React from 'react'
import { Table, Button, Group, Badge } from "@mantine/core";

function AssestTable() {
    const rows = [
        {
            asset: "Bitcoin",
            firstWordName: 'B',
            color: 'bg-amber-500',
            symbol: "BTC",
            amount: "0.85",
            currentPrice: "$117,500",
            totalValue: "$99,875",
            change24h: "+2.34%",
            profitLoss: "+$4,250",
        },
        {
            asset: "Ethereum",
            firstWordName: 'E',
            color: "bg-blue-500",
            symbol: "ETH",
            amount: "3.2",
            currentPrice: "$3,700",
            totalValue: "$11,840",
            change24h: "+0.25%",
            profitLoss: "-$120",
        },
    ];
    return (
        <Table.ScrollContainer minWidth={800}>
            <Table withRowBorders={false}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th className="headerItem">دارایی</Table.Th>
                        <Table.Th className="headerItem">مقدار</Table.Th>
                        <Table.Th className="headerItem">قیمت فعلی</Table.Th>
                        <Table.Th className="headerItem">ارزش کل</Table.Th>
                        <Table.Th className="headerItem">تغییرات 24 ساعت</Table.Th>
                        <Table.Th className="headerItem">سود/زیان</Table.Th>
                        <Table.Th className="headerItem">عملیات</Table.Th>

                        <Table.Th></Table.Th>
                    </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                    {rows.map((item, index) => (
                        <Table.Tr
                            key={item.symbol}
                            className={`${index % 2 === 0 ? "bg-white!" : "bg-gray-50!"
                                } transition-all duration-300 hover:shadow-sm!`}
                        >
                            {/* دارایی */}
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

                            {/* مقدار */}
                            <Table.Td className="font-medium text-gray-800">
                                {item.amount}
                            </Table.Td>

                            {/* قیمت فعلی */}
                            <Table.Td className="font-bold text-gray-800">
                                {item.currentPrice}
                            </Table.Td>

                            {/* ارزش کل */}
                            <Table.Td className="font-medium text-gray-800">
                                {item.totalValue}
                            </Table.Td>

                            {/* تغییرات 24 ساعت */}
                            <Table.Td>
                                <Badge
                                    variant="transparent"
                                    className={`${item.change24h.includes("+")
                                            ? "text-emerald-500!"
                                            : "text-red-500!"
                                        } text-sm font-medium`}
                                >
                                    {item.change24h}
                                </Badge>
                            </Table.Td>

                            {/* سود / زیان */}
                            <Table.Td>
                                <span
                                    className={`font-medium ${item.profitLoss.includes("+")
                                            ? "text-emerald-500"
                                            : "text-red-500"
                                        }`}
                                >
                                    {item.profitLoss}
                                </span>
                            </Table.Td>

                            {/* عملیات */}
                            <Table.Td>
                                <Button
                                    variant="white"
                                    size="xs"
                                    className="text-xs! rounded-full! font-normal! text-gray-600! border-2 border-gray-200!"
                                >
                                    مدیریت
                                </Button>
                            </Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    )
}

export default AssestTable