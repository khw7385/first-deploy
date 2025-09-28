import axios from "axios";

export interface ResumeInfo {
    name: string;
    description: string;
}

export const getResumeInfo = async (): Promise<ResumeInfo | undefined> => {
    try {
        const response = await axios.get("https://raw.githubusercontent.com/khw7385/first-deploy/refs/heads/feat/07-resume/service/resume-info.json");

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}




