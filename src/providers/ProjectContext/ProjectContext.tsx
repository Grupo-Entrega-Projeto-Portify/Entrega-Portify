import { createContext, useState, useEffect, useContext } from "react"
import { api } from "../../services/api"
import {
	IProject,
	ICreateProjectInput,
	IUpdateProjectInput,
	IProjectContext,
	IProjectProviderProps,
} from "./types"
import { UserContext } from "../UserContext/UserContext"

export const ProjectContext = createContext({} as IProjectContext)

export const ProjectProvider = ({ children }: IProjectProviderProps) => {
	const [projects, setProjects] = useState<IProject[]>([])
	const { user } = useContext(UserContext)

	const fetchProjects = async (portfolioId: number) => {
		try {
			const response = await api.get(`/portfolios/${portfolioId}/projects`)
			setProjects(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	const createProject = async (projectData: ICreateProjectInput) => {
		try {
			const token = localStorage.getItem("@TOKEN")
			const response = await api.post("/projects", projectData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			const createdProject = response.data
			setProjects((prevProjects) => [...prevProjects, createdProject])
		} catch (error) {
			console.log(error)
		}
	}

	const updateProject = async (
		projectId: number,
		projectData: IUpdateProjectInput
	) => {
		try {
			console.log(projectData)
			console.log(projectId)
			const token = localStorage.getItem("@TOKEN")
			const {data} = await api.put(`/projects/${projectId}`, projectData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			console.log(data)
			const filteredProjects = projects.filter(project => project.id !== projectId)
			setProjects([...filteredProjects, data])
		} catch (error) {
			console.log(error)
		}
	}

	const deleteProject = async (projectId: number) => {
		try {
			const token = localStorage.getItem("@TOKEN")
			await api.delete(`/projects/${projectId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			setProjects((prevProjects) =>
				prevProjects.filter((project) => project.id !== projectId)
			)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<ProjectContext.Provider
			value={{
				projects,
				fetchProjects,
				createProject,
				updateProject,
				deleteProject,
			}}
		>
			{children}
		</ProjectContext.Provider>
	)
}
