import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';

const LoginForm = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await axios.post('http://localhost:5000/api/admins/login', values);
      console.log(response.data);
      
      if (response.data.success) { // Assuming the response contains a 'success' field indicating the result
        navigate('/home'); // Redirect to home page
      } else {
        alert('Validation failed: ' + response.data.message); // Show the error message from the server
      }
    } catch (error) {
      console.error('There was an error validating admin!', error);
      alert('Failed Validation');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{display:"flex",flexDirection:"row",flex:1, height:"100vh", background:"#b7defb"}}>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span:25 ,
      }}
      
      style={{
        maxWidth: 600,
        margin: 'auto',
        padding: 25,
        backgroundColor: 'lightskyblue',
        borderRadius: 10,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default LoginForm;
