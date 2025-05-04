<template>
    <div>
        <Loader v-if="isLoading"/>
        <div class="wrap">
            <RouterLink class="card" v-for="item in users" :to="`/users/${item.id}`">
                {{ item.name }}
            </RouterLink>
        </div>
    </div>
</template>
<script>
import Loader from '@/components/Loader.vue';
import { $axios } from '@/utils/axios';
export default {
    name: "Users",
    components: {Loader},
    data() {
        return {
            users: [],
            isLoading: false,
            userId: null
        }
    },

    methods: {
        async getUsers() {
            try {
                this.isLoading = true;
                const response = await $axios.get("/users");
                this.users.push(...response.data);
            } catch(err) {
                console.error(err)
            } finally {
                this.isLoading = false;
            }
        }
    },
    created() {
        this.getUsers();
    }
}
</script>
<style lang="scss" scoped>
    .wrap {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        row-gap: 40px;
        width: 60%;
        margin: 50px auto;
    }
    
    .card {
        width: 200px;
        height: 200px;
        border: 2px solid black;
        border-radius: 10px;
        background-color: #eee;
        color: orangered;
        font-weight: bolder;
        font-size: large;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            cursor: pointer;
            box-shadow: 5px 5px 5px 5px;
        }
    }
</style>