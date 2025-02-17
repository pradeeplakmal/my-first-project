import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Combobox,
  ComboboxAnchor,
  ComboboxBadgeItem,
  ComboboxBadgeList,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxTrigger,
} from "@/components/ui/combobox";

export function MultiSelect({
  list,
  label,
  placeholder,
  selectedItems,
  onValueChange,
}) {
  return (
    <Combobox
      value={selectedItems}
      onValueChange={(val) => {
        onValueChange(val);
      }}
      className="w-full"
      multiple
    >
      {label && <ComboboxLabel>{label}</ComboboxLabel>}
      <ComboboxAnchor className="flex-wrap h-full px-3 py-2 min-h-10">
        <ComboboxBadgeList>
          {selectedItems.map((item) => {
            const option = list.find((trick) => trick.value === item);
            if (!option) return null;

            return (
              <ComboboxBadgeItem
                key={item}
                value={item}
                className="border bg-blue-50"
              >
                {option.label}
              </ComboboxBadgeItem>
            );
          })}
        </ComboboxBadgeList>
        <ComboboxInput
          placeholder={placeholder}
          className="flex-1 h-auto mr-5 min-w-32"
        />
        <ComboboxTrigger className="absolute top-3 right-2">
          <ChevronDown className="w-4 h-4" />
        </ComboboxTrigger>
      </ComboboxAnchor>
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        {list.map((item) => (
          <ComboboxItem key={item.value} value={item.value}>
            {item.label}
          </ComboboxItem>
        ))}
      </ComboboxContent>
    </Combobox>
  );
}
