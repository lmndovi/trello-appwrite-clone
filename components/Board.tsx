import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Board = () => {
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div>{/* rendering all of the columns */}</div>}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
