import React  from 'react'
import './corousel.css'
const Corousel = () => {
  return (
    <div className='carousel'>
        <div className='carousel-slide'>
            <div className='carousel-box'>
                <p>saryog</p>
                <img src='https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_1.8157f64b.png&w=1200&q=75' />
                <h5>shirin</h5>
                <p id='text-caraousel'></p>
            </div>
            <div className='carousel-box'>
                <p>saryog</p>
                <img src='https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_1.8157f64b.png&w=1200&q=75' />
                <h5>shirin</h5>
                <p id='text-caraousel'></p>
            </div>
            <div className='carousel-box'>
                <p>saryog</p>
                <img src='https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_1.8157f64b.png&w=1200&q=75' />
                <h5>shirin</h5>
                <p id='text-caraousel'></p>
            </div>
            <div className='carousel-box'>
                <p>saryog</p>
                <img src='https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_1.8157f64b.png&w=1200&q=75' />
                <h5>shirin</h5>
                <p id='text-caraousel'></p>
            </div>
            <div className='carousel-box'>
                <p>saryog</p>
                <img src='https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_1.8157f64b.png&w=1200&q=75' />
                <h5>shirin</h5>
                <p id='text-caraousel'></p>
            </div>
            <div className='carousel-box'>
                <p>saryog</p>
                <img src='https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_1.8157f64b.png&w=1200&q=75' />
                <h5>shirin</h5>
                <p id='text-caraousel'></p>
            </div>
            <div className='carousel-box'>
                <p>saryog</p>
                <img src='https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_1.8157f64b.png&w=1200&q=75' />
                <h5>shirin</h5>
                <p id='text-caraousel'></p>
            </div>
        </div>
        <div className='carousel-last container'>
            <div className='carousel-last-button justify-content-center d-flex'>
                <button id='right-btn' class="btn_5 btn btn-danger d-flex">
                    <svg id='right-svg' xmlns="http://www.w3.org/2000/svg"  width="35" height="35" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                    <p>Katologni ko'rish</p>
                </button>
                <button id='download-btn' class="btn_5 btn btn-light d-flex">
                    <svg id='download' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                    </svg>
                    <p >Katologni Yuklab olish</p>
                </button>
                <p className='carousel-last-button-p'>Katalogimizda barcha tovarlarimizni ko‘rishingiz mumkin</p>
                <div className='svg-caraousel'>
                    <svg id='left' xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                    </svg>
                    <svg id='right' xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Corousel
