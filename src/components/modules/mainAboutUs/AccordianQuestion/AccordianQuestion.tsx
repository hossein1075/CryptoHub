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
            <MinusIcon size={18} />
          ) : (
            <PlusIcon size={18} />
          )
        }
      >
        {item.value}
      </Accordion.Control>

      <Accordion.Panel>
        {item.description}
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