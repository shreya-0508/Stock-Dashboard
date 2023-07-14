import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
const FrontPageStocks = () => {
  const [data, setData] = useState([]);
  async function generateFrontPageHTML() {
    const response = await fetch(
      'https://stocksbackenedapi.onrender.com/getFrontPageData'
    );
    const json = await response.json();
    // console.log(json);
    return json;
  }
  // on mount
  useEffect(() => {
    // get info initially
    (async () => {
      setData(await generateFrontPageHTML());
    })();

    const interval = setInterval(() => {
      (async () => {
        setData(await generateFrontPageHTML());
      })();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Trending Stocks</h1>
      {/* {JSON.stringify(data)} */}
      {JSON.stringify(data) !== '[]' && (
        <Table>
          <tbody>
            <tr>
              <td>
                <div className="current">
                  {data !== [] && (
                    <Card
                      border="success"
                      style={{
                        width: '25rem',
                        borderWidth: '5px',
                        borderColor: '#000',
                        alignItems: 'center',
                        boxShadow:
                          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                      }}
                    >
                      <Card.Body>
                        <Card.Title>
                          {data[0][0]}( {data[0][4]} ){' '}
                        </Card.Title>
                        <Card.Subtitle
                          style={{
                            color: data[0][2] > 0 ? 'green' : 'red',
                          }}
                        >
                          <h3>
                            {data[0][1]}{' '}
                            <span> {data[0][2] > 0 ? '⬆' : '⬇'}</span>{' '}
                          </h3>
                          {data[0][2]} ({data[0][3]})
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  )}
                </div>
              </td>
              <td>
                <div className="current">
                  {1 && (
                    <Card
                      border="success"
                      style={{
                        width: '25rem',
                        borderWidth: '5px',
                        borderColor: '#000',
                        alignItems: 'center',
                        boxShadow:
                          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                      }}
                    >
                      <Card.Body>
                        <Card.Title>
                          {data[1][0]} ( {data[1][4]} )
                        </Card.Title>
                        <Card.Subtitle
                          style={{
                            color: data[1][2] > 0 ? 'green' : 'red',
                          }}
                        >
                          <h3>
                            {data[1][1]}{' '}
                            <span> {data[1][2] > 0 ? '⬆' : '⬇'}</span>{' '}
                          </h3>
                          {data[1][2]} ({data[1][3]})
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  )}
                </div>
              </td>
              <td>
                <div className="current">
                  {1 && (
                    <Card
                      border="success"
                      style={{
                        width: '25rem',
                        borderWidth: '5px',
                        borderColor: '#000',
                        alignItems: 'center',
                        boxShadow:
                          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                      }}
                    >
                      <Card.Body>
                        <Card.Title>
                          {data[2][0]} ( {data[2][4]} )
                        </Card.Title>
                        <Card.Subtitle
                          style={{
                            color: data[2][2] > 0 ? 'green' : 'red',
                          }}
                        >
                          <h3>
                            {data[2][1]}{' '}
                            <span> {data[2][2] > 0 ? '⬆' : '⬇'}</span>{' '}
                          </h3>
                          {data[2][2]} ({data[2][3]})
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
                  {1 && (
                    <Card
                      border="success"
                      style={{
                        width: '25rem',
                        borderWidth: '5px',
                        borderColor: '#000',
                        alignItems: 'center',
                        boxShadow:
                          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                      }}
                    >
                      <Card.Body>
                        <Card.Title>
                          {data[3][0]}( {data[3][4]} )
                        </Card.Title>
                        <Card.Subtitle
                          style={{
                            color: data[3][2] > 0 ? 'green' : 'red',
                          }}
                        >
                          <h3>
                            {data[3][1]}{' '}
                            <span> {data[3][2] > 0 ? '⬆' : '⬇'}</span>{' '}
                          </h3>
                          {data[3][2]} ({data[3][3]})
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  )}
                </div>
              </td>
              <td>
                <div className="current">
                  {1 && (
                    <Card
                      border="success"
                      style={{
                        width: '25rem',
                        borderWidth: '5px',
                        borderColor: '#000',
                        alignItems: 'center',
                        boxShadow:
                          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                      }}
                    >
                      <Card.Body>
                        <Card.Title>
                          {data[4][0]}( {data[4][4]} )
                        </Card.Title>
                        <Card.Subtitle
                          style={{
                            color: data[4][2] > 0 ? 'green' : 'red',
                          }}
                        >
                          <h3>
                            {data[4][1]}{' '}
                            <span> {data[4][2] > 0 ? '⬆' : '⬇'}</span>{' '}
                          </h3>
                          {data[4][2]} ({data[4][3]})
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  )}
                </div>
              </td>
              <td>
                <div className="current">
                  {1 && (
                    <Card
                      border="success"
                      style={{
                        width: '25rem',
                        borderWidth: '5px',
                        borderColor: '#000',
                        alignItems: 'center',
                        boxShadow:
                          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                      }}
                    >
                      <Card.Body>
                        <Card.Title>
                          {data[5][0]}( {data[5][4]} )
                        </Card.Title>
                        <Card.Subtitle
                          style={{
                            color: data[5][2] > 0 ? 'green' : 'red',
                          }}
                        >
                          <h3>
                            {data[5][1]}{' '}
                            <span> {data[5][2] > 0 ? '⬆' : '⬇'}</span>{' '}
                          </h3>
                          {data[5][2]} ({data[5][3]})
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
    </div>
  );
};

export default FrontPageStocks;
