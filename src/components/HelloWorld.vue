<template>
  <div class="hello">
    <h1>DateTime Picker</h1>
    <a-range-picker @change="onChange" />
  </div>
</template>

<script>
export default {
  methods: {
    onChange(arg){
      // console.log(arg[0]._d.toLocaleString('en-CA') + ' ~~ ' + arg[1]._d.toLocaleString('en-CA')) // kiểu ngày tháng
      // console.log(parseInt((arg[0]._d.getTime()/1000).toFixed(0)) + ' ~~ ' + parseInt((arg[1]._d.getTime()/1000).toFixed(0))); // kiểu unix timestamp
      console.log(parseInt((arg[0]._d.getTime()/1000).toFixed(0)));
      console.log(parseInt((arg[1]._d.getTime()/1000).toFixed(0)));
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table, td, th { 
        border: 1px solid; border-collapse: collapse; 
    }
    .header{
       font-size: 25px; text-decoration: underline; color: #FFAA00;
    }
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
