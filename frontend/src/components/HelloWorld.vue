<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click='post'>Post /test</button>
    <button @click='get'>Get /test/sample</button>
    <button @click='postToSample'>Post /test/sample</button>
    <div>
      {{responce}}
    </div>
  </div>

</template>

<script>
import Methods from '../../api/methods'
import axios from 'axios'


export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return {
      responce: 'this is responce'
    }
  },
  methods: {
   async post(){
      let responce = await Methods.testPosting()
      this.responce = responce
      console.log(responce)
   },
   get(){
      axios.get('http://localhost:3000/test/sample').then((res)=>{
        this.responce = res
     })
   },
   postToSample(){
      const data = {text: 'this is from HelloWorld.vue'}
      axios.post('http://localhost:3000/test/sample', data).then((res)=>{
        this.responce = res
      })
   } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
