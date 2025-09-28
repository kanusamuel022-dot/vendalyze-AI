import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Form, Input } from 'antd';

const Onboarding = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    // TODO: Send data to backend API
    console.log('Onboarding data:', values);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Vendalyze AI Onboarding
      </Typography>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item name="businessName" label="Business Name" rules={[{ required: true }]}> 
          <Input placeholder="Enter your business name" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}> 
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item name="adAccount" label="Ad Account ID" rules={[{ required: true }]}> 
          <Input placeholder="Connect your ad account" />
        </Form.Item>
        <Button type="submit" variant="contained" color="primary">
          Continue
        </Button>
      </Form>
    </Container>
  );
};

export default Onboarding;
