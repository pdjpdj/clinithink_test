# Clinithink React JS Technical Exercise

Code test for Clinithink (see Word document for the requirements).

## Setup
1) After cloning repo, run `npm install`.
2) Run `npm start` to start the development server and see the app running on `http://localhost:3000`.

## Code Description
### Requirement 1
-  Use the `sort` function on the item Array to sort by title.

### Requirement 2
-  Use a Set to get an Array of unique categories.
-  Use the `useState` hook to store the selected category.
-  Use the `filter` function on the item Array to filter the items to display.
-  Sort as in Requirement 1.

### Requirement 3
-  Use the Set to get the unique categories.
-  Use the `sort` function to sort the favourite categories at the top of the list.
-  Display a ★ if the category is in the favourite Array.
-  Filter and sort the item as in the previous Requirements.

## Testing
-  Tests written using React-Testing-Library.
-  Test files sit in the same folder as the  file under test.
-  To run the tests use `npm test`.
-  To create coverage file use `npm run test:coverage`.