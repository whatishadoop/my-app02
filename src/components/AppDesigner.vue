<template>
  <div>
    <div class="navbar navbar-inverse navbar-fixed-top navbar-layoutit">
      <div class="navbar-header">
        <button data-target="navbar-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
          <span class="glyphicon-bar"></span>
          <span class="glyphicon-bar"></span>
          <span class="glyphicon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <!--<img src="img/favicon.png">-->
          Dwepapp
        </a>
      </div>
      <div class="collapse navbar-collapse">

        <ul class="nav pull-right">
          <li>

            <div class="btn-group btn-donate pull-right"></div>

            <div class="btn-group">
              <a class="btn btn-xs btn-primary active" href="./en"><i class="glyphicon-globe glyphicon"></i>
                中文/英文
              </a>
              <button @click="changeLocale" role="button" data-toggle="modal" data-target="#feedbackModal" id="feedback"
                      class="btn btn-xs btn-primary active"><i class="glyphicon-comment glyphicon"></i>
                帮助文档
              </button>
            </div>
          </li>
        </ul>
        <ul class="nav" id="menu-layoutit">
          <li>
            <div class="btn-group" data-toggle="buttons-radio">
              <button type="button" id="edit" class="btn btn-xs btn-primary active"><i
                class="glyphicon glyphicon-edit "></i>
                编辑
              </button>
              <button type="button" class="btn btn-xs btn-primary" id="devpreview">
                <i class="glyphicon-eye-close glyphicon"></i>
                开发
              </button>
              <button type="button" class="btn btn-xs btn-primary" id="sourcepreview">
                <i class="glyphicon-eye-open glyphicon"></i>
                预览
              </button>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-xs btn-primary" id="button-download-modal"
                      data-target="#downloadModal"
                      role="button" data-toggle="modal"><i class="glyphicon-chevron-down glyphicon"></i>
                下载
              </button>
              <button class="btn btn-xs btn-primary" href="#clear" id="clear">
                <i class="glyphicon-trash glyphicon"></i>
                清空
              </button>
            </div>
          </li>
        </ul>
      </div>
      <!--/.navbar-collapse -->
    </div>
    <!--/.navbar-fixed-top -->

    <div class="container">
      <div class="row">
        <div class="">
          <!--左侧组件工具栏-->
          <div class="sidebar-nav">
            <ul class="nav nav-list accordion-group">
              <li class="nav-header">
                <i class="glyphicon-plus glyphicon"></i>
                布局设置
              </li>
              <!-- barchart -->
              <li class="rows" id="estRows">
                <!--barchart组件-->
                <div class="lyrow ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon-remove glyphicon"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
                  <i class="glyphicon glyphicon-move"></i>
                  拖动
                </span>

                  <div class="preview">
                    <input value="12" class="form-control" type="text"></div>
                  <div class="view">
                    <div class="row clearfix">
                      <div class="col-md-12 column">
                        <div cache="default">
                          <div class="cus_component" type="barchart"></div>
                        </div>
                        <div cache="default">
                          <div class="cus_directive"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--tab组件-->
                <div class="lyrow ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon-remove glyphicon"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
                  <i class="glyphicon glyphicon-move"></i>
                  拖动
                </span>

                  <div class="preview">
                    <input value="12" class="form-control" type="text"></div>
                  <div class="view">
                    <div class="row clearfix">
                      <div class="col-md-12 column">
                        <div cache="default">
                          <div class="cus_component" type="barchart"></div>
                        </div>
                        <div cache="default">
                          <div class="cus_directive"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--/span-->
        <div style="min-height: 754px;" class="demo ui-sortable" id="droppable">
          内容区域
          <div id="mount-point"></div>
        </div>
        <!--/span-->
        <div id="download-layout">
          下载页面内容
        </div>
      </div>
      <!--/row-->
    </div>
    <!--/.fluid-container-->

    <div style="display: none;" class="modal fade" id="downloadModal" tabindex="-1" role="dialog"
         aria-labelledby="downloadModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title">下载</h4>
          </div>
          <div class="modal-body">

            <div id="download-logged" class="">
              <div class="alert alert-info">已在下面生成干净的HTML, 可以复制粘贴代码到你的body内
              </div>
              <p>
                <textarea></textarea>
              </p>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import barchart from 'components/chart/barchart';

  export default {
    data() {
      return {  // 普通属性国际化切换无效果
        chart: '<v-barchart></v-barchart>',
        chart2: '<div v-world:wbs17022.hehe.haha></div>'
      };
    },
    methods: {
      update() {
        const strs = '<div><div v-world:wbs17022.hehe.haha id="mount-point"></div> 惺惺惜惺惺</div>';
        var MyComponent = Vue.extend({
          template: strs
        });
        new MyComponent().$mount('#mount-point2');
        console.info('已经更新完毕');
      },
      changeLocale() {
        this.$nextTick(function () {
          const strs = `<div><div id="xxxx">惺惺惜惺惺</div></div>`;
          let MyComponent = Vue.extend({
            template: strs
          });
          new MyComponent().$mount('#mount-point3');
          console.info('已经更新完毕');
        });
      }
    },
    computed: {
      nike() {  // js中引用国际化放在计算属性中
        return this.$t('brands.nike');
      }
    },
    mounted: function () {
      let self = this;
      $('.demo, .demo .column').sortable({
        connectWith: '.column',
        opacity: 0.35,
        handle: '.drag',
        stop: function (event, ui) {
          let curModuleObj = ui.item;
          let state = curModuleObj.attr('renderstate');
          // 只处理新未进行渲染的新组件
          if (state === 'C') {
            let cusComponentId = 'module-' + self.$uuid.create();
            console.info(cusComponentId);
            let cusDirectiveId = 'module-' + self.$uuid.create();
            // 获取组件类型
            let moduleType = curModuleObj.find('.cus_component').attr('type');
            curModuleObj.find('.cus_component').attr('id', cusComponentId);
            // 利用指令，设置组件影子
            const cusDirectiveName = `v-world:${cusDirectiveId}`;
            curModuleObj.find('.cus_directive').attr(cusDirectiveName, '');
            self.$nextTick(function () {
              const strs = `<${moduleType}></${moduleType}>`;
              let MyComponent = Vue.extend({
                template: strs,
                components: {barchart}
              });
              new MyComponent().$mount('#' + cusComponentId);
              // 挂载后渲染状态设置为O 旧组件状态
              curModuleObj.attr('renderstate', 'O');
            });
          }
        }
      });

      $('.sidebar-nav .lyrow').draggable({
        connectToSortable: '.demo',
        helper: 'clone',
        handle: '.drag',
        drag: function (e, t) {
          t.helper.width(400);
        },
        stop: function (e, t) {
          // $('.demo .column').sortable({
          //   opacity: 0.35,
          //   connectWith: '.column'
          // });
        }
      });
    }
  };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

</style>

