import type { RootState } from "@/app/providers/store"
import { ProjectItem } from "@/entities/project/model/types"

export const selectUser = (state: RootState) => state.user.currentUser
export const selectUserAchievements = (state: RootState) => state.user.currentUser?.achievements || []
export const selectUserTransactions = (state: RootState) => state.user.currentUser?.transactions || []
export const selectUserBackedProjects = (state: RootState) => {
  const backedProjectIds = state.user.currentUser?.backedProjects || []
  return state.projects.items.filter((project: ProjectItem) => backedProjectIds.includes(project.id))
}
