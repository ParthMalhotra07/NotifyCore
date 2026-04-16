import { env } from "hono/adapter"
import { jstack } from "jstack"
import { PrismaClient } from "@prisma/client"

interface Env {
  Bindings: { DATABASE_URL: string }
}

export const j = jstack.init<Env>()

// Instantiate PrismaClient once to avoid multiple instances in dev
const prisma = new PrismaClient()

/**
 * Injects database instance into all procedures
 *
 * @example
 * ```ts
 * publicProcedure.query(({ ctx }) => {
 *   const { db } = ctx
 *   return db.post.findMany()
 * })
 * ```
 */
export const databaseMiddleware = j.middleware(async ({ c, next }) => {
  return await next({ db: prisma })
})

/**
 * Public (unauthenticated) procedures
 *
 * This is the base piece you use to build new queries and mutations on your API.
 */
export const publicProcedure = j.procedure.use(databaseMiddleware)
