
// Build the chart
Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Choose the cash amount your company has'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Cash Flow',
      colorByPoint: true,
      data: [{
        name: '5000K-10.000K',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: '3000K-5000K',
        y: 11.84
      }, {
        name: '1000K-3000K',
        y: 10.85
      }, {
        name: '1000K',
        y: 4.67
      }, {
        name: '< 500K',
        y: 4.18
      }]
    }]
  });