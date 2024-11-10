import Form from "../components/Form";
import Info from "../components/Info";

const Contacts = () => {
  return (
    <>
      <h2 className="h2">Contact Us</h2>
      <br />
      <br />
      <p>
        If you have any questions or feedback, feel free to reach out to us!
      </p>
      <main>
        <section>
          <Info
            phone_no="+123-456-7890"
            email="info@foodparadise.com"
            address="123 Food Paradise St., Gourmet City, FL 12345"
          />
          <Form />
        </section>
      </main>
    </>
  );
};

export default Contacts;
