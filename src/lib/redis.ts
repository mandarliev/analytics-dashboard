import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu2-smooth-moccasin-31454.upstash.io',
  token: process.env.REDIS_KEY!,
})
