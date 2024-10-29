import { createSlice } from '@reduxjs/toolkit';
import { TechnicalSkillTypes } from '@/lib/Constants/About';



type TechnicalSkillsState = {
    skills: TechnicalSkillTypes[];
    loading: boolean;
    error: string | null;
}

const initialState: TechnicalSkillsState = {
    skills: [],
    loading: false,
    error: null,
}

const technicalSkillsSlice = createSlice({
    name: 'technicalSkills',
    initialState,
    reducers: {},
});

export const { actions, reducer } = technicalSkillsSlice;
export default technicalSkillsSlice.reducer
