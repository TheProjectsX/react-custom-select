import Select from "./CustomSelectComponent/Select";
import "./App.css";
import { useState } from "react";

function App() {
  const consoleElement = (item) => {
    console.log("Selected Value:", item.label);
  };
  const consoleElementSearch = (value) => {
    console.log("Searched Value:", value);
  };
  const consoleMenuOpen = () => {
    console.log("Menu Opened");
  };

  const simpleOptions = [
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Orange",
      value: "orange",
    },
    {
      label: "Watermelon",
      value: "watermelon",
    },
  ];

  const groupedOptions = [
    {
      label: "Color",
      options: [
        {
          label: "Red",
          value: "red",
        },
        {
          label: "Orange",
          value: "orange",
        },
        {
          label: "Green",
          value: "green",
        },
      ],
    },
    {
      label: "Fruit",
      options: [
        {
          label: "Mango",
          value: "mango",
        },
        {
          label: "Orange",
          value: "orange",
        },
        {
          label: "Watermelon",
          value: "watermelon",
        },
      ],
    },
  ];

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isGrouped, setIsGrouped] = useState(false);
  const [isMulti, setIsMulti] = useState(false);

  const Checkbox = ({ children, ...props }) => (
    <label style={{ marginRight: "1em" }}>
      <input type="checkbox" {...props} />
      {children}
    </label>
  );

  return (
    <main className="main">
      <div className="wrapper">
        <Select
          Options={groupedOptions}
          // Value={groupedOptions[0].options}
          isClearable={isClearable}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          isGrouped={isGrouped}
          isMulti={isMulti}
          onSearch={consoleElementSearch}
          onMenuOpen={consoleMenuOpen}
          onChange={consoleElement}
        />
      </div>

      <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          marginTop: "1em",
        }}
      >
        <Checkbox
          checked={isClearable}
          onChange={() => setIsClearable((state) => !state)}
        >
          Clearable
        </Checkbox>
        <Checkbox
          checked={isSearchable}
          onChange={() => setIsSearchable((state) => !state)}
        >
          Searchable
        </Checkbox>
        <Checkbox
          checked={isDisabled}
          onChange={() => setIsDisabled((state) => !state)}
        >
          Disabled
        </Checkbox>
        <Checkbox
          checked={isGrouped}
          onChange={() => setIsGrouped((state) => !state)}
        >
          Grouped
        </Checkbox>
        <Checkbox
          checked={isMulti}
          onChange={() => setIsMulti((state) => !state)}
        >
          Multi
        </Checkbox>
      </div>
    </main>
  );
}

export default App;
