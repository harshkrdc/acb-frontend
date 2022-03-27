import './LoginPage.css';
import logo from './Group 5132.png';
import trans from './freepik.png';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';


const LoginPage = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return ( 
        <div className="login-page">

            <div className="login-left">
                <img src={trans} alt="logo" />
            </div>
            <div className="login-mid">
                <div className="login-logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="login-container">
                    <div className="login-title">
                        <h1>Login</h1>
                        <h3>Enter your credentials to get access to tool</h3>
                        <div className="form-container">
                            <Form name="basic" style={{width : "100%"}} labelCol={{ span: 8,}} wrapperCol={{ span: 16,}} initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                
                                <h2>USER ID</h2>
                                <Form.Item name="username" style={{width : "100%"}} rules={[ { required: true, message: 'Please input your username!', }, ]}>
                                    <Input  style={{width : "435px"}}/>
                                </Form.Item>

                                <h2>PASSWORD</h2>
                                <Form.Item name="password" rules={[ { required: true, message: 'Please input your password!',}, ]}>
                                    <Input.Password style={{width : "435px"}}/>
                                </Form.Item>

                                <div className="form-bottom">
                                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0,span: 30, }}>
                                        <Checkbox style={{marginTop : "15px"}}>Remember me</Checkbox>
                                    </Form.Item>
                                    <h4  style={{color : "blue"}}>Forgot Password ?</h4>
                                </div>
                                <Form.Item wrapperCol={{ offset: 0, span: 16, }}>
                                    <Button style={{width : "435px", marginTop : "10px"}} type="primary" htmlType="submit"> Submit </Button>
                                </Form.Item>    
                            </Form>
                            <div className="form-last">
                                <h3 style={{marginRight : "5px"}}>Dont have an account yet?</h3>
                                <h3 style={{color : "blue"}}>Signup</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-right">
                <img src={trans} alt="logo" />
            </div>

            
        </div> 
    );
}
 
export default LoginPage;