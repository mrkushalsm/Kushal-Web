import "./Info.css";

interface Props {
  phone_no: string;
  email: string;
  address: string;
}

const Info = (props: Props) => {
  return (
    <>
      <div className="contact-details">
        <h3>Our Contact Information</h3>
        <p>
          <strong>Phone:</strong> {props.phone_no}
        </p>
        <p>
          <strong>Email:</strong> {props.email}
        </p>
        <p>
          <strong>Address:</strong> {props.address}
        </p>
      </div>
    </>
  );
};

export default Info;
