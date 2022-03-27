import './Card.css';
import { CalendarOutlined } from '@ant-design/icons';
import dotted from './Line 2.png';
import { Badge, Button } from 'antd';

const Card = () => { 

    return ( 
        <div className="card-container">
            <div className="c-container">
                <h2>ABC Project</h2>
                <h3>Application Development / Project Descriprion here</h3>
                <br />
                <div className="time-period">
                    <CalendarOutlined />
                    <h3>20 Jan, 2022</h3>
                    <img src={ dotted } alt="dotted " />
                    <CalendarOutlined />
                    <h3>20 Jan, 2022</h3>
                </div>
                <br />
                <br />
                <hr />
                <div className="status-container">
                    <Badge status="success" text="Success" />
                    {/* <Badge status="error" text="Error" /> */}
                    {/* <Badge status="default" text="Default" /> */}
                    {/* <Badge status="processing" text="Processing" /> */}
                    {/* <Badge status="warning" text="Warning" /> */}
                    <Button type="primary" size='default'>
                        Primary
                    </Button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;