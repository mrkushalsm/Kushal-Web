import style from "./Table.module.css"

interface Props {
    name: string;
    rating: string;
    review: string;
    date: string;
}

const TableBody = (props: Props) => {
    return (
        <tr>
            <td className={style.td}>{props.name}</td>
            <td className={style.td}>{props.rating}</td>
            <td className={style.td}>{props.review}</td>
            <td className={style.td}>{props.date}</td>
        </tr>
    );
};

export default TableBody;
