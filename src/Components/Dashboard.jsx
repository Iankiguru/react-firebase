
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../Contexts/AuthContext'

const Dashboard = () => {
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate()

  const handleLogout = async (e) => {
      e.preventDefault()
      try{
          await logout()
          navigate('/signin')
      }catch(e){
        console.log(e)
      }
  }
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Dashboard</h2>

        <Form>
          <Form.Group id="email" className="mb-4">
            <Form.Label>
              Email : {currentUser && currentUser.email}
            </Form.Label>
          </Form.Group>
          <Button onClick={handleLogout} className="w-100" type="submit">
            Log Out
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </>
  )
}

export default Dashboard