# Custom Select Component for React

Simple Custom Select component created using React JS and Raw CSS

Example: [here](https://react-custom-select-x.vercel.app/)

### Usages:

```jsx
const simpleOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
  { label: "Elderberry", value: "elderberry" },
  { label: "Fig", value: "fig" },
  { label: "Grape", value: "grape" },
  { label: "Honeydew", value: "honeydew" },
];

const consoleElementSelected = (item) => {
  console.log("Selected Item(s):", item);
};
const consoleElementSearch = (value) => {
  console.log("Searched Value:", value);
};
const consoleMenuOpen = () => {
  console.log("Menu Opened");
};

<Select
  Options={simpleOptions}
  Value={simpleOptions[0]}
  isClearable={true}
  isSearchable={true}
  isDisabled={false}
  isMulti={false}
  onSearch={consoleElementSearch}
  onMenuOpen={consoleMenuOpen}
  onChange={consoleElementSelected}
/>;
```

## Key Features:

- **Single and Multiple Selection:** The component supports both single and multiple value selection.
- **Searchable Options:** Users can search for specific options within the dropdown.
- **Clearable Options:** Selected options can be easily cleared.
- **Grouped Items:** Options are displayed in organized groups.
- **Accessibility:** The component is designed to be accessible for all users.
- **Responsive Design:** The component is fully responsive, ensuring optimal usability across various devices.
