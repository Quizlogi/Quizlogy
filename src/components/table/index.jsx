import DataTable from "react-data-table-component";
import propTypes from "prop-types";

export default function Table({ columns, data }) {
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
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      pagination
    />
  );
}

Table.propTypes = {
  columns: propTypes.array.isRequired,
  data: propTypes.array.isRequired,
};
