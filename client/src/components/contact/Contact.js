import React, { useState } from 'react'
import axios from "axios"
import "./style.css"
import { Jumbotron, Row, Col, Container, Button, Form, FormGroup, Label, Input } from "reactstrap"
export default function Contact() {
    const [ sent, setSent ] = useState(false);
    const [text, setText] = useState("")
    const [name, setName] = useState("")
    const [mail, setMail] = useState("");
    // const [name, setName] = useState("")
    // Handle Send method
    const handleSend = async () => {
        setSent(true)
        try {
            await axios.post("http://localhost:4000/send", {
                name,
                mail,
                text
            })
        } catch (err) {
            console.log(err);
        }
        setSent(false)
        // setName("")
        // setMail("")
        // setMail("")
        console.log(sent);
    }

    return (
        <div className="contact">
                <Jumbotron fluid>
                    <Container fluid id="contact-id">
                        <Row>
                            <Col id="detail" sm="5">
                                <p>Contact us and we'll get back to you within 24 hours.</p>
                                <p><span class="glyphicon glyphicon-map-marker"></span> Chennai, Tamil Nadu, India</p>
                                <p><span class="glyphicon glyphicon-phone"></span> +91 123456788</p>
                                <p><span class="glyphicon glyphicon-envelope"></span> onlinejp@email.com</p>
                            </Col>
                            <Col sm="7" className="form-contact">
                                <Form >
                                    <FormGroup >
                                        <Label for="exampleName">Name</Label>
                                        <Input onChange={e => setName(e.target.value)} type="text" id="exampleName" placeholder="Name" />
                                    </FormGroup>
                                    <FormGroup >
                                        <Label for="exampleEmail">Email</Label>
                                        <Input onChange={e => setMail(e.target.value)} type="email" name="email" id="exampleEmail" placeholder="example@abc.com" />
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <Label for="exampleText">Message</Label>
                                        <Input value={text} onChange={(e) => setText(e.target.value)} type="textarea" placeholder="What you think?" name="text" id="exampleText" />
                                    </FormGroup>
                                    <Button onClick={handleSend} color="primary"> Send <span className="glyphicon glyphicon-send"></span> </Button>
                                </Form>
                            </Col>
                        </Row>
                        <Button color="primary" onClick={() => window.scrollTo(0, 0)}> <span className="glyphicon glyphicon-chevron-up"></span> </Button>
                    </Container>

                </Jumbotron>        
            
        </div>
        // <div className="contact">
        //    <form onSubmit={handleSend}>
        //         <h3>Name</h3>
        //         <input type="text" onChange={e => setName(e.target.value)} />
        //         <br />
        //         <h3>E-mail</h3>
        //         <input type="email" onChange={e => setMail(e.target.value)}/>
        //         <h3>Message</h3>
        //         <input type="textarea" id="2" value={text} onChange={(e) => setText(e.target.value)} />
        //         <br />
        //         <button type="submit" >Send</button>
        //     </form>
        //     {sent ? alert('fone') : console.log("Wait") }
        // </div>
    )
}
