document.addEventListener('DOMContentLoaded', () => {
    const chartForm = document.getElementById('chartForm');
    const chartTypeInput = document.getElementById('chartType');
    const chartOptions = document.querySelectorAll('.chart-option');
    const chartImage = document.getElementById('chartImage');
    let chartTypeSelected = false;
  
    function generateChart() {
      const chartType = chartTypeInput.value;
      const chartDataInput = document.getElementById('chartData');
      const chartLabelsInput = document.getElementById('chartLabels');
      
      const chartData = chartDataInput.value.trim();
      const chartLabels = chartLabelsInput.value.trim();
      
      const dataValues = chartData.split(',');
      const labelValues = chartLabels.split('|');
  
      // Check if the number of data points matches the number of labels
      if (dataValues.length !== labelValues.length) {
        alert('Error: The number of data points must match the number of labels.');
        return;
      }
  
      const baseUrl = 'https://image-charts.com/chart';
      const params = new URLSearchParams({
        cht: chartType,
        chd: `t:${chartData}`,
        chl: chartLabels,
        chs: '700x300',
      });
  
      chartImage.src = `${baseUrl}?${params.toString()}`;
    }
  
    chartOptions.forEach(option => {
      option.addEventListener('click', () => {
        chartOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        chartTypeInput.value = option.getAttribute('data-chart-type');
        chartTypeSelected = true;
        generateChart();
      });
    });
  
    document.getElementById('chartData').addEventListener('input', () => {
      if (chartTypeSelected) {
        generateChart();
      }
    });
  
    document.getElementById('chartLabels').addEventListener('input', () => {
      if (chartTypeSelected) {
        generateChart();
      }
    });
  
    chartForm.addEventListener('submit', event => {
      event.preventDefault();
      generateChart();
    });
  });
  
