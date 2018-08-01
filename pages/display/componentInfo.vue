<template>
	<div class="my-3 my-md-3">
		<div class="container">
			<div class="col-12">
				<div class="card">
					<div class="card-header">
						<h4 class="card-title">基本信息</h4>
					</div>
					<div class="row row-cards">
						<div class="col-sm-6 col-lg-4">
							<div class="input-group mt-2">
                <span class="input-group-prepend">
                  <span class="input-group-text">部件名称：<span class="form-required">*</span></span>
                </span>
                <input type="text" class="form-control" >
              </div>
							<div class="input-group mt-2">
                <span class="input-group-prepend">
                  <span class="input-group-text">部件型号：<span class="form-required">*</span></span>
                </span>
                <input type="text" class="form-control">
              </div>
							<div class="input-group mt-2">
                <span class="input-group-prepend">
                  <span class="input-group-text">预览图：<span class="form-required">*</span></span>
                </span>
                <input type="text" class="form-control">
              </div>
						</div>
						<div class="col-sm-6 col-lg-4">
							<div class="input-group mt-2">
                <span class="input-group-prepend">
                  <span class="input-group-text">一级分类：<span class="form-required">*</span></span>
                </span>
                <select class="form-control custom-select">
										<option>请选择</option>
								</select>
              </div>
							<div class="input-group mt-2">
                <span class="input-group-prepend">
                  <span class="input-group-text">二级分类：<span class="form-required">*</span></span>
                </span>
                <select class="form-control custom-select">
										<option>请选择</option>
								</select>
              </div>
						</div>
						<div class="col-sm-6 col-lg-4">
							<div class="input-group mt-2">
                <span class="input-group-prepend">
                  <span class="input-group-text">一级分组：</span>
                </span>
                <select class="form-control custom-select">
										<option>请选择</option>
								</select>
              </div>
						</div>
          </div>
					<div class="card-header">
						<h4 class="card-title">部件规格</h4>
					</div>
					<div class="row row-cards">
						<div class="col-sm-2 col-lg-1">
							<div class="input-group mt-2">
                <span class="input-group-prepend text-right">
                  <span class="input-group-text">主色调</span>
                </span>
              </div>
						</div>
						<div class="col-lg-3">
							<div class="input-group mt-2">
								<span class="input-group-prepend">
                  <span class="input-group-text">颜色名称：</span>
                </span>
                <input type="text" class="form-control" >
              </div>
						</div>
						<div class="col-lg-3">
							<div class="input-group mt-2">
								<span class="input-group-prepend">
                  <span class="input-group-text">颜色图：</span>
                </span>
                <input type="text" class="form-control" >
              </div>
						</div>
          </div>
					<div class="row row-cards">
						<div class="col-sm-2 col-lg-1">
							<div class="input-group mt-2">
                <span class="input-group-prepend text-right">
                  <span class="input-group-text">主材质</span>
                </span>
              </div>
						</div>
						<div class="col-lg-3">
							<div class="input-group mt-2">
								<span class="input-group-prepend">
                  <span class="input-group-text">材质部位：</span>
                </span>
                <input type="text" class="form-control" >
              </div>
						</div>
						<div class="col-lg-3">
							<div class="input-group mt-2">
								<span class="input-group-prepend">
                  <span class="input-group-text">材质名称：</span>
                </span>
                <input type="text" class="form-control" >
              </div>
						</div>
          </div>
					<div class="row row-cards">
						<div class="col-sm-2 col-lg-1">
							<div class="input-group mt-2">
                <span class="input-group-prepend text-right">
                  <span class="input-group-text">尺寸</span>
                </span>
              </div>
						</div>
						<div class="col-lg-3">
							<div class="input-group mt-2">
								<span class="input-group-prepend">
                  <span class="input-group-text">长：</span>
                </span>
                <input type="text" class="form-control" >
              </div>
						</div>
						<div class="col-lg-3">
							<div class="input-group mt-2">
								<span class="input-group-prepend">
                  <span class="input-group-text">宽：</span>
                </span>
                <input type="text" class="form-control" >
              </div>
						</div>
						<div class="col-lg-3">
							<div class="input-group mt-2">
								<span class="input-group-prepend">
                  <span class="input-group-text">高：</span>
                </span>
                <input type="text" class="form-control" >
              </div>
						</div>
          </div>
					<div class="row row-cards">
						<div class="col-sm-2 col-lg-1">
							<div class="input-group mt-2">
                <span class="input-group-prepend">
                  <span class="input-group-text">其他规格</span>
                </span>
              </div>
						</div>
						<div class="col-lg-3">
							<div class="input-group mt-2">
								<span class="input-group-prepend">
                  <span class="input-group-text">版本：</span>
                </span>
                <input type="text" class="form-control" >
              </div>
						</div>
          </div>
					<div class="row row-cards">
						<div class="col-sm-2 col-lg-1">
							<div class="input-group mt-2">
                <span class="input-group-prepend">
                  <span class="input-group-text"></span>
                </span>
              </div>
						</div>
						<div class="col-lg-3">
							<div class="input-group mt-2">
								<span class="input-group-prepend">
                  <span class="input-group-text">面积：</span>
                </span>
                <input type="text" class="form-control" >
              </div>
						</div>
						<div class="col-lg-3">
							<div class="input-group mt-2">
								<span class="input-group-prepend">
                  <span class="input-group-text">体积：</span>
                </span>
                <input type="text" class="form-control" >
              </div>
						</div>
						<div class="col-lg-3">
							<div class="input-group mt-2">
								<span class="input-group-prepend">
                  <span class="input-group-text">重量：</span>
                </span>
                <input type="text" class="form-control" >
              </div>
						</div>
          </div>
					<div class="row row-cards">
						<div class="col-sm-2 col-lg-1">
							<div class="input-group mt-2">
                <span class="input-group-prepend">
                  <span class="input-group-text">备注：</span>
                </span>
              </div>
						</div>
						<div class="col-lg-9">
							<div class="input-group mt-2 mb-2">
								<textarea class="form-control" rows="3"></textarea>
              </div>
						</div>
          </div>
					<div class="row row-cards">
						<div class="col-sm-2 col-lg-2 input-group">
							<a href="#" class="btn btn-success m-3">提交</a>
							<a href="#" class="btn btn-secondary m-3">取消</a>
						</div>
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
.input-group-prepend {
	display: inline-block;
	width: 6.5rem;
	text-align: right;
}
.input-group-text, .card-header {
	border: 0px;
}
.card-header {
	border: 0px;
	font-weight:bold;
	color: black;
}

</style>