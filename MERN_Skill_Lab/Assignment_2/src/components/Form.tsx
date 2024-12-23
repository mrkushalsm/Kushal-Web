import "./Form.css";

const Form = () => {
    return (
        <>
            <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form action="submit_form.php" method="POST">
                    <label form="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                    <br/>
                    <br/>

                    <label form="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                    <br/>
                    <br/>

                    <label form="message">Message:</label>
                    <textarea id="message" name="message" rows={5} required/>
                    <br/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Form;
