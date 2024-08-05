import Select from "./CustomSelectComponent/Select";
import "./App.css";
import { useState } from "react";

function App() {
  const consoleElement = (item) => {
    console.log("Selected Item(s):", item);
  };
  const consoleElementSearch = (value) => {
    console.log("Searched Value:", value);
  };
  const consoleMenuOpen = () => {
    console.log("Menu Opened");
  };

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

  const groupedOptions = [
    {
      label: "Fruits",
      options: [
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
        { label: "Date", value: "date" },
      ],
    },
    {
      label: "Vegetables",
      options: [
        { label: "Carrot", value: "carrot" },
        { label: "Broccoli", value: "broccoli" },
        { label: "Spinach", value: "spinach" },
        { label: "Pepper", value: "pepper" },
      ],
    },
    {
      label: "Dairy",
      options: [
        { label: "Milk", value: "milk" },
        { label: "Cheese", value: "cheese" },
        { label: "Yogurt", value: "yogurt" },
        { label: "Butter", value: "butter" },
      ],
    },
  ];

  // Single Select
  const [isClearable_01, setIsClearable_01] = useState(true);
  const [isSearchable_01, setIsSearchable_01] = useState(true);
  const [isDisabled_01, setIsDisabled_01] = useState(false);
  const [isGrouped_01, setIsGrouped_01] = useState(false);
  const [isMulti_01, setIsMulti_01] = useState(false);

  // Multi Select
  const [isClearable_02, setIsClearable_02] = useState(true);
  const [isSearchable_02, setIsSearchable_02] = useState(true);
  const [isDisabled_02, setIsDisabled_02] = useState(false);
  const [isGrouped_02, setIsGrouped_02] = useState(false);
  const [isMulti_02, setIsMulti_02] = useState(true);

  // Grouped Items
  const [isClearable_03, setIsClearable_03] = useState(true);
  const [isSearchable_03, setIsSearchable_03] = useState(true);
  const [isDisabled_03, setIsDisabled_03] = useState(false);
  const [isGrouped_03, setIsGrouped_03] = useState(false);
  const [isMulti_03, setIsMulti_03] = useState(false);

  // Grouped Items Multi Select
  const [isClearable_04, setIsClearable_04] = useState(true);
  const [isSearchable_04, setIsSearchable_04] = useState(true);
  const [isDisabled_04, setIsDisabled_04] = useState(false);
  const [isGrouped_04, setIsGrouped_04] = useState(false);
  const [isMulti_04, setIsMulti_04] = useState(true);

  const Checkbox = ({ children, ...props }) => (
    <label
      style={{
        marginRight: "1em",
        display: "inline-flex",
        gap: "3px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input type="checkbox" {...props} style={{ marginRight: "2.5px" }} />
      {children}
    </label>
  );

  return (
    <main className="main">
      <h1 style={{ marginBottom: "40px" }}>React Custom Select Component</h1>
      <div className="wrapper">
        <div className="custom-select">
          <h3 className="custom-select-title">Single Select</h3>
          <Select
            Options={simpleOptions}
            // Value={simpleOptions[0]}
            isClearable={isClearable_01}
            isSearchable={isSearchable_01}
            isDisabled={isDisabled_01}
            isGrouped={isGrouped_01}
            isMulti={isMulti_01}
            onSearch={consoleElementSearch}
            onMenuOpen={consoleMenuOpen}
            onChange={consoleElement}
          />
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
              checked={isClearable_01}
              onChange={() => setIsClearable_01((state) => !state)}
            >
              Clearable
            </Checkbox>
            <Checkbox
              checked={isSearchable_01}
              onChange={() => setIsSearchable_01((state) => !state)}
            >
              Searchable
            </Checkbox>
            <Checkbox
              checked={isDisabled_01}
              onChange={() => setIsDisabled_01((state) => !state)}
            >
              Disabled
            </Checkbox>
            {/* <Checkbox
              checked={isGrouped_01}
              onChange={() => setIsGrouped_01((state) => !state)}
            >
              Grouped
            </Checkbox>
            <Checkbox
              checked={isMulti_01}
              onChange={() => setIsMulti_01((state) => !state)}
            >
              Multi
            </Checkbox> */}
          </div>
        </div>
        <div className="custom-select">
          <h3 className="custom-select-title">Multi Select</h3>
          <Select
            Options={simpleOptions}
            Value={simpleOptions[0]}
            isClearable={isClearable_02}
            isSearchable={isSearchable_02}
            isDisabled={isDisabled_02}
            isGrouped={isGrouped_02}
            isMulti={isMulti_02}
            onSearch={consoleElementSearch}
            onMenuOpen={consoleMenuOpen}
            onChange={consoleElement}
          />
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
              checked={isClearable_02}
              onChange={() => setIsClearable_02((state) => !state)}
            >
              Clearable
            </Checkbox>
            <Checkbox
              checked={isSearchable_02}
              onChange={() => setIsSearchable_02((state) => !state)}
            >
              Searchable
            </Checkbox>
            <Checkbox
              checked={isDisabled_02}
              onChange={() => setIsDisabled_02((state) => !state)}
            >
              Disabled
            </Checkbox>
            {/* <Checkbox
              checked={isGrouped_02}
              onChange={() => setIsGrouped_02((state) => !state)}
            >
              Grouped
            </Checkbox>
            <Checkbox
              checked={isMulti_02}
              onChange={() => setIsMulti_02((state) => !state)}
            >
              Multi
            </Checkbox> */}
          </div>
        </div>
        <div className="custom-select">
          <h3 className="custom-select-title">Group Items</h3>
          <Select
            Options={groupedOptions}
            Value={groupedOptions[0].options[0]}
            isClearable={isClearable_03}
            isSearchable={isSearchable_03}
            isDisabled={isDisabled_03}
            isGrouped={isGrouped_03}
            isMulti={isMulti_03}
            onSearch={consoleElementSearch}
            onMenuOpen={consoleMenuOpen}
            onChange={consoleElement}
          />
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
              checked={isClearable_03}
              onChange={() => setIsClearable_03((state) => !state)}
            >
              Clearable
            </Checkbox>
            <Checkbox
              checked={isSearchable_03}
              onChange={() => setIsSearchable_03((state) => !state)}
            >
              Searchable
            </Checkbox>
            <Checkbox
              checked={isDisabled_03}
              onChange={() => setIsDisabled_03((state) => !state)}
            >
              Disabled
            </Checkbox>
            {/* <Checkbox
              checked={isGrouped_03}
              onChange={() => setIsGrouped_03((state) => !state)}
            >
              Grouped
            </Checkbox>
            <Checkbox
              checked={isMulti_03}
              onChange={() => setIsMulti_03((state) => !state)}
            >
              Multi
            </Checkbox> */}
          </div>
        </div>
        <div className="custom-select">
          <h3 className="custom-select-title">Group Items Multi Select</h3>
          <Select
            Options={groupedOptions}
            Value={[groupedOptions[0].options[0]]}
            isClearable={isClearable_04}
            isSearchable={isSearchable_04}
            isDisabled={isDisabled_04}
            isGrouped={isGrouped_04}
            isMulti={isMulti_04}
            onSearch={consoleElementSearch}
            onMenuOpen={consoleMenuOpen}
            onChange={consoleElement}
          />
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
              checked={isClearable_04}
              onChange={() => setIsClearable_04((state) => !state)}
            >
              Clearable
            </Checkbox>
            <Checkbox
              checked={isSearchable_04}
              onChange={() => setIsSearchable_04((state) => !state)}
            >
              Searchable
            </Checkbox>
            <Checkbox
              checked={isDisabled_04}
              onChange={() => setIsDisabled_04((state) => !state)}
            >
              Disabled
            </Checkbox>
            {/* <Checkbox
              checked={isGrouped_04}
              onChange={() => setIsGrouped_04((state) => !state)}
            >
              Grouped
            </Checkbox>
            <Checkbox
              checked={isMulti_04}
              onChange={() => setIsMulti_04((state) => !state)}
            >
              Multi
            </Checkbox> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
