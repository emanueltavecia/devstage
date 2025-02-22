export interface InviteLinkInputProps {
  inviteLink: string
}

export interface InvitePageProps {
  params: Promise<{
    subscriberId: string
  }>
}

export interface StatsProps {
  subscriberId: string
}
