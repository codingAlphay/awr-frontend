import { prisma } from "../../../lib/prisma"

export default async function handle(req, res) {
    const body = req.body
    const deleteReport = await prisma.reports.update({
        where: {
          id: body,
        },
        data: {
          deleted: 'true'
        },
      })
  res.json(deleteReport)
}