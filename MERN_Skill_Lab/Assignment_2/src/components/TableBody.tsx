import "./Table.css"

interface Props {
  name: string;
  rating: string;
  review: string;
  date: string;
}

const TableBody = (props: Props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.rating}</td>
      <td>{props.review}</td>
      <td>{props.date}</td>
    </tr>
  );
};

export default TableBody;
