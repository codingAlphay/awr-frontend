import Head from 'next/head'
import ReportListElement from '../components/layout/ReportListElement'
import ReportTileElement from '../components/layout/ReportTileElement'
import { useState } from 'react'

export default function Archive({data}) {

  const [viewSetting, setView] = useState('list'); 

  return (
    <div>
      <Head>
        <title>AWR</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mt-20'></div>
      <div className='max-w-7xl w-full bg-lightgrey py-8 px-8 rounded-3xl mx-auto'>
        
        <h1>Report-Archiv</h1>

        <div className='flex gap-3 justify-end'>
          <div className={`hover:opacity-70 transition-all ${viewSetting == 'list' ? 'opacity-100' : 'opacity-25'}`} onClick={() => setView('list')}>
            <img src="./list-solid.svg" className='h-6 w-auto' alt="List" />
          </div>
          <div className={`hover:opacity-70 transition-all ${viewSetting == 'tile' ? 'opacity-100' : 'opacity-25'}`} onClick={() => setView('tile')}>
            <img src="./grid-solid.svg" className='h-6 w-auto' alt="Tile" />
          </div>
        </div>

        <div className=''>
          {data.map((report) => (
            <div className='modal-element' key={report.id} >
              {viewSetting === 'list' ? (
                <ReportListElement report={report}/>
              ) : (
                <ReportTileElement report={report}/>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from reports API
  const res = await fetch('http://localhost:3000/api/reports')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}