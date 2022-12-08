import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const posts = await prisma.reports.findMany()
    res.json(posts)
}