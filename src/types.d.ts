// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiariesData {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoDiariesData = Pick<
// DiariesData,
// 'id' | 'date' | 'weather' | 'visibility'
// >

export type NonSensitiveInfoDiariesData = Omit<DiariesData, 'comment'>
export type NewDiaryEntry = Omit<DiariesData, 'id'>
