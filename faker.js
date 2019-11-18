const faker = require('faker');
const program = require('commander');

// console.log(faker.image.nature(1024, 768));
// console.log(faker.image.nightlife(1024, 768));
// console.log(faker.image.people(1024, 768));
// console.log(faker.image.sports(1024, 768));
// console.log(faker.image.animals(1024, 768));

program
  .option('-s, --sections <cnt>', 'Sections count (chapters)')
  .option('-p, --paragraphs <cnt>', 'Paragraphs per section count. Each paragraph contains ~10 sentences')
  .option('-i, --images', 'With images')
  .parse(process.argv);

const sectionsCnt = program.sections;
const paragraphsCnt = program.paragraphs;
const images = program.images ? 1 : 0;

printHeadAndToc();
printSections();

function printSections() {
  for (let i = 0; i < sectionsCnt; i++) {
    console.log(`
      <div class="chapter">
        <h1 id="section${i}">Section ${i}</h1>
    `);

    for (j = 0; j < paragraphsCnt; j++) {
      if (images) console.log(`<img src="https://loremflickr.com/640/480?random=${i}${j}" />`);
      console.log(`<p>${faker.lorem.paragraph(10)}</p>`);
    }
    console.log(`
      </div>
    `);
  }

  console.log(`</body></html>`);
}

function printHeadAndToc() {
  console.log(`
  <head>
      <title>
          Admin Guide
      </title>
      <link rel="stylesheet" type="text/css" href="main.css">
  </head>

  <body>
    <div class="title-page">
      <p class="title-page-title">Admin guide</p>
      <p class="title-page-author title-page-version">Version 1.0 November 2019</p>
    </div>
    <div class="contents-page">
      <h1 id="contents">Contents</h1>
      <ol class="toc-list">
  `);

  for (let i = 0; i < sectionsCnt; i++) {
    console.log(`
      <li>
        <a href="#section${i}">
          <span class="toc-entry-text">Section ${i}</span>
        </a>
      </li>
    `);
  }

  console.log(`
      </ol>
    </div>
  `);
}
