export type Id = number

export interface IDataField {
  id: Id
  slug: string
  label: string
}

export interface DataState {
  isLoading: boolean
  error?: string
}
