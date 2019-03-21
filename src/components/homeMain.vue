<template>
    <div class="homeMain">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-date-picker
                v-model="dataValue"
                type="date"
                placeholder="选择日期">
        </el-date-picker>

    </div>
</template>

<script>
    export default {
        name: "homeMain",
        data(){
            const item = {
                date: '2015-05-02',
                name: '杜鲁阳',
                address: '杭州市拱墅区登云路 1518 弄'
            };
            return {
                // tableData: Array(20).fill(item),
                dataValue: '',

            }

        },

    }
</script>

<style scoped lang="sass">

</style>