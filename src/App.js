import React, { useState } from 'react'
import styled from 'styled-components'

function App() {
  const [txt, setTxt] = useState('')
  const [todo, setTodo] = useState([{id:1677720523598 ,txt:"React를 배워봅시다"}])

  const write = (e) => {
    e.preventDefault()
    const newTodo = {id:Date.now() ,txt}
    setTodo([...todo, newTodo])
    setTxt('')
  }
  return (
    <Layout>
      <Form onSubmit={write}>
        <input required type="text" value={txt} onChange={(e)=> setTxt(e.target.value)}/>
        <input type="submit" onSubmit={write} value="추가하기"/>
      </Form>
      <Title>Todo-List</Title>
      <Item>
        {todo.map(el => (
          <TodoBox key={el.id}>
            {el.txt}
          </TodoBox>
        ))}

      </Item>
    </Layout>
  )
}

export default App


const Layout = styled.div`
max-width:1200px;
min-width: 800px;
margin: 0 auto;
`
const Form = styled.form`
width: 100%;
height: 100px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;


input {
  width: 100px;
  height: 50px;
}
input:nth-child(1) {
  width: 300px;
  margin-right: 5px;
  display: block;
}

input:nth-child(2) {
  font-size: 20px;
  display: block;
}
`

const Title = styled.div`
width: 500px;
height:100px;
margin: 10px auto;
font-size: 50px;
text-align: center;
line-height: 100px;
font-weight: 800;
`

const Item = styled.div`
width:100%;
min-height: 100px;
display: flex;
padding: 30px;
padding-left: 30px;
gap:10px;
flex-wrap: wrap;
`

const TodoBox = styled.div`
width: 200px;
height: 50px;
text-align: center;
line-height: 50px;
padding: 5px;
border: 4px solid green;
border-radius: 30px;
font-size: 20px;
`
