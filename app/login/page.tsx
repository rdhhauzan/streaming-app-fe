"use client";

import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";

export default function Login() {
  async function onFinish(values: any) {
    await axios.post("http://localhost:3000/auth/login", values)
    .then((res) => {
        if (res.data.status == 200) {
            localStorage.setItem("access_token", res.data.access_token)
            message.success("Login success")
        } else {
            message.error("Login failed")
        }
    })
    .catch((err) => {
        console.log(err)
        message.error("Login failed")
    })
  }

  return (
    <>
      <h1>Login</h1>

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
