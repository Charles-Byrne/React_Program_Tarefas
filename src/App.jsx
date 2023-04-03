//SINTAXE JSX
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Container, TodoList, Input, Button, ListItem, Trash, Check } from './styles'


function App() {
  //Código JavaScript
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }

  }

  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deletarTarefa(id) {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  return (
    // Retorna código HTML  (retornará sem um elemento HTML por exemplo a div) também pode ser usado o Fragment (<> </>)
    // onChange = evento de ouvir as mudanças, no input ele grava o que foi digitado  
    // onClick = evento de captura o clique no botão.
    <Container>
      <TodoList>
        <Input onChange={inputMudou} placeholder='Digite o que tenho que fazer..' />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />

                  <li>{item.task}</li>

                  <Trash onClick={() => deletarTarefa(item.id)} />
                </ListItem>
              ))
            ) : (
              <h3>Não há itens na lista</h3>
            )}
        </ul>
      </TodoList>
    </Container>
  )
}

export default App
