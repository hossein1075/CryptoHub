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

        <Table.ScrollContainer minWidth={800}>
            <Table withRowBorders={false}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th className="headerItem">نام ارز</Table.Th>
                    <Table.Th className="headerItem">قیمت به دلار</Table.Th>
                    <Table.Th className="headerItem">تغییر روزانه</Table.Th>
                    <Table.Th className="headerItem">خرید از ما</Table.Th>
                    <Table.Th className="headerItem">فروش به ما</Table.Th>
                    <Table.Th className="headerItem">نمودار هفتگی</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
                {rows.map((item,index) => (
                    <Table.Tr key={item.name} className={`${index % 2 === 0 ? 'bg-white!' : 'bg-gray-50!'} transition-all duration-300 hover:shadow-sm!`}>
                        <Table.Td>
                            <div className="flex items-center gap-3 justify-start">
                                <div className={`${item.color} size-8 rounded-full flexCenter text-white text-10px font-bold shadow-sm`}>
                                  {item.firstWordName}
                                </div>
                                <div className="flex flex-col text-right">
                                    <div className="flex items-center gap-1">
                                        <span className="font-bold text-gray-800 text-sm">{item.nameE}</span>
                                        <span className="text-xs text-gray-400">{item.name}</span>
                                    </div>
                                    <span className="text-11px text-gray-400 mt-0.5">{item.nameP}</span>
                                </div>
                            </div>
                        </Table.Td>
                        <Table.Td className="font-bold text-gray-800 text-15px">
                            {item.price}
                        </Table.Td>

                        <Table.Td >
                            <Badge variant="transparent" className={`${parseFloat(item.change) > 0.5 ? 'text-emerald-400!' : 'text-pink-300!'} text-sm font-medium`}>

                                {item.change}%
                            </Badge>
                        </Table.Td>

                        <Table.Td className="text-center text-sm font-medium">
                            <span>{item.buy}</span>
                            <div className="text-10px text-gray-400 mt-0.5">تومان</div>
                        </Table.Td>
                        <Table.Td className="text-center text-sm font-medium">
                            <span>{item.sell}</span>
                            <div className="text-10px text-gray-400 mt-0.5">تومان</div>
                        </Table.Td>

                        <Table.Td >

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

                        <Table.Td >
                                <Button variant="white" size="xs" className="text-xs! rounded-full! font-normal! text-gray-600! border-2 border-gray-200!">
                                    خرید و فروش
                                </Button>
                        </Table.Td>
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
        </Table.ScrollContainer>
    );
}