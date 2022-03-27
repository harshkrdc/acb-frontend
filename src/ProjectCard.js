import './ProjectCard.css';
import { CalendarOutlined } from '@ant-design/icons';
import dotted from './Line 2.png';
import { Badge, Button } from 'antd';

const ProjectCard = ({projects}) => {


    return ( 
        <div className="project-card">
            {projects.map((project) => (
                <div className="project-preview" key={project.id}>
                    <h2>{project.title}</h2>
                    <h3>{project.description}</h3>
                    <br />
                    <div className="time-period">
                        <CalendarOutlined style={{fontSize : "20px", height: "30px"}} />
                        <h3>{ project.issueDate }</h3>
                        <img src={dotted} alt="dotted " />
                        <CalendarOutlined  style={{fontSize : "20px", height: "30px"}} />
                        <h3>{ project.logDate }</h3>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <div className="status-container">
                        <Badge status="success" text={project.status} />
                        {/* <Badge status="error" text="Error" /> */}
                        {/* <Badge status="default" text="Default" /> */}
                        {/* <Badge status="processing" text="Processing" /> */}
                        {/* <Badge status="warning" text="Warning" /> */}
                        <Button type="primary" size='default'>
                            View Bill
                        </Button>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default ProjectCard;