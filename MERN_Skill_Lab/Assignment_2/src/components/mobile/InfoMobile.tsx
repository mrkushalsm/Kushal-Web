import styles from "./InfoMobile.module.css";

interface Props {
    phone_no: string;
    email: string;
    address: string;
}

const InfoMobile = (props: Props) => {
    return (
        <>
            <div className={styles.contact_details}>
                <h3>Our Contact Information</h3>
                <p className={styles.p}>
                    <strong>Phone:</strong> {props.phone_no}
                </p>
                <p className={styles.p}>
                    <strong>Email:</strong> {props.email}
                </p>
                <p className={styles.p}>
                    <strong>Address:</strong> {props.address}
                </p>
            </div>
        </>
    );
};

export default InfoMobile;
