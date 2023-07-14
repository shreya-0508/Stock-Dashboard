import './Home.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import FrontPageStocks from './FrontPageStocks';
import Example from './/Example';

// import getJson from 'axios-get-json-response';

const Home = () => {
  const [data, setData] = useState(null);
  // const [tempdata, settempData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    Axios.post('https://stocksbackenedapi.onrender.com/getTicker', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formData }),
    })
      // .then((response) => {
      //   // response.json();
      //   // console.log(response);
      // })
      // .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setFormSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  async function generateStockHTML() {
    const response = await fetch(
      'https://stocksbackenedapi.onrender.com/getData'
    );
    const json = await response.json();
    // console.log(json);
    return json;
  }

  // on mount
  useEffect(() => {
    // get info initially
    (async () => {
      setData(await generateStockHTML());
    })();

    const interval = setInterval(() => {
      (async () => {
        setData(await generateStockHTML());
      })();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Quote">
      <div>
        <br />
        <h3>Enter the Ticker Symbol of any Company</h3>
      </div>
      <br />
      <form method="post" onSubmit={handleSubmit}>
        <label className="ticker-name">Ticker Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Example : AAPL, TSLA, ^NSEI, BPCL.NS"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" className="button-36">
          Submit
        </button>
      </form>
      <br />
      {!formSubmitted && <FrontPageStocks />}

      <div className="data">
        <div className="longName">
          {formSubmitted && (
            <h2>
              <strong> {data.price.longName}</strong>
            </h2>
          )}
        </div>
        {formSubmitted && (
          <Table>
            <tbody>
              <tr>
                <td>
                  <div className="current">
                    {formSubmitted && (
                      <Card
                        border="light"
                        style={{
                          width: '15rem',
                          borderWidth: '5px',
                          borderColor: '#000',
                          boxShadow:
                            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                        }}
                      >
                        <Card.Body>
                          <Card.Title>Current Market Price</Card.Title>
                          <Card.Subtitle
                            style={{
                              color:
                                data.price.regularMarketChange > 0
                                  ? 'green'
                                  : 'red',
                            }}
                          >
                            <h3>{data.price.regularMarketPrice}</h3>
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </td>
                <td>
                  <div className="current">
                    {formSubmitted && (
                      <Card
                        border="light"
                        style={{
                          width: '12rem',
                          borderWidth: '5px',
                          borderColor: '#000',
                          boxShadow:
                            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                        }}
                      >
                        <Card.Body>
                          <Card.Title>Market Change</Card.Title>
                          <Card.Subtitle
                            style={{
                              color:
                                data.price.regularMarketChange > 0
                                  ? 'green'
                                  : 'red',
                            }}
                          >
                            {data.price.regularMarketChange}
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </td>
                <td>
                  <div className="current">
                    {formSubmitted && (
                      <Card
                        border="light"
                        style={{
                          width: '18rem',
                          borderWidth: '5px',
                          borderColor: '#000',
                          boxShadow:
                            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                        }}
                      >
                        <Card.Body>
                          <Card.Title>Market Change Percentage</Card.Title>
                          <Card.Subtitle
                            style={{
                              color:
                                data.price.regularMarketChange > 0
                                  ? 'green'
                                  : 'red',
                            }}
                          >
                            {data.price.regularMarketChangePercent}%
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="current">
                    {formSubmitted && (
                      <Card
                        border="light"
                        style={{
                          width: '15rem',
                          borderWidth: '5px',
                          borderColor: '#000',
                          alignItems: 'center',
                          boxShadow:
                            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                        }}
                      >
                        <Card.Body>
                          <Card.Title>Currency :</Card.Title>
                          <Card.Subtitle>{data.price.currency}</Card.Subtitle>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </td>
                <td>
                  <div className="current">
                    {formSubmitted && (
                      <Card
                        border="light"
                        style={{
                          width: '12rem',
                          borderWidth: '5px',
                          borderColor: '#000',
                          alignItems: 'center',
                          boxShadow:
                            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                        }}
                      >
                        <Card.Body>
                          <Card.Title>Open :</Card.Title>
                          <Card.Subtitle>
                            {data.price.regularMarketOpen}
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </td>
                <td>
                  <div className="current">
                    {formSubmitted && (
                      <Card
                        border="light"
                        style={{
                          width: '18rem',
                          borderWidth: '5px',
                          borderColor: '#000',
                          alignItems: 'center',
                          boxShadow:
                            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                        }}
                      >
                        <Card.Body>
                          <Card.Title>Volume :</Card.Title>
                          <Card.Subtitle>
                            {data.price.regularMarketVolume}
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="current">
                    {formSubmitted && (
                      <Card
                        border="light"
                        style={{
                          width: '15rem',
                          borderWidth: '5px',
                          borderColor: '#000',
                          alignItems: 'center',
                          boxShadow:
                            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                        }}
                      >
                        <Card.Body>
                          <Card.Title>Market State:</Card.Title>
                          <Card.Subtitle>
                            {data.price.marketState}
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </td>
                <td>
                  <div className="current">
                    {formSubmitted && (
                      <Card
                        border="light"
                        style={{
                          width: '12rem',
                          borderWidth: '5px',
                          borderColor: '#000',
                          alignItems: 'center',
                          boxShadow:
                            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                        }}
                      >
                        <Card.Body>
                          <Card.Title>High :</Card.Title>
                          <Card.Subtitle>
                            {data.price.regularMarketDayHigh}
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </td>
                <td>
                  <div className="current">
                    {formSubmitted && (
                      <Card
                        border="light"
                        style={{
                          width: '18rem',
                          borderWidth: '5px',
                          borderColor: '#000',
                          alignItems: 'center',
                          boxShadow:
                            'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                        }}
                      >
                        <Card.Body>
                          <Card.Title>Low :</Card.Title>
                          <Card.Subtitle>
                            {data.price.regularMarketDayLow}
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        )}
        <Example {...formData} />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
