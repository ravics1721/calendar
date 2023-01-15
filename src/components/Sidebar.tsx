import type { Component } from "solid-js";
import { HiOutlineMenuAlt2 } from 'solid-icons/hi';
import { IoHome, IoSettings } from 'solid-icons/io';
import { ImPlus } from 'solid-icons/im';
import { FaSolidUser } from 'solid-icons/fa';
import { BiSolidNotepad } from 'solid-icons/bi';
import { BiSolidChart } from 'solid-icons/bi'


const Sidebar: Component = () => {
    return <div class="flex flex-col w-14 max-h-screen justify-between items-center px-1 py-4 text-lg border-r border-gray-600 ">
        <div>
            <HiOutlineMenuAlt2 />
        </div>
        <div class="flex flex-col gap-2 list-none text-gray-400 ">
            <li class=" hover:bg-gray-600 hover:text-gray-100 p-2 rounded-xl "><IoHome /></li>
            <li class=" hover:bg-gray-600 hover:text-gray-100 p-2 rounded-xl "><ImPlus /></li>
            <li class=" hover:bg-gray-600 hover:text-gray-100 p-2 rounded-xl "><FaSolidUser /></li>
            <li class=" hover:bg-gray-600 hover:text-gray-100 p-2 rounded-xl "><BiSolidNotepad /></li>
            <li class=" hover:bg-gray-600 hover:text-gray-100 p-2 rounded-xl "><BiSolidChart /></li>
            <li class=" hover:bg-gray-600 hover:text-gray-100 p-2 rounded-xl "><IoSettings /></li>
        </div>
        <div>
            <div class="bg-gray-400 px-2 h-8 w-8 rounded-full"></div>
        </div>
    </div>;
};


export default Sidebar;