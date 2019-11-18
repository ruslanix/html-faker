# Generate simple html with test data

## Setup
```
npm install
```

## Generate html with 10 sections 50 paragraphs each

```
node faker.js -s 10 -p 50 > out.html
```

## Generate pdf

```
node ./node_modules/pagedjs-cli/bin/paged out.html
```