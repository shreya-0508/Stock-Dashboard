import React, { Component } from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

export class ChartSection extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      Price: {
        options: {
          chart: {
            id: 'area-datetime',
            type: 'area',
          },
          grid: {
            show: false,
          },
          title: {
            text: 'Market Price',
            style: {
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#299617',
            },
          },
          stroke: {
            width: 2,
            curve: 'smooth',
          },
          xaxis: {
            type: 'datetime',
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            show: false,
          },
          colors: ['#299617'],
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: 'dark',
          },
          selection: 365,
        },
        series: [
          {
            name: 'Market Price',
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
      Tot_Vol: {
        options: {
          chart: {
            id: 'area-datetime2',
            type: 'area',
          },
          fill: {
            type: 'solid',
            opacity: 0.8,
            color: '#0018f9',
          },
          grid: {
            show: false,
          },
          title: {
            text: 'Market Volume',
            style: {
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#0018f9',
            },
          },
          stroke: {
            width: 2,
            curve: 'smooth',
          },
          xaxis: {
            type: 'datetime',
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            show: false,
          },
          colors: ['#0018f9'],
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: 'dark',
          },
          selection: 365,
        },
        series: [
          {
            name: 'Market Volume',
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
    };
  }

  fetchData = async () => {
    const response = await fetch(
      'https://stocksbackenedapi.onrender.com/getChartData'
    );
    const json = await response.json();
    const quotes = json.quotes;
    // console.log(quotes);
    let marketOpenData = quotes.map((obj) => [
      new Date(obj.date).getTime(),
      obj.open,
    ]);
    let marketVolumeData = quotes.map((obj) => [
      new Date(obj.date).getTime(),
      obj.volume,
    ]);
    this.setState({
      Tot_Vol: {
        options: this.state.Tot_Vol.options,
        series: [{ name: 'Market Volume', data: marketVolumeData }],
      },
      Price: {
        options: this.state.Price.options,
        series: [{ name: 'Market Price', data: marketOpenData }],
      },
    });
  };
  updateData(timeline) {
    switch (timeline) {
      case 'one_month':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('24 MAR 2023').getTime(),
          new Date('24 Apr 2023').getTime()
        );
        ApexCharts.exec(
          'area-datetime2',
          'zoomX',
          new Date('24 MAR 2023').getTime(),
          new Date('24 Apr 2023').getTime()
        );
        break;
      case 'six_months':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('24 OCT 2022').getTime(),
          new Date('24 APR 2023').getTime()
        );
        ApexCharts.exec(
          'area-datetime2',
          'zoomX',
          new Date('24 OCT 2022').getTime(),
          new Date('24 APR 2023').getTime()
        );
        break;
      case 'one_year':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('24 APR 2022').getTime(),
          new Date('24 APR 2023').getTime()
        );
        ApexCharts.exec(
          'area-datetime2',
          'zoomX',
          new Date('24 APR 2022').getTime(),
          new Date('24 APR 2023').getTime()
        );
        break;
      case 'ytd':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('01 Jan 2022').getTime(),
          new Date('27 APR 2023').getTime()
        );
        ApexCharts.exec(
          'area-datetime2',
          'zoomX',
          new Date('01 Jan 2022').getTime(),
          new Date('27 APR 2023').getTime()
        );
        break;
      case 'all':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('24 APR 2021').getTime(),
          new Date('24 APR 2023').getTime()
        );
        ApexCharts.exec(
          'area-datetime2',
          'zoomX',
          new Date('24 APR 2021').getTime(),
          new Date('24 APR 2023').getTime()
        );
        break;
      default:
    }
  }

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => this.fetchData(), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="toolbar">
              <button
                id="one_month"
                onClick={() => this.updateData('one_month')}
                className={this.state.selection === 'one_month' ? 'active' : ''}
              >
                1M
              </button>
              &nbsp;
              <button
                id="six_months"
                onClick={() => this.updateData('six_months')}
                className={
                  this.state.selection === 'six_months' ? 'active' : ''
                }
              >
                6M
              </button>
              &nbsp;
              <button
                id="one_year"
                onClick={() => this.updateData('one_year')}
                className={this.state.selection === 'one_year' ? 'active' : ''}
              >
                1Y
              </button>
              &nbsp;
              <button
                id="ytd"
                onClick={() => this.updateData('ytd')}
                className={this.state.selection === 'ytd' ? 'active' : ''}
              >
                YTD
              </button>
              &nbsp;
              <button
                id="all"
                onClick={() => this.updateData('all')}
                className={this.state.selection === 'all' ? 'active' : ''}
              >
                ALL
              </button>
            </div>
            <div className="col" style={{ maxWidth: '610px' }}>
              <div id="chart">
                <Chart
                  options={this.state.Price.options}
                  series={this.state.Price.series}
                  type="area"
                  height="400"
                  width="600"
                />
              </div>
            </div>

            <div className="col" style={{ maxWidth: '610px' }}>
              <div id="chart">
                <Chart
                  options={this.state.Tot_Vol.options}
                  series={this.state.Tot_Vol.series}
                  type="line"
                  height="400"
                  width="600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartSection;
