"use client";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react";
import { Accordion } from "@mantine/core";
import { useState } from "react";

function AccordianQuestion() {
  const [value, setValue] = useState("سوال اول");

  const data = [
    {
      value: "سوال اول",
      description: "پاسخ سوال اول",
    },
    {
      value: "سوال دوم",
      description: "پاسخ سوال دوم",
    },
  ];

  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control
        chevron={
          value === item.value ? (
            <div className="mantine-Accordion-item-parent-icon flexCenter">
              <MinusIcon size={20} className="mantine-Accordion-item-icon" />
            </div>
          ) : (
            <div className="mantine-Accordion-item-parent-icon flexCenter">
              <PlusIcon size={20} className="mantine-Accordion-item-icon" />
            </div>
          )
        }
      >
        {item.value}
      </Accordion.Control>

      <Accordion.Panel>
        <p className="font-lahze text-13px leading-7 font-medium text-gray-500">
        {item.description}
        </p>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      value={value}
      onChange={setValue}
      dir="rtl"
    >
      {items}
    </Accordion>
  );
}

export default AccordianQuestion