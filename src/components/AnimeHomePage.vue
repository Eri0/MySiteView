<template>
  <div>
    <el-radio-group v-model="form.type">
      <el-radio-button label="热血"></el-radio-button>
      <el-radio-button label="搞笑"></el-radio-button>
      <el-radio-button label="动作"></el-radio-button>
      <el-radio-button label="魔法"></el-radio-button>
      <el-radio-button label="校园"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>

  import {getAnimeList} from "../axios/api";
  export default {
    name: 'AnimeHomePage',
    data () {
      return {
        form:{
          type:'',
          year:'',
          area:''
        },
        AnimeList:[]
      }
    },
    mounted(){
      this.getAnimeList();
    },
    methods:{
      getAnimeList(){
        var search ={};
        if(this.form.type){
          search['type'] = this.form.type;
        }
        if(this.form.area){
          search['area'] = this.form.area;
        }
        if(this.form.year){
          search['year'] = this.form.year;
        }
        getAnimeList({
          'limit':2,
          'offset':1
        },search).then(res=>{
          this.AnimeList = res.data;
        })
      }
    }
  }
</script>
