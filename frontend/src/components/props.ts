import type { Protocol } from '@/consts'

export interface NcProtocolProps {
  protocol: Protocol | null
  rawPacket: string | null
}
export interface NcProtocolFormProps {}
export interface NcIpProps {
  rawPacket: string | null
}
export interface NcTcpProps {
  rawPacket: string | null
}
export interface NcUdpProps {
  rawPacket: string | null
}
