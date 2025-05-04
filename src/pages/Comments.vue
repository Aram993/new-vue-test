<template>
    <Loader v-if="isLoading"/>
    <div class="comments" v-else>
        <RouterLink :to="`/comments/${comment.id}`" class="card" v-for="comment in comments">
            <span>{{ comment.name }}</span>
        </RouterLink>
    </div>
</template>
<script>
import Loader from '@/components/Loader.vue';
import { $axios } from '@/utils/axios';

export default {
    name: "Comments",
    components: {Loader},
    data() {
        return {
            isLoading: false,
            comments: []
        }
    },
    methods: {
        async getComments() {
            try {
                this.isLoading = true;
                const response = await $axios.get("/comments");
                this.comments.push(...response.data.filter(item => item.id < 101));
                console.log(this.$route)

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
    .comments {
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