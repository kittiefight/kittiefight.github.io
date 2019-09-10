$(() => {
  // Fighting_Ground.html chart
  const bar_ctx = document.getElementById('doughnut-chart').getContext('2d');

  const gradient1 = bar_ctx.createLinearGradient(0, 0, 0, 300);
  gradient1.addColorStop(1, '#5ab8eb');
  gradient1.addColorStop(0, '#8860d0');

  const gradient2 = bar_ctx.createLinearGradient(0, 0, 0, 300);
  gradient2.addColorStop(1, '#1accfc');
  gradient2.addColorStop(0, '#00d4bd');

  const bar_chart = new Chart(document.getElementById('doughnut-chart'), {
    type: 'doughnut',
    data: {
      datasets: [
        {
          // label: "Population (millions)",
          backgroundColor: [gradient1, gradient2],
          hoverBackgroundColor: [gradient1, gradient2],
          borderWidth: 0,
          data: [53, 47],
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: '',
      },
      tooltips: {
        enabled: false,
      },
      animation: {
        onProgress() {
          const chartInstance = this.chart;
          const ctx = chartInstance.ctx;
          const height = chartInstance.controller.boxes[0].bottom;
          ctx.textAlign = 'center';
          Chart.helpers.each(
            this.data.datasets.forEach(function(dataset, i) {
              const meta = chartInstance.controller.getDatasetMeta(i);
              Chart.helpers.each(
                meta.data.forEach((bar, index) => {
                  const centerPoint = bar.getCenterPoint();
                  ctx.fillStyle = 'white';
                  ctx.font = '25px Exo';
                  ctx.fillText(
                    `${dataset.data[index]}%`,
                    centerPoint.x,
                    centerPoint.y,
                  );
                }),
                this,
              );
            }),
            this,
          );
        },
      },
    },
  });
  // chart end
});

$(document).ready(() => {
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    arrows: false,
    cssEase: 'linear',
  });
});
