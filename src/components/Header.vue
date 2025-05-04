<template>
    <div class="container">
        <RouterLink to="/main">Main</RouterLink>
        <router-link to="/users">Users</router-link>
        <RouterLink to="/posts">Posts</RouterLink>
        <RouterLink to="/comments">Comments</RouterLink>
    </div>
</template>
<script>
export default {
    name: "Header"
}
</script>
<style lang="scss" scoped>
    .container {
        width: 100%;
        border: 2px solid white;
        padding: 30px;
        background-color: navy;
        display: flex;
        gap: 30px;

        & > a {
            color: azure;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: bolder;

            &:hover {
                color: aqua;
                text-decoration:underline;
            }

            &.active {
                color: antiquewhite;
                text-decoration:underline;
            }
        }
    }
</style>