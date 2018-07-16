# Kissmetrics Frontend Interview
This is a React `Table` component with sortable columns. I created a `Headers` component and a `Row` component to render the headers and rows of the table.

## How It Works
You can sort a column by clicking on the header of a column. The first time you click on a header it sorts the column in ascending order, and each click thereafter alternates the sorting between ascending and descending order. When a column is sorted, an arrow icon displays next to the header to show the sorting order.

![Table Component](https://i.imgur.com/TWnpLVQ.png)

## Usage

Clone the repo to your local machine. 


```
git clone https://github.com/fjzink/kissmetrics-frontend-interview.git
```


Install the dependencies with your package manager of choice.


```
yarn install
```


There are scripts to run the development server and to create an optimized production build. 

### Starting the Development Server
To start the development server run the `start` script:

```
yarn start
```

Running the `start` script will automatically open a new tab in your browser.

### Creating a Production Build
To create a production build of the react app run the `build` script:

```
yarn build
```

This will create a `dist/` folder in the root directory of the project if it does not already exist and output your bundled project files into this folder.

You can open the production build with:

```
open dist/index.html
```