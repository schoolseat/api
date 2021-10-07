declare namespace Express {
  interface Request {
    user: {
      _id: string
      password: string
      email: string
      name: string
      nickname?: string
      profilePic?: string
      bornDate: string
      bio: string
      stars: string
      level: string
      xp: string
      dev: boolean
      verified: boolean
    }
  }
}
