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


    
    <div class="about">
      <h1>This is an about page</h1>
      <h2>{{bottomNav}}</h2>
      <template v-for="(item, index) in intab">
        <input :type="item.type" :name='item.name' :value='item.name' @click="toggleIn(item.name,index)">
        <p></p>
      </template>
      <!--  -->
      <mu-button large fab color="purple">
        <mu-icon value="thumb_up"></mu-icon>
      </mu-button>
    
    </div>
</mu-container>
  

</template>

<script>
export default {
  name: 'App',
  data () {
      return {
        bottomNav: 'movies',
        intab:[{"name":"Saab","type":"button"},{"name":"Volvo","type":"button"},{"name":"BMW","type":"button"}],
        open:false,
        position:'left'
        }
      },
      created: function () {
        console.log('this is: ' + this.bottomNav);
      },
      methods: {
        toggleIn (name,index) {
          var el = this;
          for (var i = 0; i < el.intab.length; i++) {
            el.intab[i].type = 'button'
          }
          el.$set(el.intab,index,{"name":''+name+'',"type":"text"})

        },
        
      }
}
</script>
<style scoped>
  .container{padding: 0}
  .mu-bottom-nav{ position: fixed; bottom: 0; left: 0;width: 100%; }
  .about{text-align: center}
  .btn{
    background-color: #ff4081;
    font-size: 14px;
    min-width: 88px;
    height: 36px;
    line-height: 36px;
    border-radius: 2px;
    color: white;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);    display: inline-block;
    overflow: hidden;
    position: relative;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.23,1,.32,1);
    text-decoration: none;
    text-align: center;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    cursor: pointer;
    -webkit-box-flex: 0;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -ms-flex-negative: 0;
    flex-shrink: 0;}
</style>
