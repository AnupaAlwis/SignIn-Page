import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import './App.css';

function App() {
  const onFinish = (values) => {
    console.log('Form Values:', values);
  };

  return (
    <div className="app">
      <div className="header">
        <Button type="link" className="header-button">
          Sign In
        </Button>
        <Button type="link" className="header-button">
          Contact
        </Button>
      </div>
      <div className="container">
        <Card className="form-card" title="Sign up your company" bordered={false} headStyle={{color: 'white' }}>
          <p className="subtitle">Tell us about your company</p>
          <Form layout="vertical" onFinish={onFinish}>
            
            <Form.Item
              name="companyName"
              rules={[{ required: true, message: 'Please enter your company name!' }]}
            >
              <Input placeholder="Registered Company Name" />
            </Form.Item>

            <Form.Item
              name="companyRegistrationNumber"
              rules={[{ required: true, message: 'Please enter your registration number!' }]}
            >
              <Input placeholder="Company Registration Number" />
            </Form.Item>

            <Form.Item
              name="companyAddress"
              rules={[{ required: true, message: 'Please enter your company address!' }]}
            >
              <Input placeholder="Enter your registered company address" />
            </Form.Item>

            <Form.Item
              name="billingAddress"
              rules={[{ required: true, message: 'Please enter your billing address!' }]}
            >
              <Input placeholder="Enter your billing address" />
            </Form.Item>

            <Form.Item>
              <Button class = 'submit-button' type="primary" htmlType="submit" block>
                Next
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default App;
