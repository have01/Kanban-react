import React, { useState } from 'react';
import { columnsFromBackend } from './KanbanData';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { v4 as uuidv4 } from 'uuid';
import ProfileModal from './ProfileModal';

const Kanban = () => {
    const [showModal, setShowModal] = React.useState(false);

    const [columns, setColumns] = useState(columnsFromBackend);
    const handleAddOther = () => {
        const newItemId = uuidv4();
        const inputValue = window.prompt('Enter your title:');
        if (inputValue !== null) {
            // Do something with the input value
            setColumns(prevColumns => {
                return {
                    ...prevColumns,
                    [newItemId]: {
                        title: inputValue,
                        items: []
                    }
                };
            });
        }

    }
    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems,
                },
            });
        }
    };
    return (
        <>
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
                <div className='container'>
                    <div className='taskColumnStyles'>
                        {Object.entries(columns).map(([columnId, column], index) => {
                            return (
                                <Droppable key={columnId} droppableId={columnId}>
                                    {(provided, snapshot) => (
                                        <div
                                            className='tasklist'
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            <div className='title'>{column.title}</div>
                                            {column.items.map((item, index) => (
                                                <TaskCard key={item} item={item} index={index} setShowModal={setShowModal} />
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            );
                        })}
                        <div className='add__Other'><button className='add__btn' onClick={handleAddOther}>Add Other</button></div>
                    </div>

                </div>
            </DragDropContext>
            <ProfileModal showModal={showModal} setShowModal={setShowModal} />
        </>


    );
};

export default Kanban;
