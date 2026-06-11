"use client";
import { Table, Button, Group, Badge } from "@mantine/core";

export default function CryptoTable() {
    const rows = [
        {
            name: "Bitcoin",
            nameE: "BTC",
            firstWordName: "B",
            nameP: "بیت کوین",
            price: "117,500",
            change: "2.34",
            color: "bg-amber-500",
            svg: 'M0,20 Q10,25 20,15 T40,20 T60,10 T80,15 T100,5',
            buy: "118,000",
            sell: "117,000",
        },
        {
            name: "Ethereum",
             nameE: "ETH",
            firstWordName: "E",
            nameP: "اتریوم",
            price: "3,700",
            change: "0.25",
            color: "bg-blue-500",
            svg: 'M0,20 Q10,25 20,15 T40,20 T60,10 T80,15 T100,5',
            buy: "3,720",
            sell: "3,680",
        },
    ];


    return (
        <Table striped highlightOnHover withTableBorder>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th className="text-gray-400 font-medium text-xs">نام ارز</Table.Th>
                    <Table.Th>قیمت به دلار</Table.Th>
                    <Table.Th>تغییر روزانه</Table.Th>
                    <Table.Th>خرید از ما</Table.Th>
                    <Table.Th>فروش به ما</Table.Th>
                    <Table.Th>نمودار هفتگی</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
                {rows.map((item) => (
                    <Table.Tr key={item.name}>
                        <Table.Td>
                            <div>
                                <div className={`${item.color}`}>
                                  {item.firstWordName}
                                </div>
                                <div>
                                    <div>
                                        <span>{item.nameE}</span>
                                        <span>{item.name}</span>
                                    </div>
                                    <span>{item.nameP}</span>
                                </div>
                            </div>
                        </Table.Td>
                        <Table.Td>
                            <span>{item.price}</span>
                        </Table.Td>

                        <Table.Td>
                            <Badge variant="transparent" color={parseFloat(item.change) > 0.5 ? 'green' : 'red'}>

                                <span>{item.change}%</span>
                            </Badge>
                        </Table.Td>

                        <Table.Td>
                            <span>{item.buy}</span>
                            <div>تومان</div>
                        </Table.Td>
                        <Table.Td>
                            <span>{item.sell}</span>
                            <div>تومان</div>
                        </Table.Td>

                        <Table.Td>

                            <span>
                                <svg
                                    className="w-16 h-6"
                                    viewBox="0 0 100 30"
                                    fill="none"
                                    stroke="#cbd5e1"
                                    strokeWidth={1.5}
                                >
                                    <path d={item.svg} />
                                </svg>
                            </span>
                        </Table.Td>

                        <Table.Td>
                                <Button size="xs">
                                    خرید و فروش
                                </Button>
                        </Table.Td>
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
    );
}