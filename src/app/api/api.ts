import axios from "axios";

export interface ResumeInfo {
    name: string;
    description: string;
}

export interface PortFolioInfo{
    techStack: string[];
    projects: Project[];
}

export interface Project{
    name: string;
    url: string;
}

export const getResumeInfo = async (): Promise<ResumeInfo | undefined> => {
    try {
        const response = await axios.get("https://raw.githubusercontent.com/khw7385/first-deploy/refs/heads/main/service/resume-info.json");

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getPortPolioInfo = async (): Promise<PortFolioInfo | undefined> => {
    try {
        const response = await axios.get("https://raw.githubusercontent.com/khw7385/first-deploy/refs/heads/main/service/portfolio-info.json");
        
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


