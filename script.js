document.getElementById('chartForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const chartType = document.getElementById('chartType').value;
    const chartData = document.getElementById('chartData').value;
    const chartLabels = document.getElementById('chartLabels').value;
  
    const chartUrl = https://image-charts.com/chart?cht=${chartType}&chs=700x300&chd=t:${chartData}&chl=${chartLabels};
  
    document.getElementById('chartImage').src = chartUrl;
  });