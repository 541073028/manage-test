<template>
    <div class="login">
        <div class="main">
            <h1>登录</h1>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="账号">
                    <el-input v-model="formLabelAlign.account" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formLabelAlign.password" placeholder="请输入密码"  show-password></el-input>
                </el-form-item>
                <el-button type="primary">登录</el-button>
            </el-form>
        </div>


    </div>
</template>

<script>

    export default {
        name: "login",
        data(){
            return{
                account: '',//账号
                password: '',//密码
                labelPosition: 'left',
                formLabelAlign: {
                    account: '',
                    password: '',
                }
            }
        },
        methods:{
            //登录
            login(){
                if(this.formLabelAlign.account==''){
                    console.log("请输入账号");
                    return false;
                }
                if(this.formLabelAlign.password==''){
                    console.log("请输入密码");
                    return false;
                }
            }
        }
    }
</script>

<style scoped lang="sass">
.login
    width: 100vw
    height: 100vh
    background: rgb(197, 104, 77)
    .main
        width: 500px
        height: 300px
        background: #fff
        border-radius: 10px
        padding: 20px 80px
        color: #fff
        position: absolute
        right: 0
        left: 0
        top: 0
        bottom: 0
        margin: auto
        h1
            text-align: center
            font-size: 26px
            line-height: 48px

</style>