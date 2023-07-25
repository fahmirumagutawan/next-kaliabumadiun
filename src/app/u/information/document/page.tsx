import React from 'react'
import Breadcrumb from '@/component/base/Breadcrumb'
import Link from 'next/link'

const SOPPenyuratanPage = () => {
    return (
        <div className="px-[5.5rem] py-[2rem]">
            <Breadcrumb page={["Informasi", "SOP Penyuratan"]} />
            <h2 className="text-secondary900 text-4xl font-bold mb-[53px]">SOP Penyuratan</h2>
            <div className='text-lg'>
                <div className='flex flex-row w-full bg-secondary800 py-3 text-secondary50'>
                    <p className='w-[184px] px-6'>No</p>
                    <p className='flex-1 px-6'>Perihal</p>
                </div>
                {[1, 2, 3, 4, 5].map(data => (
                    <div className='flex flex-row w-full py-4 text-secondary800'>
                        <p className='w-[184px] px-6'>{data}</p>
                        <p className='flex-1 px-6'>Lorem ipsum</p>
                        <Link href={"https://www.youtube.com/"} target='_blank' className='px-6 text-secondary700 hover:text-blue-400'>Lihat</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SOPPenyuratanPage