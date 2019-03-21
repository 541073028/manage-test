<template>
    <div class="home">
        <el-container>

            <el-header>
                <span style="font-size: 24px">后台管理系统</span>
                <el-dropdown style="text-align: right; font-size: 12px;float: right">
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span style="float: right;margin-right: 20px">杜鲁阳</span>
            </el-header>
            <el-container>
                <!--侧导航-->
                <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                    <el-menu :default-openeds="['1', '3']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>导航一</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="3-1">选项1</el-menu-item>
                                <el-menu-item index="3-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="3-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="3-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <!--内容-->
                <el-main>
                    <home-main v-if="state === 'home'" />
                    <user-list v-else-if="state === 'user'" />
                    <user-integral v-else-if="state === 'userIntegral'" />
                </el-main>

            </el-container>
        </el-container>
    </div>

</template>

<script>
    import homeMain from '@/components/homeMain.vue'//首页main
    import userList from '@/components/userList.vue'//用户管理
    import userIntegral from '@/components/userIntegral.vue'//用户积分明细
    export default {
        name: "home",
        data(){
            return{
                state: 'user',
            }
        },
        components:{
            homeMain,
            userList,
            userIntegral
        }
    }
</script>

<style scoped lang="sass">
    .el-header
        background-color: #B3C0D1
        color: #333
        line-height: 60px
    .el-aside
        color: #333
    .el-main
        padding: 0
</style>