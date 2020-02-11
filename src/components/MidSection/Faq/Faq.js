import React, {Component} from "react";
import {Accordion, Card} from "react-bootstrap";

export default class Faq extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isActive : -1,
        };
    }

    toggleClass = (index) => {
        this.setState(({ isActive }) => ({
            isActive: isActive === index ? isActive : index,
        }));
    };

    render() {
        const { isActive } = this.state;
        let languageManager = this.props.languageManager();
        return(
            <div className="Faq">
                <div className="container">
                    <h3 className="section-heading">
                        {languageManager.faq_title}
                    </h3>
                    <p className="section-subtitle">
                        {languageManager.faq_subtitle}
                    </p>
                    <div className="faq-block">
                        <Accordion defaultActiveKey="0">
                            {languageManager.faq_questions.map((item, index) => {
                                return (
                                    <Card className="panel panel-default" key={index}>
                                        <Accordion.Toggle eventKey={index}
                                                          className={isActive === index  ? 'question false' : 'question'}
                                                          onClick={()=>this.toggleClass(index)}>
                                                    {item.q}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={index} className="panel-collapse">
                                            <Card.Body className="panel-body">
                                                <p>
                                                    {item.a}
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            }) }
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }
};