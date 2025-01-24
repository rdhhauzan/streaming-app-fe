"use client";

import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";

export default function Register() {
  async function onFinish(values: any) {
    await axios.post("http://localhost:3000/auth/register", values)
    .then((res) => {
        message.success("Register success")
    })
    .catch((err) => {
        console.log(err)
        message.error("Register failed")
    })
  }

  return (
    <>
      <h1>Register</h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
