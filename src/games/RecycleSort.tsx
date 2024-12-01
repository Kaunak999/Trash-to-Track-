import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const items = [
  { id: 'phone', content: '📱 Old Phone', type: 'electronics' },
  { id: 'laptop', content: '💻 Laptop', type: 'electronics' },
  { id: 'battery', content: '🔋 Battery', type: 'hazardous' },
  { id: 'cable', content: '🔌 Cable', type: 'electronics' },
  { id: 'monitor', content: '🖥️ Monitor', type: 'electronics' },
  { id: 'tablet', content: '📱 Tablet', type: 'electronics' },
  { id: 'printer', content: '🖨️ Printer', type: 'electronics' },
  { id: 'bulb', content: '💡 LED Bulb', type: 'hazardous' },
];

const bins = {
  electronics: '♻️ Electronics Bin',
  hazardous: '⚠️ Hazardous Waste Bin',
};

export function RecycleSort() {
  const [score, setScore] = useState(0);
  const [gameItems, setGameItems] = useState(items);
  const [message, setMessage] = useState('');
  const [gameComplete, setGameComplete] = useState(false);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const item = gameItems.find(i => i.id === result.draggableId);
    const targetBin = result.destination.droppableId;

    if (item && item.type === targetBin) {
      setScore(prev => prev + 10);
      setMessage('Correct! +10 points');
      setGameItems(prev => {
        const newItems = prev.filter(i => i.id !== item.id);
        if (newItems.length === 0) {
          setGameComplete(true);
        }
        return newItems;
      });
    } else {
      setScore(prev => Math.max(0, prev - 5));
      setMessage('Try again! -5 points');
    }
  };

  const resetGame = () => {
    setScore(0);
    setGameItems(items);
    setMessage('');
    setGameComplete(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Recycle Sort</h2>
        <p className="text-lg mb-2">Score: {score}</p>
        <p className={`text-lg font-semibold ${message.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
        {gameComplete && (
          <div className="mt-4">
            <p className="text-2xl font-bold text-green-600 mb-4">Congratulations! You've completed the game!</p>
            <button
              onClick={resetGame}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <Droppable droppableId="items">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white p-4 rounded-lg min-h-[200px] shadow-lg"
                >
                  <h3 className="text-xl mb-4 font-semibold">Items to Sort</h3>
                  {gameItems.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-blue-100 p-3 mb-2 rounded cursor-move hover:bg-blue-200 transition-colors"
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className="flex-1 space-y-4">
            {Object.entries(bins).map(([type, label]) => (
              <Droppable key={type} droppableId={type}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-green-100 p-4 rounded-lg min-h-[200px] shadow-lg"
                  >
                    <h3 className="text-xl mb-2 font-semibold">{label}</h3>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}