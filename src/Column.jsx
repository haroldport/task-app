import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import Task from './Task'

const Container = styled.div`
    background-color: white;
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;
    display: flex;
    flex-direction: column;
`
const Title = styled.h3`
    padding: 8px;
`
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
    flex-grow: 1;
    min-height: 100px;
`

export default class Column extends Component {
    render() {
        const { column, tasks, index } = this.props

        return (
            <Draggable draggableId={column.id} index={index}>
                {
                    (provided) => (
                        <Container {...provided.draggableProps} innerRef={provided.innerRef}>
                            <Title {...provided.dragHandleProps}>
                                {column.title}
                            </Title>
                            <Droppable
                                droppableId={column.id}
                                type="task"
                            >
                                {
                                    (provided, snapshot) => (
                                        <TaskList
                                            innerRef={provided.innerRef}
                                            {...provided.droppableProps}
                                            isDraggingOver={snapshot.isDraggingOver}
                                        >
                                            {tasks.map((task, index) => <Task key={task.id} index={index} task={task} />)}
                                            {provided.placeholder}
                                        </TaskList>
                                    )
                                }
                            </Droppable>
                        </Container>
                    )
                }
            </Draggable>
        )
    }
}