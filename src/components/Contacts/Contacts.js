import React, { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';


const Contacts = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ei7m9xs', 'template_4zrzzgf', form.current, '56NMmryUyYSpMUw0K')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
        );

        e.target.reset(); 
    };

    return (
        <div className="contacts">
            <Container fluid className="tc form">
                <h1 className=" white tc">Contact me</h1>
                <Form ref={form} className="tc" onSubmit={sendEmail}>
                    <Form.Group className="mb-2" controlId="formGroupName">
                        <Form.Control required type="text" name="user_name" placeholder="Full name" size="lg" id="fullName" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Control required type="email" name="user_email" placeholder="Email" size="lg" id="email" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Control required as={"textarea"} rows={8} name="message" placeholder="Message" id="message" />
                    </Form.Group>
                    <Form.Group className="mb-3 tc" >
                        <Button className="sendBtn" type="submit" value="Send" variant="trasparent" >
                            <FaPaperPlane className="sendIcon"/><b>Send</b>
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </div>

    );
}

export default Contacts