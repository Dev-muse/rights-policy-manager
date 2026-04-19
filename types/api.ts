export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  cursor: string | null
  hasMore: boolean
}

export interface PaginationParams {
  cursor?: string
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}