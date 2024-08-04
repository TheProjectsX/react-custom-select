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

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

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
          onChange={consoleElement}
          Options={simpleOptions}
          isClearable={isClearable}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          onSearch={consoleElementSearch}
          onMenuOpen={consoleMenuOpen}
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
      </div>
    </main>
  );
}

export default App;
