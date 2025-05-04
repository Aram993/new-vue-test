<template>
    <div class="wrapper" v-if="!isValid">
        <form>
            <label for="login">Введите Ваш логин</label>
            <input type="text" id="login" v-model="loginValue">
        </form>
        <form>
            <label for="pass">Введите Ваш пароль</label>
            <input type="password" id="pass" v-model="passwordValue" autocomplete="current-password">
        </form>
        <button @click="checkValidate">Отправить</button>
    </div>
    <button class="btn" v-else @click="logoutOfProfile">Выйти из профиля</button>
    
</template>
<script>
    export default {
        name: "MainPage",
        data() {
            return {
                isValid: localStorage.getItem("validate"),
                loginValue: "",
                passwordValue: "",
            }
        },
        methods: {
            checkValidate() {
                if (this.loginValue && this.passwordValue) {
                    localStorage.setItem("validate", true);
                    this.isValid = localStorage.getItem("validate");
                    alert("Вы успешно вошли в профиль!");
                }
                this.loginValue = "";
                this.passwordValue = "";
            },
            logoutOfProfile() {
                localStorage.removeItem("validate");
                this.isValid = localStorage.getItem("validate");
            }
        }
    }
</script>
<style lang="scss" scoped>
    .wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;

        & > form {
            display: flex;
            gap: 30px;

            & > label {
                width: 300px;
                font-size: 30px;
                color: crimson;
            }

            & > input {
                border: 2px solid grey;
                width: 300px;
                border-radius: 10px;
                padding: 10px;
            }
        }

        & > button {
            background-color: grey;
            width: 200px;
            padding: 20px;
            border-radius: 20px;

            &:hover {
                color: red;
                opacity: 0.7;
            }
        }
    }

    .btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: grey;
        font-size: 30px;
        padding: 20px;
        border-radius: 20px;

        &:hover {
            color: red;
            opacity: 0.7;
        }
    }

    p {
        position: absolute;
        top: 60%;
        left: 60%;
        transform: translate(-60%, -60%);
    }
</style>