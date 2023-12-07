import { createSlice } from '@reduxjs/toolkit'

const transferFilterSlice = createSlice({
  name: 'transferFilter',
  initialState: {
    allTransfers: false,
    '1transfer': false,
    '2transfers': false,
    '3transfers': false,
    withoutTransfers: true,
  },
  reducers: {
    checkTransfer(state, action) {
      const { id, value } = action.payload
      switch (id) {
        case 'allTransfers': {
          if (value) {
            state.allTransfers = true
            state.withoutTransfers = true
            state['1transfer'] = true
            state['2transfers'] = true
            state['3transfers'] = true
          } else {
            state.allTransfers = false
            state.withoutTransfers = false
            state['1transfer'] = false
            state['2transfers'] = false
            state['3transfers'] = false
          }
          break
        }
        default:
          state[id] = value
          state.allTransfers = false
          if (
            state.withoutTransfers &&
            state['1transfer'] &&
            state['2transfers'] &&
            state['3transfers']
          )
            state.allTransfers = true

          break
      }
    },
  },
})

export const { checkTransfer } = transferFilterSlice.actions

export default transferFilterSlice.reducer
