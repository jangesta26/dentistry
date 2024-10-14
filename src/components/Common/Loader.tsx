import React from 'react'
import style from './style.module.css'
const Loader = () => {
  return (
    <section className='flex items-center justify-center min-h-screen'>
        <div className={style.container}>
            <div className={style.content}>
            <div className={style.heart_rate}>
                <svg xmlSpace="preserve" viewBox="0 0 150 73" height="73px" width="150px" y="0px" x="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version='1.0'>
                <polyline points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,
            63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486" strokeMiterlimit={10} strokeWidth={3} stroke="#009B9E" fill="none" />
                </svg>
                <div className={style.fade_in}/>
                <div className={style.fade_out}/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Loader
