import { prisma } from "../../../lib/prisma"

export default async function handle(req, res) {
    const body = req.body
    const deleteReport = await prisma.reports.delete({
        where: {
          id: body,
        },
      })
  res.json(deleteReport)
}