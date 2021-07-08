<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <!-- <img
        class="fixed inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
        alt=""> -->
    <!-- <img
        class="fixed inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="">
    <img
        class="fixed inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1519552928909-67ca7aef9265?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
        alt=""> -->
    <div class="absolute inset-0">
        <img
            class="fixed inset-0 object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
            alt="">
        <div
            class="absolute inset-0 bg-cyan-500 "
            style="mix-blend-mode: multiply" />
    </div>
    <!-- <img
        class="fixed inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1470569584027-67bf7fa60807?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="">
    <img
        class="fixed inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt=""> -->
    <div class="">
        <!-- Header -->
        <div class="pb-32">
            <SlideUpFadeIn>
                <div
                    class="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
                    <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Sunrise is in 4 hours
                    </h1>
                    <h2 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Sheffield
                    </h2>
                    <!-- <p class="max-w-3xl mt-6 text-xl text-gray-300">
                        First light will be at 05:34 and the Sun will rise at 06:11. The Sun will set at 20:37 and the last light will be 20:37.
                    </p> -->
                    <!-- <p class="max-w-3xl mt-6 text-xl text-cyan-50">
                        First light will be at 05:34 and the Sun will rise at 06:11. The Sun will set at 20:37 and the last light will be 20:37.
                    </p> -->
                    <p class="max-w-3xl mt-6 text-xl text-white">
                        First light will be at 05:34 and the Sun will rise at 06:11. The Sun will set at 20:37 and the last light will be 20:37.
                    </p>
                </div>
            </SlideUpFadeIn>
        </div>

        <!-- <section
            class="relative z-10 px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8"
            aria-labelledby="contact-heading">
            <h2
                id="contact-heading"
                class="sr-only">
                Contact us
            </h2>

            <div class="bg-white shadow-xl rounded-2xl">
                <div class="relative px-6 pt-16 pb-8 md:px-8">
                    <div class="absolute top-0 inline-block p-5 transform -translate-y-1/2 bg-indigo-600 shadow-lg rounded-xl">
                        <svg
                            class="w-6 h-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-medium text-gray-900">
                        Technical Support
                    </h3>
                    <p class="mt-4 text-base text-gray-500">
                        Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
                    </p>
                </div>
                <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                    <a
                        href="#"
                        class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                </div>
            </div>
        </section> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import SlideUpFadeIn from './features/animations/components/SlideUpFadeIn.vue';

export default {
    name: 'App',

    components: {
        SlideUpFadeIn,
    },

    data: () => ({
        show: false,
    }),

    computed: {
        ...mapGetters('GeolocationModule', [
            'request',
            'coordinates',
        ]),
    },
};
</script>