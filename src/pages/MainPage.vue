<template>
    <Loader v-if="isLoading"/>
    <div class="card" v-for="item in users">
        <div>
            <span>Name:</span>
            {{item.name}}
        </div>
        <div>
            <span>City:</span>    
            {{ item.address.city}}
        </div>
        <div>
            <span>Street:</span>
            {{ item.address.street}}
        </div>
        <div>
            <span>Email:</span>
            {{ item.email}}
        </div>
    </div>
</template>
<script>
    import Loader from '@/components/Loader.vue';
    import { $axios } from '@/utils/axios';
    export default {
        name: "MainPage",
        components: {Loader},
        data() {
            return {
                users: [],
                $axios,
                isLoading: false
            }
        },

        methods: {
            async getUsers() {
                try {
                    this.isLoading = true;
                    const response = await $axios.get("/users/1");
                    this.users.push(response.data);
                } catch(err) {
                    console.error(err)
                } finally {
                    this.isLoading = false;
                }
            },
        },

        created() {
            this.getUsers();
        }
    }
</script>
<style lang="scss" scoped>
    .card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 400px;
        border: 2px solid black;
        border-radius: 10px;
        background-color: #fff;
        display: flex;
        flex-direction: column;

        & > div {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: x-large;
            font-weight: bolder;
            font-style: italic;
            border-bottom: 4px solid grey;
            padding: 20px 10px;
            height: 25%;
            text-align: center;
            display: flex;

            & > span {
                color: grey;
                width: 30%;
                text-align: start;
            }

            &:last-child {
                border: none;
            }
        }

    }
</style>