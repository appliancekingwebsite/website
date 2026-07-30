"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/content";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="faq-list">
      {items.map((item, index) => (
        <Accordion.Item value={`faq-${index}`} key={item.question}>
          <Accordion.Header>
            <Accordion.Trigger>
              <span>{item.question}</span>
              <Plus aria-hidden="true" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <div>{item.answer}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
