<!-- page1 -->
<template>
  <mu-container>
    <!--  -->
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" color="primary" @click="open = !open" to="/Center">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>账户信息
    </mu-appbar>

    <div class="about">
      <h1>About Page</h1>
      <p v-text="message" @mouseover="hovtxt"></p>
      <p><input type="text" v-focus></p>
      <p>
        <select name="" id="" v-model="sel">
          <option disabled value="">请选择</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>
        <span>{{sel}}</span>
      </p>

      <mu-flex justify-content="center">
        <span>
          <input type="checkbox" id="checkbox" v-model="checked">
          <label for="checkbox">{{ checked }}</label>
        </span>

        <span>
          <input type="radio" id="one" value="One" v-model="picked">
          <label for="one">One</label>
          <br>
          <input type="radio" id="two" value="Two" v-model="picked">
          <label for="two">Two</label>
          <br>
          <span>Picked: {{ picked }} </span>

        </span>
      </mu-flex>

    <mu-flex justify-content="center">
      <mu-button @click="openSimple('Dalog')" v-bind:disabled='once' >openSimple</mu-button>
    </mu-flex>
    <br>
    
    <ComponentA v-for="item in posts" :key="item.id" :item="item" v-on:giveAdvice="none=0">插槽
    </ComponentA>
    <todo-slot>
      <h5 slot="head">todo插槽head</h5>
      <h5 slot="con">todo插槽con</h5>
    </todo-slot>

    <div class="tabs">
      <ul class="tabmenu">
        <li class="btn" @click="seltab(0)" :class="tabs==0 ? 'active' : ''">地 点</li>
        <li class="btn" @click="seltab(1)" :class="tabs==1 ? 'active' : ''">项 目</li>
      </ul>
      <div class="tabcon">
        <div class="taber tab0" :class="tabs==0 ? 'show' : ''">
          地点,地点，地点，地点(0)
        </div>
        <div class="taber tab1" :class="tabs==1 ? 'show' : ''">
          项目，项目，项目，项目(1)
        </div>
      </div>
    </div>

    </div>
</mu-container>
  

</template>

<script>
var mixin = {
  data: function () {
    return {
      message: '滑过我惊喜！',
      foo: 'abc',
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' }
      ]
    }
  }};
var ComponentA = {
  data: function () {
    return {
      count: 0,
      fontSize:1
    }},
  props:['item'],
  template: '<div><p :style="{ fontSize: fontSize + \'em\' }">{{item.title}}--{{item.id}}</p><button class="btn" v-on:click="giveAdvice(this)" >放大了{{ count }}次</button><slot></slot></div>',
  methods:{
    giveAdvice(el){
      this.$emit('giveAdvice',''+(this.fontSize += 0.1)+'');
      console.log($(el))
      let els = this.$el.children[1];
        $(els).velocity({
            opacity: 0
        }, {
            // 动画循环执行3次
            loop:1,
            // 回调函数将在第3次循环结束后 执行一次
            complete: function(elements) {
                alert("I am hungry！");
                // console.log(this)
            }
        });
     
    }
  }};
// 
// begin
export default {
  name: 'App',
  mixins: [mixin],
  data () {
  return {
    bottomNav: 'movies',
    open:false,
    position:'left',
    once:false,
    none:0,
    checked:false,
    picked: '',
    sel:'',
    tabs:0,
    }
  },
  created: function () {
    // console.log(this.directives);
  },
  methods: {
    toggleIn (name,index) {
      let el = this;
      for (let i = 0; i < el.intab.length; i++) {
        el.intab[i].type = 'button'
      }
      el.$set(el.intab,index,{"name":''+name+'',"type":"text"})
    },
    hovtxt(){
      alert('划过了我')
    },
    openSimple(writ){
      alert('只能点击一次')
      let onces = this.$data.once = true;
    },
    seltab(index){
      this.$data.tabs = index;
    }
  },
  components:{
    'ComponentA':ComponentA,
    'todo-slot':{
      data(){
        return {
          txt:'slot测试',
          fsize:'fz20'
        }
      },
      template:'<div> <span>插槽内容：</span> <slot name="head"></slot> <slot name="con"></slot></div>'
    }
  },
  directives:{
    focus:{
      inserted:function(el){
        el.focus();
      }
    }
  },
      
}
</script>
<style scoped>
  .about{ padding-bottom: 80px}
  .about p{font-size: 18px;}
  .fz20{font-size: 20px;}
  .container{padding: 0}
  .mu-bottom-nav{display:none;}
  .mu-bottom-nav{position: fixed; bottom: 0; left: 0;width: 100%; }
  .tabmenu{text-align: left; margin: 0;padding: 0}
  .tabmenu li{ width: 60px; height: 26px; line-height: 26px; display: inline-block; background: red; color: white; text-align: center}
  .tabcon{border: 1px solid #9e9e9e}
  .tabcon .taber{width: 100%;  height: 90px; text-align: left; display: none;}
  .show{display: block!important;}
  .active{background: yellow!important; color: red!important}
</style>
