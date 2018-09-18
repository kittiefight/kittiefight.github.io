$(function() {

    // Fighting_Ground.html chart
    var bar_ctx = document.getElementById('doughnut-chart').getContext('2d');

    var gradient1 = bar_ctx.createLinearGradient(0, 0, 0, 300);
    gradient1.addColorStop(1, '#5ab8eb');
    gradient1.addColorStop(0, '#8860d0');

    var gradient2 = bar_ctx.createLinearGradient(0, 0, 0, 300);
    gradient2.addColorStop(1, '#1accfc');
    gradient2.addColorStop(0, '#00d4bd');

    var bar_chart = new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
            datasets: [{
                // label: "Population (millions)",
                backgroundColor: [gradient1, gradient2],
                hoverBackgroundColor: [gradient1, gradient2],
                borderWidth: 0,
                data: [53, 47]
            }]
        },
        options: {
            title: {
                display: false,
                text: ''
            },
            tooltips: {
                enabled: false
            },
            animation: {
                onProgress: function() {
                    var chartInstance = this.chart;
                    var ctx = chartInstance.ctx;
                    var height = chartInstance.controller.boxes[0].bottom;
                    ctx.textAlign = "center";
                    Chart.helpers.each(this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        Chart.helpers.each(meta.data.forEach(function(bar, index) {
                            var centerPoint = bar.getCenterPoint();
                            ctx.fillStyle = 'white';
                            ctx.font = "25px Exo";
                            ctx.fillText(dataset.data[index] + "%", centerPoint.x, centerPoint.y);
                        }), this)
                    }), this);
                }
            }

        },
    });
    // chart end

});

$(document).ready(function() {
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        arrows: false,
        cssEase: 'linear'
    });
});