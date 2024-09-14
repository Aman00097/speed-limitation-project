import React from 'react'

const index = [
    { id: 1, color: 'purple' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'red' },
    { id: 4, color: 'green' }
]

export default function Footer() {
    return (
        <footer className='w-100 position-absolute bottom-0 d-flex align-items-center justify-content-end p-2'>
            <div className='p-3 rounded-1' style={{ backgroundColor: 'gold', maxWidth: '21rem' }}>
                <h4 className='mb-2'>Index</h4>
                <ul className='d-flex align-items-center justify-content-between flex-wrap gap-1 m-0 p-0' style={{ fontSize: '1rem' }}>
                    {index && index.map(ele => (<li key={ele?.id} className='d-flex align-items-center justify-content-center gap-1'>
                        <div style={{
                            width: '.7rem', height: '.7rem', borderRadius: '50%', backgroundColor: ele?.color
                        }}></div>
                        <div>--- Placeholder ---</div>
                    </li>))}
                </ul>
            </div>
        </footer>
    )
}
