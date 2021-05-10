<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table id="simpleTable1" data-cols-width="70,15,10">
        <tbody>
          <tr>
            <td
              class="header"
              colspan="5"
              data-f-sz="25"
              data-f-color="FFFFAA00"
              data-a-h="center"
              data-a-v="middle"
              data-f-underline="true"
            >
              Sample Excel
            </td>
          </tr>
          <tr>
            <td
              colspan="5"
              data-f-italic="true"
              data-a-h="center"
              data-f-name="Arial"
              data-a-v="top"
            >
              Italic and horizontal center in Arial
            </td>
          </tr>
          <tr>
            <th data-a-text-rotation="90">Col 1 (number)</th>
            <th data-a-text-rotation="vertical">Col 2</th>
            <th data-a-wrap="true">Wrapped Text</th>
            <th data-a-text-rotation="-45">Col 4 (date)</th>
            <th data-a-text-rotation="-90">Col 5</th>
          </tr>
          <tr>
            <td rowspan="1" data-t="n">1</td>
            <td
              rowspan="1"
              data-b-b-s="thick"
              data-b-l-s="thick"
              data-b-r-s="thick"
            >
              ABC1
            </td>
            <td rowspan="1" data-f-strike="true">Striked Text</td>
            <td data-t="d">05-20-2018</td>
            <td data-t="n" data-num-fmt="$ 0.00">2210.00</td>
          </tr>

          <tr>
            <td rowspan="2" data-t="n">2</td>
            <td rowspan="2" data-fill-color="FFFF0000" data-f-color="FFFFFFFF">
              ABC 2
            </td>
            <td rowspan="2" data-a-indent="3">Merged cell</td>
            <td data-t="d">05-21-2018</td>
            <td data-t="n" data-b-a-s="dashed" data-num-fmt="$ 0.00">230.00</td>
          </tr>
          <tr>
            <td data-t="d">05-22-2018</td>

            <td data-t="n" data-num-fmt="$ 0.00">2493.00</td>
          </tr>

          <tr>
            <td
              colspan="4"
              align="right"
              data-f-bold="true"
              data-a-h="right"
              data-hyperlink="https://google.com"
            >
              <b><a href="https://google.com">Hyperlink</a></b>
            </td>
            <td
              colspan="1"
              align="right"
              data-t="n"
              data-f-bold="true"
              data-num-fmt="$ 0.00"
            >
              <b>4933.00</b>
            </td>
          </tr>
          <tr>
            <td colspan="4" align="right" data-f-bold="true" data-a-rtl="true">
              مرحبا
            </td>
            <td
              colspan="1"
              align="right"
              data-t="n"
              data-f-bold="true"
              data-num-fmt="$ 0.00"
            >
              <b>2009.00</b>
            </td>
          </tr>
          <tr>
            <td data-b-a-s="dashed" data-b-a-c="FFFF0000">All borders</td>
          </tr>
          <tr>
            <td data-t="b">true</td>
            <td data-t="b">false</td>
            <td data-t="b">1</td>
            <td data-t="b">0</td>
            <td data-error="#VALUE!">Value Error</td>
          </tr>
          <tr>
            <td
              data-b-t-s="thick"
              data-b-l-s="thick"
              data-b-b-s="thick"
              data-b-r-s="thick"
              data-b-t-c="FF00FF00"
              data-b-l-c="FF00FF00"
              data-b-b-c="FF00FF00"
              data-b-r-c="FF00FF00"
            >
              All borders separately
            </td>
          </tr>
          <tr data-exclude="true">
            <td>Excluded row</td>
            <td>Something</td>
          </tr>
          <tr>
            <td>Included Cell</td>
            <td data-exclude="true">Excluded Cell</td>
            <td>Included Cell</td>
          </tr>
        </tbody>
      </table>

    <button id="button-excel" v-on:click="exportReportToExcel">Create Excel</button>
    <!-- <button type="button" v-on:click="exportReportToExcel">Export</button> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    exportReportToExcel(){
        let TableToExcel = window.TableToExcel;
        let tableHtml = document.getElementById('simpleTable1');
        TableToExcel.convert(tableHtml, { // html code may contain multiple tables so here we are refering to 1st table tag
            name: 'export.xlsx', // fileName you could use any name
            sheet: {
            name: 'Sheet 1' // sheetName
            }
        });
        //console.log(this.$('#simpleTable1'));
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
        text-align:center; font-size: 25px; text-decoration: underline; color: #FFAA00;
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
