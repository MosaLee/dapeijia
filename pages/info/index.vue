<template>
  <div class="container">
    <keep-alive>
      <Headers></Headers>
    </keep-alive>
    <div class="row row-cards row-deck">
      <div class="col-12">
        <div class="card">
          <div class="table-responsive">
            <table class="table table-hover table-outline table-vcenter text-nowrap card-table">
              <thead>
                <tr>
                  <th class="text-center w-1"><i class="icon-people"></i></th>
                  <th>id</th>
                  <th>name</th>
                  <th class="text-center">state</th>
                  <th>type</th>
                  <th class="text-center">height</th>
                  <th class="text-center">desc</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in dataarr">
                    <td>
                      <div><img :src="item.image_url" class="profile"/></div>
                    </td>
                    <td>
                      <div>{{item.id}}</div>
                    </td>
                    <td>
                      <div>{{item.name}}</div>
                    </td>
                    <td>
                      <div>{{item.state}}</div>
                    </td>
                    <td>
                      <div>{{item.type}}</div>
                    </td>
                    <td>
                      <div>{{item.height}}</div>
                    </td>
                    <td>
                      <div>{{item.desc}}</div>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <Paginations :count="count" :pageSize="pageSize" @pass-page="getList"></Paginations>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '~/components/common/header.vue'
import Paginations from '~/components/common/pagination.vue'
import API from '~/plugins/axios'

let model

export default {
  data () {
    return {
      pageSize : 15,  //每页显示条数
      count : 1, //总记录数
      dataarr : []
    }
  },
  methods: {
    //获取数据
    getList (pages) { //同步
      this.dataarr = []
      var skip = (pages - 1) * this.pageSize
      API.GET("classes/table_parts",{skip: skip, limit: 15}).then(function(res){
        let resObj = res.data
        model.count = resObj.count
        model.dataarr = resObj.items 
      })
    }
  },
  components: {
    Headers,
    Paginations
  },
  mounted() {
    model = this
    //请求第一页数据
    model.getList(1)
  }
}
</script>

<style>
.profile{
  max-width: 100px;
  max-height:100px;
}
</style>

