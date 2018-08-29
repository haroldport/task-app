import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    display: flex;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => 
        props.isDragDisabled
            ? 'lightgrey'
            : props.isDragging
                ? 'lightgreen'
                : 'white'
        };
`

export default class Task extends Component {
    render() {
        const { task, index } = this.props

        return (
            <Draggable 
                draggableId={task.id} 
                index={index}
            >
                {
                    (provided, snapshot) => (
                        <Container
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            innerRef={provided.innerRef}
                            isDragging={snapshot.isDragging}
                            area-roledescription="Press space bar to lift the task"
                        >
                            {task.content}
                        </Container>
                    )
                }
            </Draggable>
        )
    }
}