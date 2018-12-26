<!-- page2 -->
<template>
  <mu-container>
    <!--  -->
        <mu-appbar style="width: 100%;" color="primary" >
          <mu-button icon slot="left" to="/">
            <mu-icon value="arrow_back"></mu-icon>
          </mu-button>账户信息
        </mu-appbar>
        
        <div class="center">
            <mu-list>
              <!-- <mu-sub-header>头像</mu-sub-header> -->
              <p></p>
              <mu-list-item avatar button :ripple="true" to="/Setinfo?types=phone">
                <mu-list-item-action>
                  <mu-avatar>
                    <img src="https://muse-ui.org/img/avatar1.20cfec72.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>155****8283</mu-list-item-title>
                <mu-list-item-action>
                  <mu-icon value="keyboard_arrow_right"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <p></p>
              <mu-list-item avatar button :ripple="true">
                <mu-list-item-title>姓名</mu-list-item-title>
                <mu-list-item-action>
                  <mu-list-item-title>张三</mu-list-item-title>
                </mu-list-item-action>
              </mu-list-item>

              <mu-list-item avatar button :ripple="true">
                <mu-list-item-title>身份证号</mu-list-item-title>
                <mu-list-item-action>
                  <mu-list-item-title>230127199306****16</mu-list-item-title>
                </mu-list-item-action>
              </mu-list-item>

              <mu-list-item avatar button :ripple="true" to="/Setinfo?types=card">
                <mu-list-item-title>银行卡管理</mu-list-item-title>
                <mu-list-item-action>
                  <mu-icon value="keyboard_arrow_right"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <p></p>
              <mu-list-item avatar button :ripple="true" to="/Setinfo?types=logkey">
                <mu-list-item-title>登录密码</mu-list-item-title>
                <mu-list-item-action>
                  <span class="setkey">修改</span><mu-icon value="keyboard_arrow_right" right></mu-icon>
                </mu-list-item-action>
              </mu-list-item>

              <mu-list-item avatar button :ripple="true" to="/Setinfo?types=paykey">
                <mu-list-item-title>支付密码</mu-list-item-title>
                <mu-list-item-action>
                  <span class="setkey">修改</span>
                  <mu-icon value="keyboard_arrow_right" left></mu-icon>
                </mu-list-item-action>
              </mu-list-item>

              <mu-list-item avatar button :ripple="true" to="/Setinfo?types=handkey">
                <mu-list-item-title>手势密码</mu-list-item-title>
                <mu-list-item-action>
                  <span class="setkey">未设置</span>
                  <mu-icon value="keyboard_arrow_right"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <p></p>
              <mu-list-item avatar button :ripple="true" to="/About">
                <mu-list-item-title>关于我们</mu-list-item-title>
                <mu-list-item-action>
                  <mu-icon value="keyboard_arrow_right"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>


            </mu-list>
        </div>
</mu-container>
  

</template>

<script>
export default {
  name: 'App',
  data () {
      return {
          
        }
      },
      created: function () {
        console.log(this);
      },
      methods: {
        
        
      }
}
</script>
<style scoped>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
}
.setkey{
  display: inline;
    position: absolute;
    right: 36px;
    top:10px;
}
.mu-item-action .mu-item-title{ text-align:right }
</style>