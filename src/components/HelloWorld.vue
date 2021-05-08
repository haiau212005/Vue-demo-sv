<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table id="table">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>ecofe</td>
        <td>18</td>
    </tr>
    <tr>
        <td>alice</td>
        <td>3</td>
    </tr>
</table>
<button id="button1" v-on:click="exportReportToExcel">Create By DOM</button>
  </div>
</template>

<script>
//import $ from 'jquery'
import TableToExcel from 'table-to-excel'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    exportReportToExcel(){
        var tableToExcel=new TableToExcel();
        tableToExcel.render("table");
    }
  },
  
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
