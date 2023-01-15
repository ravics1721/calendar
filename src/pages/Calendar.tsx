import type { Component } from "solid-js";
import type { CalendarView } from "types";
import { lazy, createEffect, onCleanup, createSignal } from "solid-js";
const Sidebar = lazy(() => import("../components/Sidebar"));
const Navbar = lazy(() => import("../components/Navbar"));
const CalendarMain = lazy(() => import("../components/CalendarMain"));

const [calendarView, setCalendarView] = createSignal<CalendarView>("Week");

const Calendar: Component = () => {
    createEffect(() => {
        window.addEventListener("keyup", (e) => {
            if (e.defaultPrevented) {
                return; // Do nothing if event already handled
            }
            if (e.code === "KeyD") {
                setCalendarView("Day");
                return;
            }
            if (e.code === "KeyW") {
                setCalendarView("Week");
                return;
            }
            if (e.code === "KeyM") {
                setCalendarView("Month");
                return;
            }
        });
        onCleanup(() => {
            window.removeEventListener("keyup", () => { })
        });
    })
    return (
        <div class="flex bg-[var(--dark)] text-white min-h-screen fixed w-full">
            <Sidebar />
            <main class="w-full h-full overflow-y-scroll sticky ">
                <Navbar calendarView={calendarView} setCalendarView={setCalendarView} />
                <CalendarMain calendarView={calendarView} />
            </main>
        </div>
    );
};

export default Calendar;
