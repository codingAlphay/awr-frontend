import ReportListElement from './views/ReportListElement'
import ReportListElementLegend from './views/ReportListElementLegend'
import ReportTileElement from './views/ReportTileElement'
import Title from '../../elements/Title'
import Icon from '../utils/Icon'
import { useState } from 'react'

export default function ArchiveModal({locale, data, setSingleReportData}) {
  const t = locale
  const [viewSetting, setView] = useState('list');
  const [dataSet, setData] = useState(data)
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='w-full max-w-5xl px-2 mx-auto'>
      <div className='px-4 pb-6 mx-2 md:px-16 pt-11 bg-lightgrey rounded-3xl'>
        {/* TITLE */}
        <Title value={'REPORT ARCHIV'} option={1} />

        {/* SEARCH-BAR */}
        <div className='flex items-center w-1/3 mt-12'>
          <div className="relative z-0 w-full group">
            <input
              onChange={e => { setSearchValue(e.currentTarget.value.toLocaleLowerCase()) }}
              type="text"
              name="search"
              id="search"
              className="block py-2.5 px-0 w-full text-sm text-darkblue bg-transparent border-0 border-b-2 border-green appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label htmlFor="search" className="absolute font-bold text-sm text-darkblue duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-darkblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t.search_placeholder}</label>
          </div>
          <div className='hover:fill-green'>
            <Icon type={'search'} />
          </div>
        </div>

        {/* ARCHIVE-TABLE */}
        <div className='flex justify-end gap-3'>
          <div className={`hover:opacity-70 transition-all ${viewSetting == 'list' ? 'opacity-100' : 'opacity-25'}`} onClick={() => setView('list')}>
            <img src="/list-solid.svg" className='w-auto h-6' alt="List" />
          </div>
          <div className={`hover:opacity-70 transition-all ${viewSetting == 'tile' ? 'opacity-100' : 'opacity-25'}`} onClick={() => setView('tile')}>
            <img src="/grid-solid.svg" className='w-auto h-6' alt="Tile" />
          </div>
        </div>

        {/* ARCHIVE-TABLE */}
        <div className={`mt-4 ${viewSetting == 'list' ? "" : "grid grid-cols-2 md:grid-cols-3 gap-4"}`}>
          {viewSetting == 'list' && <ReportListElementLegend locale={locale}/>}
          {dataSet.filter((report) => {
            const creation_date = new Date(report.created_on) // Save date as (Date) variable
            const creation_month = creation_date.getMonth() + 1 // Save month as variable and count +1 (0=jannuary)
            const final_creation_date = creation_date.getDate() + '.' + creation_month + '.' + creation_date.getFullYear() // Concat strings to get full date in european way
            const full_name = report.driver_first_name + " " + report.driver_last_name // Concat strings to get full name of owner
            const full_car = report.car_manufacturer + " " + report.car_model // Concat strings to get full name of owner
            return searchValue.toLocaleLowerCase() === "" ? report : (
              full_name.toLowerCase().includes(searchValue) ||
              report.car_license.toLowerCase().includes(searchValue) ||
              full_car.toLowerCase().includes(searchValue) ||
              final_creation_date.includes(searchValue))
          })
            .map((report) => (
              <div className='modal-element' key={report.id} >
                {viewSetting === 'list' ? (
                  <ReportListElement report={report} setSingleReportData={setSingleReportData} />
                ) : (
                  <ReportTileElement locale={locale} report={report} setSingleReportData={setSingleReportData} />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>

  )
}