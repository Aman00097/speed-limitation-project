import React, { useEffect, useState } from 'react'

export default function ({ dialogRef, data, id, setData }) {
    const [value, setValue] = useState()

    const close = () => dialogRef.current.close();

    const handleSave = () => {
        setData(data.map((ele) => {
            if (ele.id === id) { return { ...ele, value: Number(value) } } else { return { ...ele } }
        }))
        close()
    }

    useEffect(() => {
        setValue(data?.find((ele) => ele.id === id)?.value)
    }, [id])

    return (
        <dialog ref={dialogRef}>
            <section className='d-flex flex-column gap-3'>
                <input type="number" value={value} onChange={(e) => setValue(e.target.value)} className='w-100 px-2 py-1' />
                <div className='d-flex align-items-center justify-content-end gap-2'>
                    <button id='save' onClick={handleSave} className='btn btn-primary text-capitalize'>save</button>
                    <button id='cancel' onClick={close} className='btn btn-danger text-capitalize'>cancel</button>
                </div>
            </section>
        </dialog>
    )
}
