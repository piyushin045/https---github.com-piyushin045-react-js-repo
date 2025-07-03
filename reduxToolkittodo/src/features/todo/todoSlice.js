import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = { //here we have assign object to score multiple of thing
    todos: [{id:1,text:"hello ji"}]

}

/// now we will create a slice

export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{ // here we have to give a function
        addTodo:(state,action)=>{
            const todo={
                id:nanoid()
                ,text:action.payload  // payload is a object
            }
            state.todos.push(todo)
        }, // here we will get two things ie.. state and action
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // updateTodo:(state,action)=>{
        //     state.todos = state.todos.filter((todo) => todo.id === id ? todo:todo)

        // }
    }
})
// state :- gives the initial situation of the function 
// action :-  to do something the values will be provided by the action

export const {addTodo,removeTodo,/*updateTodo*/} = todoSlice.actions

export default todoSlice.reducer
