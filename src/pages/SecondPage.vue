<template>
    <div>
        <Loader v-if="isLoading"/>
        <div class="photos">
            <div class="card" v-for="photo in photos">
                {{ photo.title }}
            </div>
        </div>
    </div>
</template>
<script>
import Loader from '@/components/Loader.vue';
import { $axios } from '@/utils/axios';
export default {
    name: "SecondPage",
    components: {Loader},
    data() {
        return {
            $axios,
            photos: [],
            isLoading: false
        }
    },

    methods: {
        async getPhotos() {
            try {
                this.isLoading = true;
                const response = await $axios.get("/photos");
                this.photos.push(...response.data.filter(item => item.albumId === 1));
            } catch(err) {
                console.error(err)
            } finally {
                this.isLoading = false;
            }
        }
    },
    created() {
        this.getPhotos();
    }
}
</script>
<style lang="scss" scoped>
    .photos {
        display: flex;
        flex-wrap: wrap;
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
    }
</style>