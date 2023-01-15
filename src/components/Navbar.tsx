import { Component, createMemo, Accessor, Setter } from "solid-js";
import type { CalendarView } from "types";
import { FiChevronLeft } from "solid-icons/fi";
import { FiChevronRight } from "solid-icons/fi";
import { OcBellfill3 } from "solid-icons/oc";
import { RiSystemMore2Line } from "solid-icons/ri";
import dayjs from "dayjs";


const today = () => {
    return dayjs().format("DD MMMM");
}

const Navbar: Component<{
    calendarView: Accessor<CalendarView>;
    setCalendarView: Setter<CalendarView>;
}> = (props) => {
    const activeTab = createMemo(() => "bg-[var(--dark)] text-gray-200");
    const handleView = (value: CalendarView) => {
        return () => {
            props.setCalendarView(value);
        };
    };

    return (
        <div class="text-white py-3 px-2 flex justify-between items-center border-b border-gray-600 w-full">
            <div class="flex gap-4 items-center pl-4">
                <button class="rounded-full border border-gray-600 p-2 inline-flex justify-center items-center hover:bg-gray-700 ">
                    <FiChevronLeft />
                </button>
                <button class="rounded-full border border-gray-600 p-2 inline-flex justify-center items-center hover:bg-gray-700">
                    <FiChevronRight />
                </button>
                <h3 class="text-lg font-medium">{today()}</h3>
                <p class="text-lg font-normal text-gray-300 ">Today</p>
            </div>
            <div class="py-1 px-1 flex gap-2 bg-gray-700 rounded text-gray-400">
                <button
                    onClick={handleView("Day")}
                    class={`rounded px-3 py-1 text-sm font-medium  ${props.calendarView() === "Day" ? activeTab() : ""}`}
                >
                    Day
                </button>
                <button
                    onClick={handleView("Week")}
                    class={`rounded px-3 py-1 text-sm font-medium  ${props.calendarView() === "Week" ? activeTab() : ""}`}
                >
                    Week
                </button>
                <button
                    onClick={handleView("Month")}
                    class={`rounded px-3 py-1 text-sm font-medium   ${props.calendarView() === "Month" ? activeTab() : ""}`}
                >
                    Month
                </button>
            </div>
            <div class="flex list-none gap-2">
                <li class="p-1">
                    <OcBellfill3 />
                </li>
                <li class="p-1">
                    <RiSystemMore2Line />
                </li>
            </div>
        </div>
    );
};

export default Navbar;
