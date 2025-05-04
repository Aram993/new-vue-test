<template>
    <Loader v-if="isLoading"/>
    <div class="card" v-else>
        <div>
            <span>{{ comment.name }}</span>
        </div>
        <div>
            <span>{{ comment.body }}</span>
        </div>
    </div>
</template>
<script>
import { $axios } from '@/utils/axios';
import Loader from './Loader.vue';

export default {
    name: "Comment",
    components: {Loader},
    data() {
        return {
            isLoading: false,
            commentNum: Number(this.$route.params.commentId),
            comment: {}
        }
    },
    methods: {
        async getComment() {
            try {
                this.isLoading = true;
                const response = await $axios.get(`/comments/${this.commentNum}`);
                Object.assign(this.comment, response.data);

            } catch(err) {
                console.error(err);

            } finally {
                this.isLoading = false;
            }
        }
    },
    created() {
        this.getComment();
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
            font-size: large;
            font-weight: bolder;
            font-style: italic;
            border-bottom: 4px solid grey;
            padding: 20px 10px;
            height: 50%;
            text-align: center;
            display: flex;
            align-items: center;

            & > span {
                color: red;
                width: 100%;
                text-align: start;
            }

            &:last-child {
                border: none;
                
                & > span {
                    color: black;
                }
            }
        }

    }
</style>