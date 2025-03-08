import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { CodeComponentMeta } from "@plasmicapp/host";


import { cn } from "@/lib/utils";
import React from "react";
import moment from "jalali-moment";

export const DatePicker = ({
  onChange,
  onMonthChange,
  onYearChange,
  locale,
  holidays = [],
  value,
  mode,
  values = [],
  dayCell,
  customDayCell,
}: any) => {
  return (
    <>
      <Calendar
        monthYearSeparator="|"
        multiple={mode === "multiple"}
        value={
          mode === "multiple"
            ? (Array.isArray(values) ? values : [values]).map(
                (item: any) => item * 1000
              )
            : value * 1000
        }
        onChange={(value: any) => {
          Array.isArray(value)
            ? onChange(value.map((item) => item.unix))
            : onChange(value.unix);
        }}
        onMonthChange={(value: DateObject) => {
          onMonthChange(value.month);
        }}
        onYearChange={(value: DateObject) => {
          onYearChange(value.year);
        }}
        className={cn("angel", { "custom-day-cell": customDayCell })}
        {...(locale === "fa" && {
          calendar: persian,
          locale: {
            ...persian_fa,
            weekDays: persian_fa.weekDays.map((item) => [
              item[0],
              item[1].slice(0, 1),
            ]),
          },
        })}
        shadow={false}
        mapDays={({ date, today, isSameDate, selectedDate }) => {
          let isWeekend = (locale === "fa" ? [6] : [0, 6]).includes(
            date.weekDay.index
          );
          if (customDayCell && !!dayCell) {
            return {
              style: {},
              class: "angel-day-reset-cell",
              children: React.createElement(dayCell, {
                unix: date.unix,
                date: { day: date.day, month: date.month, year: date.year },
                isToday: isSameDate(date, today),
                isWeekend,
                isHoliday: holidays.some(
                  (item: number) =>
                    moment(+item * 1000)
                      .startOf("day")
                      .unix() ==
                    moment(date.unix * 1000)
                      .startOf("day")
                      .unix()
                ),
                isSelected: Array.isArray(selectedDate)
                  ? selectedDate.some(
                      (item) =>
                        moment(+item.unix * 1000)
                          .startOf("day")
                          .unix() ==
                        moment(date.unix * 1000)
                          .startOf("day")
                          .unix()
                    )
                  : isSameDate(date, selectedDate),
              }),
            };
          }
          let props: any = {};

          props.class = "angel-day-cell";

          if (isWeekend) props.class = "angel-day-holiday-cell";

          if (isSameDate(date, today)) props.class = "angel-day-today-cell";

          if (
            holidays.some(
              (item: number) =>
                moment(+item * 1000)
                  .startOf("day")
                  .unix() ==
                moment(date.unix * 1000)
                  .startOf("day")
                  .unix()
            )
          )
            props.class = "angel-day-holiday-cell";

          if (
            Array.isArray(selectedDate)
              ? selectedDate.some(
                  (item) =>
                    moment(+item.unix * 1000)
                      .startOf("day")
                      .unix() ==
                    moment(date.unix * 1000)
                      .startOf("day")
                      .unix()
                )
              : isSameDate(date, selectedDate)
          )
            props.class = "angel-day-active-cell";

          return props;
        }}
      />
    </>
  );
};

export const datePickerMeta: CodeComponentMeta<any> = {
  name: "DatePicker",
  displayName: "angel/DatePicker",
  importPath: "@/angel/date-picker",
  props: {
    value: { type: "number", hidden: (ps) => ps.mode === "multiple" },
    values: {
      type: "array",
      hidden: (ps) => ps.mode === "single",
      defaultValue: [],
    },
    onChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "date",
          type: "object",
        },
      ],
    },
    onMonthChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "month",
          type: "object",
        },
      ],
    },
    onYearChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "year",
          type: "object",
        },
      ],
    },
    locale: {
      defaultValue: "fa",
      type: "choice",
      options: ["fa", "en"],
    },
    mode: {
      type: "choice",
      options: [
        {
          label: "Single",
          value: "single",
        },
        {
          label: "Multiple",
          value: "multiple",
        },
      ],
    },
    holidays: {
      defaultValue: [],
      type: "array",
      helpText: "Array of day timestamps, e.g., [1710534600, 1710707400].",
    },
    customDayCell: "boolean",
    dayCell: {
      displayName: "Custom Day Cell",
      type: "slot",
      renderPropParams: ["dateProps"],
      hidden: (ps) => !ps.customDayCell,
    },
  },
  states: {
    value: {
      type: "writable",
      variableType: "number",
      valueProp: "value",
      onChangeProp: "onChange",
      hidden: (ps) => ps.mode === "multiple",
    },
    values: {
      type: "writable",
      variableType: "array",
      valueProp: "values",
      onChangeProp: "onChange",
      hidden: (ps) => ps.mode === "single",
    },
    month: {
      type: "readonly",
      variableType: "object",
      onChangeProp: "onMonthChange",
    },
    year: {
      type: "readonly",
      variableType: "object",
      onChangeProp: "onYearChange",
    },
  },
};
