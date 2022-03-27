import './Project-Details.css';
import 'antd/dist/antd.css';
import { CalendarOutlined, UserOutlined, IdcardOutlined } from '@ant-design/icons';
import { Breadcrumb, Steps } from 'antd';
import { Link, useParams } from 'react-router-dom';

const { Step } = Steps;


const ProjectDetails = () => {

    const { id } = useParams(); 

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1,
                width: 1090,
                opacity: 0.2
            }}
        />
    );

    return ( 
        <div className="pd-main">
            <div className="bc-container">
                <Breadcrumb>
                    <Breadcrumb.Item>
                    <Link to="/">Monthly Billing Details</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Project {id}</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="pd-container">
                <div className="pd-left">
                    <div className="pd-left-top">
                        <div className="pd-title-section">
                            <div className="pd-title">
                                <h1>ABC Project</h1>
                            </div>
                            <div className="pd-id">
                                <h5>Project ID : 1223</h5>
                            </div>
                        </div>
                        <div className="pd-description" style={{marginBottom : "5px"}}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <ColoredLine color="silver" />
                        <div className="pd-card-container"  style={{marginTop : "5px"}}>
                            <div className="pd-card"  style={{borderRight : "2px solid silver"}}>
                                <div className="pd-card-left">
                                    <CalendarOutlined style={{fontSize : "40px", color: "#A3B0C1"}}/>
                                </div>
                                <div className="pd-card-right">
                                    <div className="pd-card-body">
                                        <h2>20 Jan, 2022</h2>
                                    </div>  
                                    <div className="pd-card-title">
                                        <h6>Issue Date</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="pd-card"   style={{borderRight : "2px solid silver"}}>
                                <div className="pd-card-left">
                                    <UserOutlined style={{fontSize : "40px", color: "#A3B0C1"}}/>
                                </div>
                                <div className="pd-card-right">
                                    <div className="pd-card-body">
                                        <h2>Cameron Williamson</h2>
                                    </div>  
                                    <div className="pd-card-title">
                                        <h6>Project Manager</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="pd-card">
                                <div className="pd-card-left">
                                    <IdcardOutlined  style={{fontSize : "40px", color: "#A3B0C1"}}/>
                                </div>
                                <div className="pd-card-right">
                                    <div className="pd-card-body">
                                        <h2>Bessie Cooper</h2>
                                    </div>  
                                    <div className="pd-card-title">
                                        <h6>Team Lead</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pd-left-bottom">
                        <div className="heading">
                            <h5 style={{letterSpacing: "0.08em", fontSize : "18px"}}>BILL DETAILS</h5>
                        </div>
                        <div className="bill-card">

                        </div>
                        <br />
                        <div className="heading">
                            <h5 style={{letterSpacing: "0.08em", fontSize : "18px"}}>ITEM DETAILS</h5>
                        </div>
                        <div className="item-list-head">
                            <div className="name"><h7>Item Name</h7></div>
                            <div className="hour"><h7>Hours</h7></div>
                            <div className="hour"><h7>Rate/Hr</h7></div>
                            <div className="hour"><h7>Tax</h7></div>
                            <div className="total"><h7>Line Total</h7></div>
                        </div>
                        <div className="item-list">
                            <div className="name">
                                <div className="name-top">
                                    <h7>ABC Project</h7>
                                </div>
                                <div className="name-bottom" style={{width : "350px"}}>
                                    <h7 style={{fontWeight: "400", fontSize: "12px",lineHeight: "18px",letterSpacing: "0.005em", color: "#8795A6"}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </h7>
                                </div>
                            </div>
                            <div className="hour"><h7>120 Hrs</h7></div>
                            <div className="hour"><h7>Rs. 40.00</h7></div>
                            <div className="hour"><h7>Rs 00.00</h7></div>
                            <div className="total"><h7>Rs 4,800</h7></div>
                        </div>
                        <br />
                        <ColoredLine color="silver" />
                        <div className="item-final-total">
                            <div className="text">
                                <h7  style={{fontWeight: "400",fontSize: "16px",lineHeight: "20px",color: "#6C7B8C"}}>Total Amount:</h7>
                            </div>
                            <div className="amount" style={{paddingLeft:"10px"}}>
                                <h8 style={{fontWeight:"600", fontSize: "25px", lineHeight:"20px"}}>Rs. 4,800.00</h8>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
                <div className="pd-right">
                    <div className="heading">
                        <h5 style={{letterSpacing: "0.08em", fontSize : "18px", color: "#6C7B8C"}}>BILL DETAILS</h5>
                    </div>
                    <br />
                    <div className="team-approval">
                        <h2>Team Lead Approval</h2>
                        <Steps progressDot current={3}>
                            <Step title="Sent"/>
                            <Step title="Pending"/>
                            <Step title="Complete"/>
                        </Steps>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="team-approval">
                        <h2>Payment Approval | Client</h2>
                        <Steps progressDot current={3}>
                            <Step title="Sent"/>
                            <Step title="Pending"/>
                            <Step title="Complete"/>
                        </Steps>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="team-approval">
                        <h2>Payment Approval | Finance Team</h2>
                        <Steps progressDot current={1}>
                            <Step title="Sent"/>
                            <Step title="Pending"/>
                            <Step title="Complete"/>
                        </Steps>
                    </div>
                </div>
            </div>
            
        </div>  
    );
}
 
export default ProjectDetails;