<template>
  <div v-if="count">
    <ul id="pagination" class="pagination-sm"></ul>
  </div>
</template>

<script>
import $ from '~/static/js/vendor-jquery.js'
require('twbs-pagination')
let model
export default {
   data () {
    return {
    }
  },
  props: ['count', 'pageSize'],
  watch: {
    'count' : function(){
      if($('#pagination').data("twbs-pagination"))
        $('#pagination').twbsPagination('destroy');  
      model.showPagination()
    }
  },
  methods: {
    init() {
      //显示分页器
      model.showPagination()
    },
    //显示分页器
    showPagination (){
      var ttPages = Math.ceil(model.count / model.pageSize);
      ttPages = ttPages ? ttPages : 1
      console.log(ttPages)
      $('#pagination').twbsPagination({
        totalPages: ttPages,
        visiblePages:7,
        startPage : 1,
        first: '第一页',
        prev: '上一页',
        next: '下一页',
        last: '最末页',
        onPageClick: function (event, page) {
          model.$emit('pass-page', page)
          $('#page-content').text('Page ' + page);
        }
      });
    }
  },
  mounted() {
    //请求第一页数据
    model.init()
  },
  created(){
     model = this
  }
}

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
 
</style>
