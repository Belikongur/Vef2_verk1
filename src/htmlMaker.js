/**
 *
 * @param {String} title
 * @param {String} dataset
 * @param {String} Content
 * @returns Basic html layout with param's added
 */
export function baseHTML(title, dataset, Content) {
  return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>${title}</title>
        <link rel="stylesheet" href="styles.css" type="text/css">
    </head>
    <body>
      <h1>${dataset}</h1>
      <div class="grid">
        ${Content}
      </div>
    </body>
</html>
`;
}

/**
 *
 * @param {String} set
 * @returns links for returning to index.html
 *          and to go to next dataset page
 */
export function links(set) {
  const setNum = parseInt(set, 10);
  if (setNum === 12) {
    return `<div class="links">
      <a href="./index.html">
        <div class="link">
          <h4>Return to main page</h4>
        </div>
      </a>
    </div>`;
  }
  return `<div class="links">
    <a href="./index.html">
      <div class="link">
        <h4>Return to main page</h4>
      </div>
    </a>
    <a href="./Dataset${setNum + 1}.html">
      <div class="link">
        <h4>Checkout Dataset ${setNum + 1}</h4>
      </div>
    </a>
  </div>`;
}

/**
 *
 * @param {String} dataset
 * @returns No data page
 */
export function noDataHTML(dataset) {
  const content = `${links(dataset)}
        <div class="noData">
          <figure>
            <figcaption>Sorry no data followed this data set</figcaption>
            <img src="./noData.png" alt="No data meme">
          </figure>
        </div>`;
  return baseHTML(`Data set ${dataset}`, `Data set ${dataset}`, content);
}

/**
 *
 * @param {Number[] | false} data
 * @returns No data layout on Card
 *          Or Card with data
 */
export function cardHTML(data) {
  if (!data) {
    return `<h2 class="nd">No Data!</h2>
    <h6 class="nd">Sorry no numeric data followed this data set</h6>
    <div class="img">
      <img src="sry.png" alt="Sorry not Sorry">
    </div>
    `;
  }
  return `<div class="calcs">
      <h6>Max</h6>
      <h6>Range</h6>
      <h6>Min</h6>
    </div>
    <div class="calcs">
      <h6>${data.max}</h6>
      <h6>${data.range}</h6>
      <h6>${data.min}</h6>
    </div>
    <div class="calcs">
      <h6>Median</h6>
      <h6>Sum</h6>
      <h6>Mean</h6>
    </div>
    <div class="calcs">
      <h6>${data.median}</h6>
      <h6>${data.sum}</h6>
      <h6>${data.mean}</h6>
    </div>
    <div class="calcs-Big">
      <h6>Std:</h6>
      <h6>${data.std}</h6>
    </div>
    <div class="calcs-Big">
      <h6>Variance:</h6>
      <h6>${data.variance}</h6>
    </div>
  `;
}

/**
 *
 * @param {Object{String | Number[]}} dataCalcs
 * @param {Number[]} noData
 * @returns index.html
 */
export function indexHTML(dataCalcs, noData) {
  let index = '<div class="row">';
  let count = 1;
  let ndc = 0;
  for (let i = 1; i <= dataCalcs.length; i += 1) {
    let card = '';
    if (count === noData[ndc]) {
      ndc += 1;
      card = cardHTML(false);
    } else {
      card = cardHTML(dataCalcs[count - 1][0]);
    }
    index += `
      <div class="col col-34 col-md-5 col-sm-10 offset-col-sm-1">
        <a href="Dataset${count}.html">
          <div class="card">
            <div class="card-title">
              <h2>Dataset ${count}</h2>
            </div>
            <div class="card-body">
              ${card}
            </div>
          </div>
        </a>
      </div>
    `;
    count += 1;
  }
  index += '</div>';
  return baseHTML('Gagnavinnsla', 'Gagnavinnsla', index);
}

/**
 *
 * @param {Object{String | Number[]}} data
 * @returns Table with calculated data
 */
export function calcHTML(data) {
  const html = `<table>
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
            <td>${data.variance}</td>
            <td>${data.max}</td>
            <td>${data.mean}</td>
            <td>${data.median}</td>
            <td>${data.min}</td>
            <td>${data.std}</td>
            <td>${data.sum}</td>
            <td>${data.range}</td>
          </tr>
        </tbody>
      </table>
  `;
  return html;

}

/**
 *
 * @param {Object{String | Number[]}} data
 * @param {String} dataset
 * @returns Table with all numbers from dataset
 */
export function dataHTML(data, dataset) {
  let html = calcHTML(data);
  html +=
    `   ${links(dataset)}
        <h1>Dataset ${dataset}</h1>
        <table>
          <tbody>
  `
  let col = 1;
  if (data.data.length >= 8)
    col = data.data.length / 8;
  let counter = 0;
  for (let i = 1; i <= col; i += 1) {
    html += '          <tr>';
    for (let j = 1; j <= 8; j += 1) {
      if (counter < data.data.length) {
        html += `<td>${data.data[counter]}</td>`;
        counter += 1;
      }
    }
    html += '    </tr>';
  }
  html += `
        </tbody>
      </table>`;
  return baseHTML(`Dataset ${dataset}`, 'Calculations', html)
}




