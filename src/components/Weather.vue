<!-- page1 -->
<template>
  <mu-container>
    <!--  -->
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" color="primary" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      Title
    </mu-appbar>

    <mu-drawer :open.sync="open" :docked="false" :right="position === 'right'">
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item  @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>


    
    <div class="weather">
      <h3>天气查询</h3>
      <mu-form :model="form" class="mu-demo-form"  label-width="100">
        <mu-form-item prop="input"  label="请输入位置" :rules="usernameRules">
          <mu-text-field v-model="form.city"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="input" label="请输入位置" class="hidden">
          <mu-text-field v-model="form.version"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">查看天气</mu-button>
        </mu-form-item>
        <ul :class="response =='[object Object]'?'wealist hide':'wealist show'"  @click="close">
          <h1>{{form.city}}</h1>
          <li v-for="(item,index) in response" :class="{'active':!index}" :key="index" >
            <p>
              <span v-if="index==0">{{item.day}}</span>
              <span v-else>{{item.week}}</span>
              <span>{{item.wea}}</span>
              <span>{{item.tem1}}</span>
              <span>{{item.tem2}}</span>
            </p>
          </li>
        </ul>

      </mu-form>

       <h3>补仓计算器</h3>
      <mu-form :model="form" class="mu-demo-form"  label-width="100">
       <div style="display:flex">
          <mu-form-item prop="input" label="第一次成本价">
          <mu-text-field v-model="conver.firstcost"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="input" label="第一次持仓">
            <mu-text-field v-model="conver.firsthold"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="input" label="持仓市值">
            <mu-text-field v-model="conver.firstcos"></mu-text-field>
          </mu-form-item>
       </div>
       <div style="display:flex">
          <mu-form-item prop="input" label="本次成本价">
          <mu-text-field v-model="conver.nowcost"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="input" label="本次持仓">
            <mu-text-field v-model="conver.nowhold"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="input" label="持仓市值">
            <mu-text-field v-model="conver.nowcos"></mu-text-field>
          </mu-form-item>
       </div>
        <mu-form-item>
          <p>本次补仓后成本：<span style="color:red;font-size:16px;">{{countNum.costhode}}</span>元</p>
        </mu-form-item>
      </mu-form>

      

    </div>
</mu-container>
  

</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data () {
      return {
          bottomNav: 'movies',
          intab:[{"name":"Saab","type":"button"},{"name":"Volvo","type":"button"},{"name":"BMW","type":"button"}],
          open:false,
          position:'left',
          response:{},
          usernameRules: [
            { validate: (val) => !!val, message: '必须填写城市'}
          ],
          form:{
            city: '',
            version:'v1'
          },
          conver:{
            firstcost:6.902,
            firsthold:3300,
            firstcos:0,
            nowcost:3,
            nowhold:6600,
            nowcos:0,
            costhode:0,
          }
        }
      },
      created: function () {
        // this.getweather();
      },
      computed:{
        countNum(){
          let firstcos =  parseFloat(this.conver.firsthold)*parseFloat(this.conver.firstcost);
          let nowcos = parseFloat(this.conver.nowhold)*parseFloat(this.conver.nowcost);
          let costhode =(firstcos+nowcos)/(parseFloat(this.conver.firsthold)+parseFloat(this.conver.nowhold))
          this.conver.firstcos = firstcos;
          this.conver.nowcos = nowcos;
          return {'costhode':costhode,'firstcos':firstcos,'nowcos':nowcos}
        }
        
      },
      methods: {
        submit () {
          this.getweather();
        },
        close(){
          this.response = {};
        },
        getweather(){
          let vmine = this;
          //axios
          axios.get('https://www.tianqiapi.com/api/', {
            params: {
              version:this.form.version,
              city: this.form.city
            }
          })
          .then(function (response) {
            vmine.response = response.data.data;
          })
          .catch(function (error) {
            console.log(error);
          })
          // 本地存储版本
          // if (localStorage.getItem('response') == null) {
          //     // axios
          //     axios.get('https://www.tianqiapi.com/api/', {
          //         params: {
          //           version:this.form.version,
          //           city: this.form.city
          //         }
          //       })
          //       .then(function (response) {
          //         console.log(response)
          //         vmine.response = response;
          //         var newres = JSON.stringify(response);
          //         localStorage.setItem("response", newres);
                 
          //       })
          //       .catch(function (error) {
          //         console.log(error);
          //       })
          // }else{
          //   vmine.response = JSON.parse(localStorage.getItem('response'))
          // }
          
        }
      }
}
</script>
<style scoped>
  .weather{padding:20px 10px;}
  .hidden{display: none}
  h1{text-align: center; margin-bottom: 40px;}
  .wealist ul,li{list-style-type: none; margin: 0;padding: 0;}
  .wealist ul{display: flex; flex-direction:column;  padding: 10px;  position: fixed; top: 0; left: 0; z-index: 6; height: 100%; width: 100%;  background: #95cdff; color: white}
  .active{border-bottom: 1px solid white}
  .active span:nth-child(2){ position: relative;top: -46px;left: 42px;}
  .wealist ul p{display: inline-flex;justify-content: space-between; width: 100%}
  .wealist ul p span:first-child{text-align: left}
  .wealist ul p span:nth-child(2){text-align: center}
  .wealist ul p span{ width: 25%; text-align: right}
  .hide{display: none;}
  .show{display: block;}
</style>
