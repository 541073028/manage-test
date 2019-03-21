<template>
    <div class="userIntegral">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="text"><i class="el-icon-arrow-left" style="margin-right: 6px"></i>返回</el-button>
        <div class="content">
            <div class="userInfo">
                <el-card class="box-card">
                    <div v-for="(val,ele,index) in userInfo" :key="index" class="text" >
                        {{ ele }} : {{ val }}
                    </div>
                </el-card>
            </div>
            <template>
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%;text-align: center">
                    <el-table-column
                            prop="behavior"
                            label="行为">
                    </el-table-column>
                    <el-table-column
                            prop="integralUpdate"
                            label="积分变化">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="时间">
                    </el-table-column>
                </el-table>
            </template>
            <el-pagination
                    background
                    layout="total,prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userIntegral",
        data(){
            return{
                userInfo: {
                    "姓名": '杜鲁阳',
                    "手机号": '15835551797',
                    "标签": '学生',
                    "当前积分": '1000',//当前积分
                    "历史积分": '8888',//历史积分
                    "消耗积分": '2222',//消耗积分
                },
                tableData: [{
                    date: '2016-05-02',
                    behavior: '王小虎',
                    integralUpdate: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    behavior: '王小虎',
                    integralUpdate: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    behavior: '王小虎',
                    integralUpdate: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    behavior: '王小虎',
                    integralUpdate: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>

<style scoped lang="sass">
.userIntegral
    padding: 30px
    .content
        .userInfo
            .box-card
                .text
                    font-size: 14px
                    padding: 6px 0

</style>