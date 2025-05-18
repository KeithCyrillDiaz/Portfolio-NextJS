import axios from "axios";
import { API_BASE_URL, token } from "@/lib/constant";
import { TeamProjectsTypes } from "@/lib/Constants/Projects";

export type fetchTeamProjectsType = {
    message: {
        code: number;
        messages: string;
    },
    result: TeamProjectsTypes[]
}

export const fetchTeamProjects = async (): Promise<fetchTeamProjectsType | undefined> => {
    try {

        console.log("Fetching Projects");
        const response = await axios.get(`${API_BASE_URL}/PortfolioBackend/fetchTeamProjects`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
        
    } catch (error) {
        console.log("Error: ", error)
        return
    }
}