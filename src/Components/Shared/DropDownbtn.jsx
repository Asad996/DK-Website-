import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const DropDownbtn = ({ btnName, option1, option2, link1, link2 }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className="bg-transparent text-black border-none hover:bg-black"
        id="dropdown-basic"
      >
        {btnName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="hover:bg-black hover:text-white">
          <Link to={link1} >
            {option1}
          </Link>
        </Dropdown.Item>

        <Dropdown.Item className="hover:bg-black  hover:text-white">
          <Link to={link2} >
            {option2}
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownbtn;
