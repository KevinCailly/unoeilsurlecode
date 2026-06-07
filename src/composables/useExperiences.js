import data from '@/experiences/experiences.json'

export function useExperiences() {
  const experiences = data.experiences ?? []
  return { experiences }
}