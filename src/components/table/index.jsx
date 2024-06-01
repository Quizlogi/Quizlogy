import DataTable from "react-data-table-component";
import propTypes from "prop-types";

export default function Table({ columns, data }) {
  const customStyles = {
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };

  return (
    <DataTable columns={columns} data={data} customStyles={customStyles} />
  );
}

Table.propTypes = {
  columns: propTypes.array.isRequired,
  data: propTypes.array.isRequired,
};
