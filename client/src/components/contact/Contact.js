import React, { useState } from 'react'
import axios from "axios"
import { Jumbotron, Row, Col, Container, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
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
    }

    return (
        <div className="contact">
            <Container fluid>
                <Jumbotron fluid>
                    <Col xs="6">
                        
                    </Col>
                </Jumbotron>        
            </Container>
            
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
