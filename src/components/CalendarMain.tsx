import { Accessor, Component, For, createMemo } from "solid-js";
import type { CalendarView } from "types";
import { timeStamp } from "./timestamp";



const CalendarMain: Component<{ calendarView: Accessor<CalendarView> }> = (props) => {

    const gridView = createMemo(() => {
        if (props.calendarView() === "Day") {
            console.log(props.calendarView());
            return `w-full grid grid-col-5`;
        }
        if (props.calendarView() === "Week") {
            console.log(props.calendarView());
            return "w-full grid grid-col-7";
        }
        if (props.calendarView() === 'Month') {
            console.log(props.calendarView());
            return `w-full grid grid-col-7 grid-row-4`
        }
        return `w-full grid grid-col-7`;
    })

    return (
        <div class="flex w-full min-h-full">
            <div class="w-32 min-h-screen border-r border-gray-600 text-white list-none flex flex-col items-center gap-10 scrollbar-none " >
                <For each={timeStamp()} fallback={<div>timestamp</div>} >
                    {(time) => {
                        return (
                            <li class="text-gray-400 text-sm font-light ">{time.value}</li>
                        )
                    }}
                </For>
            </div>
            <div class='w-full grid grid-col-7 justify-start items-start '>
                <div>Sunday</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
            </div>
        </div>
    );
};

export default CalendarMain;
