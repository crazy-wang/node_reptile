<template>
    <div class="hello">
        <el-input
                placeholder="请输入内容"
                v-model="urlValue"
                clearable>
        </el-input>
        <el-button type="success" @click="getPic">点击开始爬取信息照片（存于后台文件夹image）</el-button>
        <el-button type="primary" @click="getInfo">点击开始爬取文本信息（返回到控制台打印展示）</el-button>
        <el-button type="danger" @click="getHttpInfo">点击开始爬取文本信息（非request而是http导致301重定向）</el-button>
        <div>
            <el-button type="danger" @click="getJob">点击开始爬取文本信息（返回到前台页面展示）</el-button>
            <el-button @click="next">下一页</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                urlValue: 'http://m.juyouqu.com/qu/3187982     ',
                page: 1
            }
        },
        methods: {
            getPic() {
                this.axios.get('http://localhost:3000')
            },
            async getInfo() {
                let res = await this.axios.get('http://localhost:3000/users')
                console.log(res, '公司名单')
            },
            async getHttpInfo() {
                let res = await this.axios.get('http://localhost:3000/info')
                console.log(res, '嘻嘻哈')
            },
            async getJob() {
                let res = await this.axios.get('http://localhost:3000/job', {
                    params: {
                        page: this.page
                    }
                })
                console.log(res, '信息')
            },
            next() {
                this.page+=1
                this.getJob()
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello {
        text-align: center;
    }
</style>
