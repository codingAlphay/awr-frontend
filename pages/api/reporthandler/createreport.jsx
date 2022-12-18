import { prisma } from "../../../lib/prisma"

export default async function handle(req, res) {
    const body = JSON.parse(req.body)
    const report = await prisma.reports.create({
        data: {  
            id: body.id,
            workshop_id: body.workshop_id,
            driver_first_name: body.driver_first_name,
            driver_last_name: body.driver_last_name,
            driver_street: body.driver_street,
            driver_zip: body.driver_zip,
            driver_city: body.driver_city,
            car_manufacturer: body.car_manufacturer,
            car_model: body.car_model,
            car_license: body.car_license,
            result_before: body.result_before,
            result_after: body.result_after,
            recommendation: body.recommendation,
            month: body.month,
            year: body.year,
            pf_cleaning: body.pf_cleaning,
            ev_cleaning: body.ev_cleaning,
            pf_change: body.pf_change,
            created_user_id: body.created_user_id,
            created_on: body.created_on,
            last_modified: body.last_modified
        },
    })
  res.json(report)
}