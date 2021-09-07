import Data from "./datasource";
import { Link } from "react-router-dom";
function TableComponent(props) {
  return (
    <div>
      <h1>Table</h1>
      <table>
        <th>
          <td>name</td>
          <td>date</td>
          <td>value</td>
          <td>edit link</td>
        </th>
      </table>
      {Data.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.date}</td>
          <td>{item.value}</td>
          <td>
            <Link to={{ pathname: "/item", value2Show: item }}>edit</Link>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default TableComponent;
