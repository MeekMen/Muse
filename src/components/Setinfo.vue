<template>
  <mu-container>
    <!--  -->
        <mu-appbar style="width: 100%;" color="primary" >
          <mu-button icon slot="left" to="/Center">
            <mu-icon value="arrow_back" left></mu-icon>
          </mu-button>
          <span v-if="route == 'phone'">修改手机号</span>
          <span v-else-if="route == 'card'">修改银行卡</span>
          <span v-else-if="route == 'logkey'">修改登录密码</span>
          <span v-else-if="route == 'paykey'">修改支付密码</span>
          <span v-else-if="route == 'handkey'">修改手势密码</span>
          <span v-else-if="route == 'about'">关于</span>
        </mu-appbar>
        
        <div class="setinfo">
            <template v-if="types[0] == route">
              <div class="has">

                <mu-form :model="form" :label-position="labelPosition" label-width="100">
                  <mu-form-item prop="input" label="更换手机号码">
                    <mu-text-field v-model="form.phone"></mu-text-field>
                  </mu-form-item>
                  <mu-form-item prop="input" label="输入验证码">
                    <mu-text-field v-model="form.phonekey"></mu-text-field>
                  </mu-form-item>
                  <mu-flex justify-content="center" align-items="center">
                    <mu-button  full-width color="primary">提交</mu-button>
                  </mu-flex>
                </mu-form>

              </div>
            </template>
            <template v-if="types[3] == route">
              <div class="has">
               <mu-form :model="form" :label-position="labelPosition" label-width="100">
                    <mu-form-item prop="input" label="银行卡号">
                      <mu-text-field v-model="form.phone"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="input" label="银行预留手机号">
                      <mu-text-field v-model="form.phonekey"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item prop="input" label="验证码">
                      <mu-text-field v-model="form.phonekey"></mu-text-field>
                    </mu-form-item>
                    <mu-flex justify-content="center" align-items="center">
                      <mu-button  full-width color="primary">提交</mu-button>
                    </mu-flex>
                </mu-form>
              </div>
            </template>

            <template v-if="types[4] == route || types[5] == route || types[6] == route">
              <div class="has">
                 <mu-form ref="form" :model="validateForm" class="mu-demo-form">
                  <mu-form-item label="用户名" prop="username" :rules="usernameRules">
                    <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
                  </mu-form-item>
                  <mu-form-item label="密码" prop="password" :rules="passwordRules">
                      <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
                  </mu-form-item>
                  <mu-form-item prop="isAgree" :rules="argeeRules">
                    <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
                  </mu-form-item>
                  <mu-form-item>
                    <mu-button color="primary" @click="submit">提交</mu-button>
                    <mu-button @click="clear">重置</mu-button>
                  </mu-form-item>
                </mu-form>
              </div>
            </template>

            <template v-if="types[7] == route">
              <div class="has">
                <h2>关于我们</h2>
              </div>
            </template>

            
        </div>
</mu-container>
  

</template>

<script>
export default {
  name: 'App',
  data () {
      return {
          types:['phone','name','idnumber','card','logkey','paykey','handkey','about'],
          route:'',  //如果types = toute;
          labelPosition: 'top',
          form: {
            phone:'',
            phonekey:'',
            select: '',
            date: '',
            radio: '',
            checkbox: [],
            switch: false,
            slider: 30,
            textarea: ''
          },
          usernameRules: [
            { validate: (val) => !!val, message: '必须填写用户名'},
            { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
          ],
          passwordRules: [
            { validate: (val) => !!val, message: '必须填写密码'},
            { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
          ],
          argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
          validateForm: {
            username: '',
            password: '',
            isAgree: false
          }


        }
      },
      created: function () {
      this.$data.route = this.$route.query.types
        console.log(this.$data.route);

      },
      methods: {
        submit () {
          this.$refs.form.validate().then((result) => {
            console.log('form valid: ', result)
          });
        },
        clear () {
          this.$refs.form.clear();
          this.validateForm = {
            username: '',
            password: '',
            isAgree: false
          };
        }
      }
}
</script>
<style>
/* .mu-bottom-nav{display: none} */
.setinfo>div{display: none; padding: 0 10px}
.setinfo>div.has{display: block}
.mu-form{margin-top: 10px;}
.mu-form-item{margin-bottom: 0px;}
</style>