<template>
	<div class="my-3 my-md-5">
		<div class="container">
			<div class="col-12">
				<div class="card">
					<div class="card-header">
						<h4 class="card-title">基本信息</h4>
					</div>
					<div class="row row-cards">
						<div class="col-sm-6 col-lg-4">
							<div class="p-3">
								<div class="d-inline-block w-25"><span class="w-label">部件名称：</span></div>
								<div class="d-inline-block"><span>测试新建001</span></div>
							</div>
							<div class="p-3">
								<div class="d-inline-block w-25"><span class="w-label">部件型号：</span></div>
								<div class="d-inline-block"><span >testNew001</span></div>
							</div>
							<div class="p-3">
								<div class="d-inline-block w-25"><span class="w-label">预览图：</span></div>
								<div class="d-inline-block"><span><img class="preview-img" src="~/assets/img/timg2.jpg" /></span></div>
							</div>
						</div>
						<div class="col-sm-6 col-lg-4">
							<div class="p-3">
								<div class="d-inline-block w-25"><span>品牌分类：</span></div>
								<div class="d-inline-block"><span>嘉利信得</span></div>
							</div>
							<div class="p-3">
								<div class="d-inline-block w-25"><span>系列分类：</span></div>
								<div class="d-inline-block"><span>嘉利信得</span></div>
							</div>
							<div class="p-3">
								<div class="d-inline-block w-25"><span>部件分类：</span></div>
								<div class="d-inline-block"><span>办公工位-连接梁-连接梁</span></div>
							</div>
						</div>
						<div class="col-sm-6 col-lg-4">
							<div class="p-3">
								<div class="d-inline-block w-25"><span>部件分组：</span></div>
								<div class="d-inline-block"><span>分组001/分组0012</span></div>
							</div>
							<div class="p-3">
								<div class="d-inline-block w-25"><span>连接梁：</span></div>
								<div class="d-inline-block"><span>梁2</span></div>
							</div>
							<div class="p-3">
								<div class="d-inline-block w-25"><span>示意图：</span></div>
								<div class="d-inline-block"><span><img class="preview-img" src="~/assets/img/timg2.jpg" /></span></div>
							</div>
						</div>
          </div>
					<div class="card-header">
						<h4 class="card-title">可用原料</h4>
					</div>
					<div class="table-responsive">
						<table class="table table-hover table-outline table-vcenter text-nowrap card-table">
							<thead>
                <tr>
                  <th>设为默认</th>
                  <th>序号</th>
                  <th>原料名称</th>
                  <th>类别</th>
                  <th>厚度</th>
                  <th>纹理</th>
                  <th>颜色</th>
									<th>状态</th>
                </tr>
              </thead>
							<tbody>
								 <tr v-for="n in 3">
                    <td>
                      <div>
                        <input type="radio" />
											</div>
                    </td>
                    <td>
                      <div>{{n}}</div>
                    </td>
                    <td>
                      <div>贴换图0{{n}}</div>
                    </td>
                    <td>
                      <div>板材-面材-pvc</div>
                    </td>
                    <td>
                      <div>78.00</div>
                    </td>
                    <td>
                      <div>未设置</div>
                    </td>
                    <td>
                      <div>未设置</div>
                    </td>
										<td>
                      <div>启用</div>
                    </td>
                </tr>
							</tbody>
						</table>
					</div>
					<div class="card-header">
						<h4 class="card-title">连接件配置</h4>
					</div>
					<div class="table-responsive">
						<table class="table table-hover table-outline table-vcenter text-nowrap card-table">
							<thead>
                <tr>
                  <th>设为默认</th>
                  <th>序号</th>
                  <th>预览图</th>
                  <th>五金零部件名称</th>
                  <th>分类</th>
                  <th>备注</th>
									<th>状态</th>
                </tr>
              </thead>
							<tbody>
								 <tr v-for="n in 3">
                    <td>
                      <div>
                        <input type="radio" />
											</div>
                    </td>
                    <td>
                      <div>{{n}}</div>
                    </td>
                    <td>
                      <div>贴换图0{{n}}</div>
                    </td>
                    <td>
                      <div>桌台连接件0{{n}}</div>
                    </td>
                    <td>
                      <div>桌台连接件-支撑腿连接件</div>
                    </td>
                    <td>
                      <div></div>
                    </td>
										<td>
                      <div>启用</div>
                    </td>
                </tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
.preview-img { 
	line-height: 6;
	width: 6rem;
	right: 0;
	left: auto;
}
.w-label {
	width: 16rem;
}
</style>