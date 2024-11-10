import Form from "../components/Form";
import Info from "../components/Info";
import {useMediaQuery} from "react-responsive";
import InfoMobile from "../components/mobile/InfoMobile.tsx";
import FormMobile from "../components/mobile/FormMobile.tsx";

const Contacts = () => {

    const isMobile = useMediaQuery({maxWidth: 425});

    return (
        <>
            <h2 className="h2">Contact Us</h2>
            <br/>
            <br/>
            <p>
                If you have any questions or feedback, feel free to reach out to us!
            </p>
            <main>
                <section>
                    {isMobile ? <InfoMobile
                        phone_no="+123-456-7890"
                        email="info@foodparadise.com"
                        address="123 Food Paradise St., Gourmet City, FL 12345"
                    /> : <Info phone_no="+123-456-7890"
                               email="info@foodparadise.com"
                               address="123 Food Paradise St., Gourmet City, FL 12345"/>}
                    {isMobile ? <FormMobile/> : <Form/>}
                </section>
            </main>
        </>
    );
};

export default Contacts;
