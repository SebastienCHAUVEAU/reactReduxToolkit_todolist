import { createSlice, configureStore } from "@reduxjs/toolkit";

//Etat que Redux va gérer pour nous, il s'agit d'une tranche et non du Store complet
const todoSlice = createSlice({
   name: "todo",

   initialState : [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
      ],

    reducers : {
        //L'action qui est en deux parties (type et payload[informations]) donnerait cela :
        //{ type : "ADD_TASK", payload : "Cuisiner pour les enfants"}
        //En vérité l'action prendra la forme suivante "nomSlice/nomAction" :
        //{ type : "todo/addTask"}
        addTask : (state,action) => { 
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload
            }
             //On va pouvoir modifier directement le state car il s'agit déjà d'une copie
            state.push(newTask);
        },

        toggleTask : (state,action) => { 
            //{ type : "todo/toggleTask", payload : 2} le 2 étant l'id de l'élément à modifier
            const task = state.find(t => t.id === action.payload);
            task.done = !task.done;
        },

        deleteTask : (state,action) => {
            //{ type : "todo/deleteTask", payload : 3} le 3 étant l'id de l'élément à supprimer
            state = state.filter((t) => t.id !== action.payload);
            //Redux est perdu si on ne fait pas un return
            return state;
            
         },
 
    }
});

export const {addTask, toggleTask, deleteTask} =   todoSlice.actions;

//Ci-dessous le store complet :
export const store = configureStore({
    reducer : {
        todo : todoSlice.reducer
    }

});