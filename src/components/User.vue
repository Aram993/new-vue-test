<template>
    <Loader v-if="isLoading"/>
    <div class="card" v-else>
        <div>
            <span>Name:</span>
            {{user.name}}
        </div>
        <div>
            <span>City:</span>    
            {{ user.address?.city}}
        </div>
        <div>
            <span>Street:</span>
            {{ user.address?.street}}
        </div>
        <div>
            <span>Email:</span>
            {{ user.email}}
        </div>
    </div>
</template>
<script>
    import Loader from '@/components/Loader.vue';
    import { $axios } from '@/utils/axios';
    export default {
        name: "User",
        components: {Loader},
        data() {
            return {
                user: {},
                isLoading: false,
                userNum: this.$route.params.userId
            }
        },

        methods: {
            async getUsers() {
                try {
                    this.isLoading = true;
                    const response = await $axios.get(`/users/${this.userNum}`);
                    Object.assign(this.user, response.data);
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
        width: 500px;
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