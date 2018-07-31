<template>
    <div>
        <div>
            <input v-model="username" />
        </div>
        <div>
            <input v-model="passwd"/>
        </div>

        <button @click="login()">登陆</button>
    </div>
</template>
<script src="./login.js"></script>