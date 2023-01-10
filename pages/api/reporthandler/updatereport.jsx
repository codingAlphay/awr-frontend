import { prisma } from "../../../lib/prisma"

export default async function handle(req, res) {
    const body = JSON.parse(req.body)
    const now = new Date()
    const updateReport = await prisma.reports.update({
        where: {
          id: body.id,
        },
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
            car_year: body.car_year,
            car_km: body.car_km,
            result_before: body.result_before,
            result_after: body.result_after,
            recommendation: body.recommendation,
            cleaned_on_month: body.cleaned_on_month,
            cleaned_on_year: body.cleaned_on_year,
            month: body.month,
            year: body.year,
            pf_cleaning: body.pf_cleaning,
            ev_cleaning: body.ev_cleaning,
            pf_change: body.pf_change,
            created_user_id: body.created_user_id,
            created_on: body.created_on,
            last_modified: now.toISOString()
        },
      })
  res.json(updateReport)
}