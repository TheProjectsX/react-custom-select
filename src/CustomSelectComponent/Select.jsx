import React, { useEffect, useState } from "react";
import "./styles.css";

const Select = ({
  Options,
  Value = {},
  Placeholder = "Select...",
  isClearable = true,
  isSearchable = true,
  isDisabled = false,
  isGrouped = false,
  isMulti = false,
  onChange = (item) => {},
  onMenuOpen = () => {},
  onSearch = (value) => {},
}) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [currentItem, setCurrentItem] = useState(
    isMulti ? (Array.isArray(Value) ? Value : []) : Object(Value)
  );
  const [currentViewingLabel, setCurrentViewingLabel] = useState(
    isMulti ? "" : Value.label ?? ""
  );
  const [selectionOptions, setSelectionOptions] = useState([]);
  const [optionsIsGrouped, setOptionsIsGrouped] = useState(isGrouped);

  useEffect(() => {
    if (isGrouped) {
      setOptionsIsGrouped(isGrouped);
      if (Options.every((item) => !item.hasOwnProperty("options"))) {
        setSelectionOptions([
          {
            label: "Grouped Items",
            options: Options,
          },
        ]);
      } else if (Options.every((item) => item.hasOwnProperty("options"))) {
        setSelectionOptions(Options);
      } else {
        setSelectionOptions({});
      }
    } else {
      if (Options.every((item) => item.hasOwnProperty("options"))) {
        setSelectionOptions(Options);
        setOptionsIsGrouped(true);
      } else {
        setOptionsIsGrouped(isGrouped);
        setSelectionOptions(Options);
      }
    }
  }, [isGrouped]);

  //   Handler Function
  const handleElementChanged = (item) => {
    if (isMulti) {
      setCurrentItem([...currentItem, item]);
      onChange([...currentItem, item]);
    } else {
      setCurrentItem(item);
      setCurrentViewingLabel(item.label);
      onChange(item);
    }
  };

  const handleSearch = (value) => {
    setCurrentViewingLabel(value);
    onSearch(value);
    if (value === "") {
      setSelectionOptions(Options);
      return;
    }

    if (optionsIsGrouped) {
      setSelectionOptions(
        Options.map((group) => {
          const filteredOptions = group.options.filter((option) =>
            option.label.toLowerCase().includes(value.toLowerCase())
          );
          return {
            ...group,
            options: filteredOptions,
          };
        })
      );
    } else {
      setSelectionOptions(
        Options.filter((item) =>
          item.label.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleClearSearch = () => {
    setCurrentViewingLabel("");
    setCurrentItem(isMulti ? [] : {});
    setSelectionOptions(Options);
  };

  const handleRemoveMultiSelectedItem = (item) => {
    setCurrentItem(currentItem.filter((elm) => elm.value !== item.value));
  };

  return (
    <div className="kzui-select">
      <div
        className={`kzui-select__wrapper${
          isDisabled ? " kzui-select__wrapper--disabled" : ""
        }`}
        tabIndex={0}
        onClick={(e) => {
          if (!menuOpened) {
            onMenuOpen();
          }
          setMenuOpened(!menuOpened);
        }}
        onBlur={(e) => setMenuOpened(false)}
      >
        {/* The Control */}
        <div className="kzui-select__control">
          <label
            className={`kzui-select__control-label${
              menuOpened ? " kzui-select__control-label--opened" : ""
            }`}
          >
            <input
              type="text"
              disabled={!isSearchable}
              placeholder={Placeholder}
              className={`kzui-select__control-input${
                !isSearchable ? " kzui-select__control-input--disabled" : ""
              }`}
              value={currentViewingLabel}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {isClearable &&
              (currentViewingLabel !== "" ||
                (isMulti && currentItem.length > 0)) && (
                <div
                  className="kzui-select__clear-icon-wrapper"
                  onClick={handleClearSearch}
                >
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    className="kzui-select__clear-icon"
                  >
                    <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                  </svg>
                </div>
              )}
            <div className="kzui-select__dropdown-icon-wrapper">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="kzui-select__dropdown-icon"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </div>
          </label>
        </div>

        {/* The Selection Items */}
        <div
          className={`kzui-select__menu${
            menuOpened
              ? " kzui-select__menu--visible"
              : " kzui-select__menu--hidden"
          }`}
        >
          {!optionsIsGrouped &&
            selectionOptions.map((item, idx) => (
              <p
                key={idx}
                className={`kzui-select__menu-item${
                  isMulti
                    ? currentItem.some((elm) => elm.value === item.value)
                      ? " kzui-select__menu-item--multi-selected"
                      : ""
                    : currentItem.value === item.value
                    ? " kzui-select__menu-item--selected"
                    : ""
                }`}
                onMouseDown={(e) => {
                  handleElementChanged(item);
                }}
              >
                {item.label}
              </p>
            ))}
          {optionsIsGrouped &&
            selectionOptions.reduce(
              (count, obj) => count + obj.options.length,
              0
            ) > 0 &&
            selectionOptions?.map((group, idx) => (
              <React.Fragment key={idx}>
                <div className="kzui-select__menu-group-label">
                  {group.label}
                </div>
                {group?.options?.map((item, idx) => (
                  <p
                    key={idx}
                    className={`kzui-select__menu-item${
                      isMulti
                        ? currentItem.some((elm) => elm.value === item.value)
                          ? " kzui-select__menu-item--multi-selected"
                          : ""
                        : currentItem.value === item.value
                        ? " kzui-select__menu-item--selected"
                        : ""
                    }`}
                    onMouseDown={(e) => {
                      handleElementChanged(item);
                    }}
                  >
                    {item.label}
                  </p>
                ))}
              </React.Fragment>
            ))}

          {selectionOptions.length === 0 ||
            (selectionOptions.reduce(
              (count, obj) => count + obj.options?.length,
              0
            ) === 0 && (
              <div className="kzui-select__no-item">No options to Select</div>
            ))}
        </div>
      </div>

      {isMulti && (
        <div className="kzui-select__multi-selected-item-wrapper">
          {currentItem.map((item, idx) => (
            <span key={idx} className="kzui-select__multi-selected-item">
              {item.label}
              <button
                className="kzui-select__multi-selected-item-remove"
                onClick={() => handleRemoveMultiSelectedItem(item)}
              >
                X
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
