

  
  // Daily Traffic Dashboards Default
  
  export const barChartDataDailyTraffic = [
    {
      name: "Daily Traffic",
      data: [20, 30, 40, 20, 45, 50, 30]
    }
  ];
  
  export const barChartOptionsDailyTraffic = {
    chart: {
      toolbar: {
        show: false
      }
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined
      },
      onDatasetHover: {
        style: {
          fontSize: "12px",
          fontFamily: undefined
        }
      },
      theme: "dark"
    },
    xaxis: {
      categories: ["10th", "11th", "12th", "13th", "14th", "Yesterday", "Today"],
      show: false,
      labels: {
        show: true,
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500"
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: true,
      color: "black",
      labels: {
        show: true,
        style: {
          colors: "#CBD5E0",
          fontSize: "14px"
        }
      }
    },
    grid: {
      show: false,
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true
        }
      },
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          [
            {
              offset: 0,
              color: "#4318FF",
              opacity: 1
            },
            {
              offset: 100,
              color: "rgba(67, 24, 255, 1)",
              opacity: 0.28
            }
          ]
        ]
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50px"
      }
    }
  };
  