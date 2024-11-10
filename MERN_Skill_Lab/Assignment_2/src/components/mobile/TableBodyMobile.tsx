import styles from "./TableMobile.module.css"

interface Props {
    name: string;
    rating: string;
    review: string;
    date: string;
}

const TableBodyMobile = (props: Props) => {
    return (
        <tr>
            <td className={styles.td}>{props.name}</td>
            <td className={styles.td}>{props.rating}</td>
            <td className={styles.td}>{props.review}</td>
            <td className={styles.td}>{props.date}</td>
        </tr>
    );
};

export default TableBodyMobile;
