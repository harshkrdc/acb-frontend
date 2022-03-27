import './Homepage.css';
// import Card from './Card';
import React, { useEffect } from 'react';
import { Input, Select, Progress } from 'antd';
import 'antd/dist/antd.css';
import {RightCircleOutlined} from '@ant-design/icons';
import { FileDoneOutlined, FileTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
const { Search } = Input;

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};


const Homepage = () => {

    const [projects, setProjects] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:8000/projects')
        .then(res => {
            return res.json()
        })
        .then(data => {
            // console.log(data);
            setProjects(data);
        })
    }, []);
                                                                      


    const [cities, setCities] = React.useState(cityData[provinceData[0]]);
    const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);

    const handleProvinceChange = value => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
    };

    const onSecondCityChange = value => {
        setSecondCity(value);
    };

    // horizontal rule
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1,
                width: 1280
            }}
        />
    );
    

    const { Option } = Select;

    function onChange(value) {
    console.log(`selected ${value}`);
    }

    function onSearch(val) {
    console.log('search:', val);
    }

    return ( 
        <div className="homepage">
            <div className="homepage-container">            
                <div className="left-container">
                    <h1>Search</h1>
                    <div className="search-bar">
                        <Search placeholder="Search by Project ID, Name.." enterButton="Search" size="large" loading />
                    </div>
                    <br/>
                    <br/>
                    <h1>Filter</h1>
                    {/* ----------------------The three dropdowns which are interdependent----------------- */}
                    <div className="dropdowns">
                        <Select defaultValue={provinceData[0]} style={{ width: 300  }} onChange={handleProvinceChange}>
                            {provinceData.map(province => (
                            <Option key={province}>{province}</Option>
                            ))}
                        </Select>
                        <Select style={{ width: 300 }} value={secondCity} onChange={onSecondCityChange}>
                            {cities.map(city => (
                            <Option key={city}>{city}</Option>
                            ))}
                        </Select>
                        <Select style={{ width: 300 }} value={secondCity} onChange={onSecondCityChange}>
                            {cities.map(city => (
                            <Option key={city}>{city}</Option>
                            ))}
                        </Select>
                    </div>
                    <br />
                    <ColoredLine color="silver" />
                    <br />
                    <div className="card-head">
                        <h1>Projects</h1>
                        <a href="">View all</a>
                        <RightCircleOutlined />
                    </div>
                    {/*------------------------------The main div for cards -------------------------*/}
                    <div className="four-cards">
                        {/* <Card />   */}
                        {projects && <ProjectCard projects={projects} style={{border:"2px solid black"}}/>}
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-heading">
                        <h1>COMMON REPORTS</h1>
                        <Select
                            showSearch
                            placeholder="Select Time"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </div>
                    <div className="project-count">

                    </div>
                    <div className="report-container">
                        <div className="report">
                            <div className="stats-tab">
                                <div className="p-icon">
                                    <FileDoneOutlined style={{fontSize:"50px", color:"black"}}/>
                                </div>
                                <div className="p-nums">
                                    <div className="num">
                                        <h5>555</h5>
                                    </div>
                                    <div className="desc">
                                        <h1>Paid Bills</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="stats-tab">
                                <div className="p-icon">
                                    <FileDoneOutlined style={{height: "100%", width:"50%", fontSize:"50px"}}/>
                                </div>
                                <div className="p-nums">
                                    <div className="num">
                                        <h5>555</h5>
                                    </div>
                                    <div className="desc">
                                        <h1>Un-Paid Bills</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="report">
                            <div className="stats-tab">
                                <div className="p-icon" style={{height: "100%", width:"40%", border:"2px solid blue"}}>
                                    <FileDoneOutlined style={{fontSize:"50px"}}/>
                                </div>
                                <div className="p-nums">
                                    <div className="num">
                                        <h5>555</h5>
                                    </div>
                                    <div className="desc">
                                        <h1>Paid Bills</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="stats-tab">
                                <div className="p-icon" style={{height: "100%", width:"40%", border:"2px solid blue"}}>
                                    <FileDoneOutlined style={{fontSize:"50px"}}/>
                                </div>
                                <div className="p-nums">
                                    <div className="num">
                                        <h5>555</h5>
                                    </div>
                                    <div className="desc">
                                        <h1>Paid Bills</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="report">
                            <div className="stats-tab">
                                <div className="p-icon" style={{height: "100%", width:"40%", border:"2px solid blue"}}>
                                    <FileDoneOutlined style={{fontSize:"50px"}}/>
                                </div>
                                <div className="p-nums">
                                    <div className="num">
                                        <h5>555</h5>
                                    </div>
                                    <div className="desc">
                                        <h1>Paid Bills</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="stats-tab">
                                <div className="p-icon" style={{height: "100%", width:"40%", border:"2px solid blue"}}>
                                    <FileDoneOutlined style={{fontSize:"50px"}}/>
                                </div>
                                <div className="p-nums">
                                    <div className="num">
                                        <h5>555</h5>
                                    </div>
                                    <div className="desc">
                                        <h1>Paid Bills</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr />
                    <h1>EMPLOYEE LEAVES</h1>
                    <div style={{ width: 170 }}>
                        <Progress percent={30} size="small" />
                        <Progress percent={50} size="small" status="active" />
                        <Progress percent={70} size="small" />
                        <Progress percent={90} size="small" />
                    </div>
                                        
                </div>
            </div>
        </div>
     );
}
 
export default Homepage;