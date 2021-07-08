<template>
    <Transition
        appear
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="transform translate-y-20 opacity-0"
        enter-to-class="transform opacity-100">
        <slot />
    </Transition>
</template>

<script>
export default {
    name: 'SlideUpFadeIn',
};
</script>