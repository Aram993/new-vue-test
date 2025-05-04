<template>
    <div>
       <Loader v-if="isLoading"/>
       <div class="posts">
            <RouterLink class="card" v-for="item in posts" :to="`/posts/${item.id}`">
                <span>{{ item.title }}</span>
            </RouterLink>
       </div>
    </div>
</template>
<script>
import Loader from '@/components/Loader.vue';
import { $axios } from '@/utils/axios';
export default {
    name: "Posts",
    components: {Loader},
    data() {
        return {
            isLoading: false,
            posts: []
        }
    },
    methods: {
        async getComments() {
            try {
                this.isLoading = true
                const response = await $axios.get("/posts");
                this.posts.push(...response.data.filter(item => item.id < 51));
            } catch(err) {
                console.error(err);
            } finally {
                this.isLoading = false;
            }
        }
    },
    created() {
        this.getComments();
    }
}
</script>
<style lang="scss" scoped>
    .posts {
        display: flex;
        gap: 15px;
        padding: 15px;
        flex-wrap: wrap;
    }

    .card {
        width: 300px;
        height: 200px;
        border: 2px solid black;
        border-radius: 10px;
        background-color: #eee;
        color: orangered;
        font-weight: bolder;
        font-size: large;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        font-size: 25px;

        &:hover {
            cursor: pointer;
            box-shadow: 5px 5px 5px 5px;
        }
    }
</style>