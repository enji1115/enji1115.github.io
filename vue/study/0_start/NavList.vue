<!-- NavList.vue -->

<template>
    <ul>
        <nav-navlist
            v-for="item in navList"
            v-bind:nav="item"
            v-bind:key="item.id"
        ></nav-navlist>
    </ul>
</template>