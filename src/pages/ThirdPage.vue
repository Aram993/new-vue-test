<template>
    <div>
       <Loader v-if="isLoading"/>
       <div class="comments">
            <div class="card" v-for="comment in comments">
                <span>{{ comment.email }}</span>
                <span>{{ comment.name }}</span>
            </div>
       </div>
    </div>
</template>
<script>
import Loader from '@/components/Loader.vue';
import { $axios } from '@/utils/axios';
export default {
    name: "ThirdPage",
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
                this.isLoading = true
                const response = await $axios.get("/comments");
                this.comments.push(...response.data.filter(item => item.id < 26));
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

        > span:last-child {
            color: cadetblue;
            text-align: center;
        }
    }
</style>