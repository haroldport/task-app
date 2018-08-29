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

// const Handle = styled.div`
//     width: 20px;
//     height: 20px;
//     background-color: orange;
//     border-radius: 4px;
//     margin-right: 8px;
// `

export default class Task extends Component {
    render() {
        const { task, index } = this.props
        const isDragDisabled = task.id === 'task-1'

        return (
            <Draggable 
                draggableId={task.id} 
                index={index}
                isDragDisabled={isDragDisabled}    
            >
                {
                    (provided, snapshot) => (
                        <Container
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            innerRef={provided.innerRef}
                            isDragging={snapshot.isDragging}
                            isDragDisabled={isDragDisabled}
                        >
                            {/* <Handle {...provided.dragHandleProps} /> */}
                            {task.content}
                        </Container>
                    )
                }
            </Draggable>
        )
    }
}