export type { Profile, ProfileScheme } from './model/types/profile'

export { profileActions, profileReducer } from './model/slice/profileSlice'

export { fetchProfileDataThunk } from './model/services/fetchProfileData/fetchProfileData'

export { default as ProfileCard } from './ui/ProfileCard/ProfileCard'
