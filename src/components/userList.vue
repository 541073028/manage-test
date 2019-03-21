<template>
    <div class="userList">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        </el-breadcrumb>
        <div class="searchBox">
            <div>
                <span>查询</span>
                <el-input v-model="searchValue" placeholder="请输入内容"></el-input>
                <el-button type="primary" style="margin-left: 30px">搜索</el-button>
            </div>
            <el-button type="primary">导出</el-button>
        </div>
        <el-table :data="tableData" stripe>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="nickname" label="昵称" width="200">
            </el-table-column>
            <el-table-column prop="cardId" label="身份证后6位">
            </el-table-column>
            <el-table-column prop="phone" label="手机号" width="140">
            </el-table-column>
            <el-table-column prop="signDate" label="注册时间">
            </el-table-column>
            <el-table-column prop="loginDate" label="最近登录时间">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="标签"
                    width="100"
                    :filters="[{ text: '学生', value: '学生' }, { text: '理财', value: '理财' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.tag === '学生' ? 'primary' : 'success'"
                            disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="integral" label="当前积分" width="180">
            </el-table-column>
            <el-table-column prop="handle" label="操作"  width="100">
                <template slot-scope="scope">
                    <el-button type="text">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="total,prev, pager, next"
                :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "userList",
        data(){
            return{
                searchValue: '',//搜索内容
                tableData: [{
                    signDate: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tag: '学生'
                }, {
                    signDate: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    tag: '理财'
                }, {
                    signDate: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    tag: '学生'
                }, {
                    signDate: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '理财'
                }]
            }
        },
        methods: {
            resetDateFilter() {
                this.$refs.filterTable.clearFilter('date');
            },
            clearFilter() {
                this.$refs.filterTable.clearFilter();
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            }
        }
    }
</script>

<style scoped lang="sass">
    .userList
        padding: 35px
        .el-table
            div, .cell
                text-align: center !important
        .searchBox
            border-bottom: 1px solid #333
            padding: 20px 0
            display: flex
            align-items: center
            justify-content: space-between
            div
                display: flex
                align-items: center
                span
                    width: 100px
</style>