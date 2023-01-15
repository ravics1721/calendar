import type { Component } from 'solid-js';
import { Link } from "@solidjs/router";

const Home: Component = () => {
    return <div class='bg-[var(--dark)] min-h-screen '>
        <header class='flex justify-between px-10 py-3'>
            <h2 class='text-green-400 font-medium text-xl'>Calendar</h2>
            <button class='px-3 py-1 bg-green-300 text-black rounded'>login</button>
        </header>
        <main class='px-10 h-[34rem] grid place-items-center'>
            <div class="text-center max-w-xl flex flex-col gap-2 items-center">
                <h1 class='text-5xl font-medium text-white '>Be more <span class='text-green-400 '>productive</span>  and <span class='text-orange-400'>effective</span> to work</h1>
                <p class='text-gray-200'>Calendar helps you work in flow state by streamlining your meeting and making it easier to prioritize task</p>
                <Link href='/calendar'> <button class='text-lg font-normal w-fit px-4 py-2 bg-yellow-400 text-black rounded'>Get started</button></Link>
            </div>
        </main>
    </div>;
};


export default Home;