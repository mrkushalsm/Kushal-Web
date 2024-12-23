import styles from "./Table.module.css"

interface Props {
    name: string;
    rating: string;
    review: string;
    date: string;
}

const TableHead = (props: Props) => {
    return (
        <tr>
            <td className={styles.td}><strong>{props.name}</strong></td>
            <td className={styles.td}><strong>{props.rating}</strong></td>
            <td className={styles.td}><strong>{props.review}</strong></td>
            <td className={styles.td}><strong>{props.date}</strong></td>
        </tr>
    );
};

export default TableHead;
