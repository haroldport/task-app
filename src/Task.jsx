import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 3px solid lightgrey;
    border-radius: 50%;
    display: flex;
    padding: 8px;
    margin-right: 8px;
    background-color: ${props => 
        props.isDragDisabled
            ? 'lightgrey'
            : props.isDragging
                ? 'lightgreen'
                : 'white'
        };
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
        outline: none;
        border-color: red;
    }
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
                        >
                            {task.content[0]}
                        </Container>
                    )
                }
            </Draggable>
        )
    }
}