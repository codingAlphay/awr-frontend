import { prisma } from "../../../lib/prisma"

export default async function handle(req, res) {
    const body = req.body
    const includeDeleted = body == 'true' ? true : false

    const allReports = await prisma.reports.findMany()
    const reports = await prisma.reports.findMany({
        where: {
          deleted: {
            equals: null
          },
        },
      })
    if(includeDeleted == true) {
        res.json(allReports)
    } else {
        res.json(reports)
    }
}