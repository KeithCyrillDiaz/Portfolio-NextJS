import { configureStore } from '@reduxjs/toolkit';
import technicalSkillsReducer from './technicalSkillsSlice';


const store = configureStore({
    reducer: {
        technicalSkills: technicalSkillsReducer, // This key should match the slice name
        // You can add more reducers here if needed
    },
});

// Export the store
export type RootState = ReturnType<typeof store.getState>; // Root state type for TypeScript
export type AppDispatch = typeof store.dispatch; // App dispatch type for TypeScript
export default store;
