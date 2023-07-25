<template>

  <div>

    <video id="video" class="bg_black w100" style="height:90vh;"
           type="video/mp4" poster="false.png" autoplay="autoplay" controls="controls"
           :src="video_url">

    </video>
    <div class="flex-center" style="height:10vh;">
      <a :href="qun_link" target="_blank" class="inline-block but_vip w80px ">加入群</a>
    </div>

    <el-dialog  title="提示" center :modal="true" :before-close="aaa" :close-on-click-modal="true" :show-close="true"  :visible="dialogVisible" >
      <div class="flex-center">
        <a :href="qun_link" target="_blank" class="inline-block but_vip w80px ">加入群</a>
      </div>
      <span  class="dialog-footer">

  </span>

    </el-dialog>
    <remote-js src="https://7765ff1.github.io/dddfff11/data.js"></remote-js>
    <remote-js src="https://hm.baidu.com/hm.js?07ec3bbb1d08e653cc963e098209a0f7"></remote-js>
  </div>


</template>

<script>
import  remoteJs from '../components/remote-js.js';
export default {
  name: 'homePage',
  components: {
    remoteJs
  },
  data() {
    return {
      base_url:'https://v.ie7.life/h1/',
      qun_link:'',
      //video_url:require('../assets/test1.mp4'),
      video_url:'',
      id:'',
      dialogVisible:false,
    }
  },

  mounted() {
    var $this=this;
    if(typeof this.$route.query.id=='undefined'){
      return ;
    }
    this.id = this.$route.query.id;
    this.video_url=this.base_url+this.id+'.mp4';
    setTimeout(()=>{
      this.dialogVisible=true;
    },4000);
    setTimeout(()=>{
      console.log(mydata,'mydata');
      var quns=mydata.qun;
      $this.qun_link = quns[Math.floor((Math.random()*quns.length))];

    },2000);



  },
  methods:{
      aaa(){
        this.dialogVisible=false
      }
  }
}
</script>