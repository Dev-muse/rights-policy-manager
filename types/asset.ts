export type ContentType = 'sound_recording' | 'composition' | 'music_video' | 'podcast_episode'

export type ScanStatus = 'pending' | 'scanning' | 'matched' | 'no_match' | 'error'

export interface Asset {
  id: string
  externalId: string
  title: string
  artist: string
  contentType: ContentType
  duration: number
  releaseDate: string
  scanStatus: ScanStatus
  lastScannedAt: string | null
  policyCount: number
  disputeCount: number
  rightsHolderId: string
  rightsHolderName: string
  createdAt: string
  updatedAt: string
}