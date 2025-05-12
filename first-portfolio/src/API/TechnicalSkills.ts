import { API_BASE_URL, token } from "@/lib/constant";
import { TechnicalSkillTypes } from "@/lib/Constants/About";

import axios from "axios";

export type fetchTechnicalSkillsType = {
    message: {
        code: number;
        messages: string;
    },
    result: TechnicalSkillTypes[]
}

export const fetchTechnicalSkills = async (): Promise<fetchTechnicalSkillsType | undefined> => {
        try {
           const url = `${API_BASE_URL}/PortfolioBackend/fetchTechnicalSkills`
            const response  = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data: fetchTechnicalSkillsType = response.data ?? []
            return data
        } catch (error) {
            console.log("Error: ", error)
            return 
        }
    }
