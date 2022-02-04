import { describe, expect, it } from '@jest/globals';
import { baseHTML, calcHTML, cardHTML, indexHTML, links, noDataHTML } from '../htmlMaker';

describe('parser', () => {
  it('Makes basic html layout', () => {
    expect(baseHTML('Title', 'Set', '<p>Content<p>')).toBe(`<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Title</title>
        <link rel="stylesheet" href="styles.css" type="text/css">
    </head>
    <body>
      <h1>Set</h1>
      <div class="grid">
        <p>Content<p>
      </div>
    </body>
</html>
`);
  });

  it('Adds links back to index and next data set', () => {
    expect(links('1')).toBe(`<div class="links">
    <a href="./index.html">
      <div class="link">
        <h4>Return to main page</h4>
      </div>
    </a>
    <a href="./Dataset2.html">
      <div class="link">
        <h4>Checkout Dataset 2</h4>
      </div>
    </a>
  </div>`);
  });

  it('No data page', () => {
    expect(noDataHTML(1)).toBe(`<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Data set 1</title>
        <link rel="stylesheet" href="styles.css" type="text/css">
    </head>
    <body>
      <h1>Data set 1</h1>
      <div class="grid">
        <div class="links">
    <a href="./index.html">
      <div class="link">
        <h4>Return to main page</h4>
      </div>
    </a>
    <a href="./Dataset2.html">
      <div class="link">
        <h4>Checkout Dataset 2</h4>
      </div>
    </a>
  </div>
        <div class="noData">
          <figure>
            <figcaption>Sorry no data followed this data set</figcaption>
            <img src="./noData.png" alt="No data meme">
          </figure>
        </div>
      </div>
    </body>
</html>
`);
  });

  it('Cards with data or without data', () => {
    const data = {
      max: 1,
      range: 1,
      min: 1,
      median: 1,
      sum: 1,
      mean: 1,
      std: 1,
      variance: 1
    };

    expect(cardHTML(data)).toBe(`<div class="calcs">
      <h6>Max</h6>
      <h6>Range</h6>
      <h6>Min</h6>
    </div>
    <div class="calcs">
      <h6>1</h6>
      <h6>1</h6>
      <h6>1</h6>
    </div>
    <div class="calcs">
      <h6>Median</h6>
      <h6>Sum</h6>
      <h6>Mean</h6>
    </div>
    <div class="calcs">
      <h6>1</h6>
      <h6>1</h6>
      <h6>1</h6>
    </div>
    <div class="calcs-Big">
      <h6>Std:</h6>
      <h6>1</h6>
    </div>
    <div class="calcs-Big">
      <h6>Variance:</h6>
      <h6>1</h6>
    </div>
  `);

    expect(cardHTML(false)).toBe(`<h2 class="nd">No Data!</h2>
    <h6 class="nd">Sorry no numeric data followed this data set</h6>
    <div class="img">
      <img src="sry.png" alt="Sorry not Sorry">
    </div>
    `);

  });

  it('makes index.html page', () => {
    const calcs = {
      max: 1,
      range: 1,
      min: 1,
      median: 1,
      sum: 1,
      mean: 1,
      std: 1,
      variance: 1
    };
    const pair = [];
    pair[0] = [calcs, [5]];
    expect(indexHTML(pair, [9])).toBe(baseHTML('Gagnavinnsla', 'Gagnavinnsla', `<div class="row">
      <div class="col col-34 col-md-5 col-sm-10 offset-col-sm-1">
        <a href="Dataset1.html">
          <div class="card">
            <div class="card-title">
              <h2>Dataset 1</h2>
            </div>
            <div class="card-body">
              ${cardHTML(pair[0][0])}
            </div>
          </div>
        </a>
      </div>
    </div>`
    ));
  });

  it('Makes html table with calcs', () => {
    const data = {
      max: 1,
      range: 1,
      min: 1,
      median: 1,
      sum: 1,
      mean: 1,
      std: 1,
      variance: 1
    };

    expect(calcHTML(data)).toBe(`<table>
        <thead>
          <tr>
            <th>variance</th>
            <th>max</th>
            <th>mean</th>
            <th>median</th>
            <th>min</th>
            <th>std</th>
            <th>sum</th>
            <th>range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
  `);
  });

});
