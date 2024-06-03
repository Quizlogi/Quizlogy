import { useState } from "react";
import DataTable from "react-data-table-component";
import propTypes from "prop-types";
import { Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";

export default function Table({ columns, data }) {
  const [filterText, setFilterText] = useState("");

  const filteredData = data.filter((item) =>
    Object.keys(item).some(
      (key) =>
        item[key] &&
        item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  const customStyles = {
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        // black
        backgroundColor: "grey",
        color: "#fff",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
      },
    },
    rows: {
      style: {
        "&:nth-of-type(odd)": {
          backgroundColor: "#f9fafb",
        },
      },
    },
  };

  return (
    <>
      <Input
        className="col-span-4 float-left mb-4"
        icon={<FaSearch />}
        label="Search"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <DataTable
        columns={columns}
        data={filteredData}
        customStyles={customStyles}
        pagination
      />
    </>
  );
}

Table.propTypes = {
  columns: propTypes.array.isRequired,
  data: propTypes.array.isRequired,
};
