import "./Table.css"

interface Props {
  name: string;
  rating: string;
  review: string;
  date: string;
}

const TableHead = (props: Props) => {
  return (
    <tr>
      <td><strong>{props.name}</strong></td>
      <td><strong>{props.rating}</strong></td>
      <td><strong>{props.review}</strong></td>
      <td><strong>{props.date}</strong></td>
    </tr>
  );
};

export default TableHead;
