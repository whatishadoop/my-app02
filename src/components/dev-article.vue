<template>
    <Layout>
        <Header class="header">
            <!--layout + grid布局组合使用-->
            <Row>
                <Col span="4">
                  <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="24"></Icon>
                </Col>
                <Col span="10" offset="2">
                    <!--mode="horizontal"设置菜单水平排列，菜单高亮显示:active-name-->
                    <Menu mode="horizontal" :active-name="activeName">
                        <!--to为mune自带路由导航-->
                        <MenuItem name="/app" to="/app">设计小程序</MenuItem>
                        <MenuItem name="/assemble" to="/assemble">组装小程序</MenuItem>
                        <MenuItem name="/manage" to="/manage">管理小程序</MenuItem>
                        <MenuItem name="/dev" to="/dev">模板管理</MenuItem>
                    </Menu>
                </Col>
                <Col span="8">
                    <!-- row中继续嵌套row,内部row仍然占用24个单元格-->
                    <Row>
                        <Col span="2" offset="6">
                            <!--带头像的下拉菜单-->
                            <Dropdown>
                              <Avatar style="background-color: #2d8cf0" icon="ios-person"/>
                              <DropdownMenu slot="list">
                                    <DropdownItem>我的主页</DropdownItem>
                                    <DropdownItem>我的收藏</DropdownItem>
                                    <DropdownItem>
                                        设置
                                        <!--徽标数设置通知未读数的角标，提醒用户点击-->
                                        <Badge status="error"></Badge>
                                    </DropdownItem>
                                    <!--分割线-->
                                    <DropdownItem divided>退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                        <Col span="2">
                            <Icon type="ios-chatboxes" size="24" @click="changeLocale"/>
                        </Col>
                        <Col span="14">
                            <Button @click="downloadPageClick">保存</Button>
                            <Button @click="loadPageClick">加载</Button>
                            <Button @click="cleanContentClick">取消</Button>
                            <Button>{{$t("message.title")}}</Button>
                        </Col>
                     </Row>
                </Col>
            </Row>
        </Header>
        <!--layout嵌套布局-->
        <Layout>
            <!--设置左边Sider 传入属性，v-model="isCollapsed"设置菜单缩放与collapsible配合使用-->
            <!--:class="{ 'sider-hide':isCollapsed } 根据变量属性值设置对应的样式-->
            <Sider ref="side1" hide-trigger class="sider" width="240" collapsible :collapsed-width="64" v-model="isCollapsed" :class="{ 'sider-hide':isCollapsed }" v-if="showmenu">
                <!--修改菜单主题色为dark，active-name="option2" 第二项设置为高亮显示-->
                <Menu class="sider-menu" theme="dark" active-name="option2" width="auto" :class="menuitemClasses">
                    <MenuItem name="option1">
                        <!--设置菜单项显示内容-->
                        <Icon type="ios-search"></Icon>
                        <span>Option 1</span>
                    </MenuItem>
                    <MenuItem name="option2">
                        <Icon type="ios-apps"></Icon>
                        <span>Option 2</span>
                    </MenuItem>
                    <MenuItem name="option3">
                        <Icon type="ios-bookmark"></Icon>
                        <span>Option 3</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <!--设置中间内容区域,content必须放入元素进行占位-->
            <Content class="content" :class="{ 'content-expand':isCollapsed}">
                <!--每个页面需要定义的内容,若没有内容card组件默认会撑开整个区域-->
                <slot></slot>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    export default {
        name: 'dev-article',
        props: {
          showmenu: {
            type: Boolean,
            default: true
          }
        },
        data () {
            return {
                // 菜单路由赋值
                activeName: this.$route.path,
                count: 2,
                isCollapsed: false
            };
        },
        computed: {
          rotateIcon () {
            return [
              'menu-icon',
              this.isCollapsed ? 'rotate-icon' : ''
            ];
          },
          menuitemClasses () {
            return [
              'menu-item',
              this.isCollapsed ? 'collapsed-menu' : ''
            ];
          }
        },
        methods: {  // 中英文切换
          downloadPageClick () {
            this.$bus.$emit('on-downloadPage');
          },
          loadPageClick () {
            this.$bus.$emit('on-loadPage');
          },
          cleanContentClick () {
            this.$bus.$emit('on-cleanContent');
          },
          collapsedSider () {
            this.$refs.side1.toggleCollapse();
          },
          changeLocale() {
            let locale = this.$i18n.locale;
            locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh';
          }
        },
        created () {
            // 菜单路由赋值
            this.activeName = this.$route.path;
        }
    };
</script>

<style scoped>
    .header {  /*设置header部分颜色以及fix固定布局*/
        width: 100%;
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .logo {  /*设置logo样式*/
        height: 50px;
        margin: 5px;
    }
    .notification {  /*设置TabPane 居中显示*/
        text-align: center;
        height: 200px;
    }
    .ivu-menu-horizontal.ivu-menu-light:after {  /*取消顶部heaner区域下方黑色影印，直接在chorme中找到对应的样式，拷贝过来进行覆盖修改即可*/
        display: none;
    }
    .sider {  /*设置左边菜单样式为固定布局*/
        position: fixed;
        height: 100%;
        left: 0;
        overflow: auto;
        z-index: 1;
    }
    .sider-menu {
        margin-top: 60px;
    }
    .sider-hide .ivu-menu-item span {  /*设置收缩后样式，图标对应的文字消失*/
        display: none;
    }
    .content {  /*设置中间内容区域样式，动画效果*/
        margin-left: 240px;
        margin-top: 60px;
        padding: 16px;
        transition: all 0.2s ease-in-out;
    }
    .content-expand {
        margin-left: 64px;  /*展开时距离左边64px*/
    }
    .menu-icon{
      transition: all .3s;
    }
    .rotate-icon{
      transform: rotate(-90deg);
    }
    .menu-item span{
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
    }
    .menu-item i{
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
    }
    .collapsed-menu span{
      width: 0px;
      transition: width .2s ease;
    }
    .collapsed-menu i{
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
    }
</style>
