import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cards",
    initialState: [
        {id:'1', cardno: '7545 7545 7545 7545', balance: '2000', name: 'Amaeze Ife', valid: '10/12', bgcolor: '#1d1e2c', color: '#fff', background: '/card/card-bg.svg' },
        {id:'2', cardno: '4111 9854 9484 7439', balance: '9800', name: 'Amaeze Izu', valid: '04/21', bgcolor: '#DEF5F2', color: '#000', background: '/card/card-bgtwo.svg'},
        // {id:'3', cardno: '1653 7098 7839 0922', balance: '$1372.98', name: 'Patrcia Boy', valid: '10/12', bgcolor: '#1d1e2c', color: '#fff', background: '/card/card-bg.svg' },
        // {id:'4', cardno: '4111 9854 9484 7439', balance: '$400', name: 'Good Kid', valid: '04/21', bgcolor: '#DEF5F2', color: '#000', background: '/card/card-bgtwo.svg'}
    ],
    reducers: {
        addCard: (state, action) => {
            const newCard = {
                id: Date.now().toString(),
                cardno: action.payload.cardno,
                balance: action.payload.balance,
                name: action.payload.name,
                valid: action.payload.valid,
                bgcolor: action.payload.bgcolor,
                color: action.payload.color,
                background: action.payload.background
            };
            state.push(newCard)
        },
        deleteCard: (state, action) => {
            return state.filter((card) => card.id !== action.payload.id)
        }
    }
})

export const { addCard, deleteCard } = cardSlice.actions;

export default cardSlice.reducer