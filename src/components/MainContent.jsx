import React, { useEffect, useRef, useState } from 'react'
import DialogBox from './DialogBox';
import svg from '../assets/icon.svg'

const initialData = [
    { id: 1, type: 'cityData', inEnglish: 'Roha', inHindi: 'रोहा', distance: '00.00', isUpward: true },
    { id: 2, type: 'numberField', value: '0' },
    { id: 3, type: 'numberField', value: '0' },
    { id: 4, type: 'numberField', value: '0' },
    { id: 5, type: 'numberField', value: '0' },
    { id: 6, type: 'cityData', inEnglish: 'Kolad', inHindi: 'कोलाड', distance: '12.916', isUpward: true },
    { id: 7, type: 'numberField', value: '0' },
    { id: 8, type: 'numberField', value: '0' },
    { id: 9, type: 'numberField', value: '0' },
    { id: 10, type: 'numberField', value: '0' },
    { id: 11, type: 'cityData', inEnglish: 'Indapur', inHindi: 'इंदापुर', distance: '23.725', isUpward: true },
    { id: 12, type: 'numberField', value: '0' },
    { id: 13, type: 'numberField', value: '0' },
    { id: 14, type: 'numberField', value: '0' },
    { id: 15, type: 'numberField', value: '0' },
    { id: 16, type: 'cityData', inEnglish: 'Mangaon', inHindi: 'मनगांव', distance: '30.300', isUpward: true },
    { id: 17, type: 'numberField', value: '0' },
    { id: 18, type: 'numberField', value: '0' },
    { id: 19, type: 'numberField', value: '0' },
    { id: 20, type: 'numberField', value: '0' },
    { id: 21, type: 'cityData', inEnglish: 'Sape Wamane', inHindi: 'सापे वामने', distance: '55.350', isUpward: true },
    { id: 22, type: 'numberField', value: '0' },
    { id: 23, type: 'numberField', value: '0' },
    { id: 24, type: 'numberField', value: '0' },
    { id: 25, type: 'numberField', value: '0' },
    { id: 26, type: 'cityData', inEnglish: 'Karanjadi', inHindi: 'करंजाडी', distance: '62.785', isUpward: false },
    { id: 27, type: 'numberField', value: '0' },
    { id: 28, type: 'numberField', value: '0' },
    { id: 29, type: 'numberField', value: '0' },
    { id: 30, type: 'numberField', value: '0' },
    { id: 31, type: 'cityData', inEnglish: 'Vinhere', inHindi: 'विन्हेरे', distance: '72.900', isUpward: true },
    { id: 32, type: 'numberField', value: '0' },
    { id: 33, type: 'numberField', value: '0' },
    { id: 34, type: 'numberField', value: '0' },
    { id: 35, type: 'numberField', value: '0' },
    { id: 36, type: 'cityData', inEnglish: 'Diwankhavati', inHindi: 'दीवानखावती', distance: '80.585', isUpward: false },
    { id: 37, type: 'numberField', value: '0' },
    { id: 38, type: 'numberField', value: '0' },
    { id: 39, type: 'numberField', value: '0' },
    { id: 40, type: 'numberField', value: '0' },
    { id: 41, type: 'cityData', inEnglish: 'Kalambani Budruk', inHindi: 'कलंबनी बुद्रुक', distance: '90.800', isUpward: true },
    { id: 42, type: 'numberField', value: '0' },
    { id: 43, type: 'numberField', value: '0' },
    { id: 44, type: 'numberField', value: '0' },
    { id: 45, type: 'numberField', value: '0' },
    { id: 46, type: 'cityData', inEnglish: 'Khed', inHindi: 'खेड़', distance: '98.285', isUpward: false },
    { id: 47, type: 'numberField', value: '0' },
    { id: 48, type: 'numberField', value: '0' },
    { id: 49, type: 'numberField', value: '0' },
    { id: 50, type: 'numberField', value: '0' },
    { id: 51, type: 'cityData', inEnglish: 'Anjani', inHindi: 'अंजनी', distance: '111.690', isUpward: true },
    { id: 52, type: 'numberField', value: '0' },
    { id: 53, type: 'numberField', value: '0' },
    { id: 54, type: 'numberField', value: '0' },
    { id: 55, type: 'numberField', value: '0' },
    { id: 56, type: 'cityData', inEnglish: 'Chiplun', inHindi: 'चिपलुन', distance: '127.877', isUpward: false, mainPlace: true },
    { id: 57, type: 'numberField', value: '0' },
    { id: 58, type: 'numberField', value: '0' },
    { id: 59, type: 'numberField', value: '0' },
    { id: 60, type: 'numberField', value: '0' },
    { id: 61, type: 'cityData', inEnglish: 'Kamathe', inHindi: 'कामथे', distance: '137.646', isUpward: true },
    { id: 62, type: 'numberField', value: '0' },
    { id: 63, type: 'numberField', value: '0' },
    { id: 64, type: 'numberField', value: '0' },
    { id: 65, type: 'numberField', value: '0' },
    { id: 66, type: 'cityData', inEnglish: 'Sawarda', inHindi: 'सावरदा', distance: '146.302', isUpward: false },
    { id: 67, type: 'numberField', value: '0' },
    { id: 68, type: 'numberField', value: '0' },
    { id: 69, type: 'numberField', value: '0' },
    { id: 70, type: 'numberField', value: '0' },
    { id: 71, type: 'cityData', inEnglish: 'Aravali Road', inHindi: 'अरावली रोड', distance: '156.414', isUpward: true },
    { id: 72, type: 'numberField', value: '0' },
    { id: 73, type: 'numberField', value: '0' },
    { id: 74, type: 'numberField', value: '0' },
    { id: 75, type: 'numberField', value: '0' },
    { id: 76, type: 'cityData', inEnglish: 'Kadavai', inHindi: 'कडवाई', distance: '162.924', isUpward: false },
    { id: 77, type: 'numberField', value: '0' },
    { id: 78, type: 'numberField', value: '0' },
    { id: 79, type: 'numberField', value: '0' },
    { id: 80, type: 'numberField', value: '0' },
    { id: 81, type: 'cityData', inEnglish: 'Sangameshwar', inHindi: 'संगमेश्वर', distance: '170.285', isUpward: true },
    { id: 82, type: 'numberField', value: '0' },
    { id: 83, type: 'numberField', value: '0' },
    { id: 84, type: 'numberField', value: '0' },
    { id: 85, type: 'numberField', value: '0' },
    { id: 86, type: 'cityData', inEnglish: 'Ukshi', inHindi: 'उक्शी', distance: '183.962', isUpward: false },
    { id: 87, type: 'numberField', value: '0' },
    { id: 88, type: 'numberField', value: '0' },
    { id: 89, type: 'numberField', value: '0' },
    { id: 90, type: 'numberField', value: '0' },
    { id: 91, type: 'numberField', value: '0' },
    { id: 92, type: 'cityData', inEnglish: 'Bhoke', inHindi: 'भोके', distance: '196.482', isUpward: true },
    { id: 93, type: 'numberField', value: '0' },
    { id: 94, type: 'numberField', value: '0' },
    { id: 95, type: 'numberField', value: '0' },
    { id: 96, type: 'numberField', value: '0' },
    { id: 97, type: 'numberField', value: '0' },
    { id: 98, type: 'cityData', inEnglish: 'Ratnagiri', inHindi: 'रत्नागिरी', distance: '203.600', isUpward: false },
]

export default function MainContent() {
    const [width, setWidth] = useState('')
    const [data, setData] = useState(initialData)
    const [id, setId] = useState(null)
    const dialogRef = useRef(null);

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return (
        <>
            <main className='vh-100 d-flex align-items-center p-1' style={{ width: 'fit-content' }}>
                <section className={`d-flex align-items-center justify-content-start rounded-5 py-2 ${width > 5000 ? 'px-3' : 'px-5'}`} style={{ backgroundColor: '#bb1000' }}>
                    <div className='d-flex align-items-center justify-content-start gap-1'>
                        {data && data.map((ele) => {
                            if (ele.type === 'cityData') {
                                return <CityData key={ele.id} currentData={ele} />
                            } else {
                                return <NumberField key={ele.id} currentData={ele} setId={setId} dialogRef={dialogRef} width={width} />
                            }
                        })}
                    </div>
                </section>
            </main>
            <DialogBox dialogRef={dialogRef} data={data} id={id} setData={setData} />
        </>
    )
}

const CityData = ({ currentData }) => {
    return (
        <div style={{ width: '.2rem', position: 'relative', rotate: currentData?.isUpward ? '0deg' : '180deg' }}>
            <div style={{ position: 'absolute', bottom: '4rem', left: '-1rem', writingMode: 'vertical-rl', rotate: currentData?.isUpward ? '180deg' : '0deg' }}>
                <p className='d-flex align-items-center gap-1 m-0 p-0 text-nowrap'><span>{currentData?.inHindi}</span> | <span><strong>{currentData?.inEnglish}</strong></span></p>
                <p className={`m-0 p-0 text-${currentData?.isUpward ? 'start' : 'end'}`}>{`(${currentData?.distance})`}</p>
            </div>
            <div style={{
                width: '.2rem',
                height: '6rem',
                position: 'absolute',
                top: '-2.65rem',
                backgroundColor: '#ffff00'
            }}>
                <p
                    style={{
                        width: '.7rem',
                        height: '.7rem',
                        position: 'absolute',
                        top: '-.7rem',
                        left: '-.25rem',
                        border: '.2rem solid #ffff00',
                        borderRadius: '50%',
                    }}></p>
            </div>
        </div>
    )
}

const NumberField = ({ currentData, setId, dialogRef, width }) => (
    <button type='button'
        onClick={() => {
            setId(currentData.id);
            dialogRef.current.showModal();
        }}
        style={{
            minWidth: width > 5000 ? '1rem' : '2rem',
            minHeight: width > 5000 ? '1rem' : '2rem',
            outline: 'none',
            cursor: 'pointer',
            border: 'none',
            padding: width > 5000 ? '0 .1rem' : '0 .2rem',
            fontSize: width > 5000 ? '.5rem' : '',
        }}
    >{currentData.value}</button>
)
