import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AviaSalesService from '../aviasalesService'

export const fetchTickets = createAsyncThunk(
  'transferFilter/fetchTickets',
  async function () {
    const aviasalesService = new AviaSalesService()
    const id = await aviasalesService.requestId()
    const page = await aviasalesService.requestPage(id.searchId)
    return page
  }
)

const fetchTicketsSlice = createSlice({
  name: 'fetchTickets',
  initialState: {
    page: [],
    loading: true,
    error: false,
    completeLoading: false,
  },
  reducers: {
    lint: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.page = action.payload.tickets
        state.completeLoading = action.payload.stop
      })
      .addCase(fetchTickets.rejected, (state, action) => {})
  },
})

export const { lint } = fetchTicketsSlice.actions
export default fetchTicketsSlice.reducer
