// component for dropdown menus. Will simplify creation of dropdowns in the future.

import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ value, options, placeholder = "Select" }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    if (node.current.Contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={node} className="dropdown">
      <button className="dropdown-toggler" onClick={e => setOpen(!open)}>
        {value || placeholder}
      </button>
      {open && (
        <ul className="dropdown-menu">
          {options.map(opt => (
              <p>{opt}</p>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;