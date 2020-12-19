<template>
  <div>
    <v-chart :force-fit="true" :height="height" renderer="svg">
      <v-tooltip :on-show="onTooltipShow" :on-hide="onTooltipHide" :on-change="onTooltipChange"></v-tooltip>
      <v-axis></v-axis>
      <v-legend></v-legend>
      <v-view :data="data" :scale="scale" :filter="filter">
        <v-stack-bar :position="'year*percent'" :color="'country'" :v-style="stackBarStyle"></v-stack-bar>
      </v-view>
    </v-chart>
  </div>
</template>

<script>
 const data = [
  { country: 'Europe', year: '1750', value: 163 },
  { country: 'Europe', year: '1800', value: 203 },
  { country: 'Europe', year: '1850', value: 276 },
  { country: 'Europe', year: '1900', value: 408 },
  { country: 'Europe', year: '1950', value: 547 },
  { country: 'Europe', year: '1999', value: 729 },
  { country: 'Europe', year: '2050', value: 628 },
  { country: 'Europe', year: '2100', value: 828 },
  { country: 'Asia', year: '1750', value: 502 },
  { country: 'Asia', year: '1800', value: 635 },
  { country: 'Asia', year: '1850', value: 809 },
  { country: 'Asia', year: '1900', value: 947 },
  { country: 'Asia', year: '1950', value: 1402 },
  { country: 'Asia', year: '1999', value: 3634 },
  { country: 'Asia', year: '2050', value: 5268 },
  { country: 'Asia', year: '2100', value: 7268 }
];
 const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.2%',
}];
const DataSet = require('@antv/data-set');
const ds = new DataSet();
const dv = ds.createView().source(data);

dv.transform({
  type: 'percent',
  field: 'value',
  dimension: 'country',
  groupBy: ['year'],
  as: 'percent'
});

const filter = [{
  dataKey: 'country',
  callback: (ev) => {
    return ev === 'Europe';
  }
}];

export default {
    name:'chart',
  data() {
    return {
      data: dv.rows,
      scale,
      height: 400,
      filter,
      stackBarStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      onTooltipShow: () => {
        // console.log('show');
      },
      onTooltipHide: () => {
        // console.log('hide');
      },
      onTooltipChange: () => {
        // console.log('change');
      },
    };
  },
  methods: {

  }
};
</script>
