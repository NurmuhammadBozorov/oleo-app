import './home-head.css'
import NavbarHome from '../Navbar/navbar';
import Corousel from '../Corousel/corousel';
const HomeHead = () => {
  return (
    <>
      {/* Home-Head ni Navbar qismi */}
      <div>
        <NavbarHome/>
      </div>
      {/* Home-Head 1chi qism */}
      <div>
        <div className='home-head'>
          <div className='home-head-img'>
            <img className='home-head-img-2'  src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshadow.23b753be.png&w=3840&q=75" alt="" srcset="" />
          </div>
          <div className='home-head-text '>
            <img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbutter.bc7e7b89.png&w=3840&q=75" alt="" />
            <div className='home-head-text-2'>
              <h3>Oleo saryog’lari 200 gr</h3>
              <p>HAR QANDAY G'OYA UCHUN KO'P qirrali “oleo” saryog’lari</p>
              <div className='home-head-text-button'>
                <button class="btn_1 btn btn-danger">Batafsil</button>
                <button class="btn_2 btn btn-warning">Aloqa</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home-Head (2chi qism) Corousel qismi */}
      <div>
        <Corousel/>
      </div>
      {/* Home-Head 3chi qism */}
      <div>
        <div className='home-3'>
          <div className='home-3-main d-flex'>
            <div className='home-3-info '>
              <div className='home-3-info-text '>
                <h2>"Oleo" pishiriqlari</h2>
                <p>Oleo margarin va saryog’laridan tayyorlangan psihiriqlarimiz. Bizning Margarinlarimizdan tayyorlangan narsalarni retseptini koring</p>
                <div className='info-text-move d-flex'>
                  <svg width="80" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.2" cx="56.5" cy="56.5" r="56.5" transform="matrix(-1 0 0 1 113 0)" fill="#D72A33"></circle>
                    <path d="M32.3011 52.9084C30.1278 54.1459 30.1278 57.2398 32.3011 58.4773L67.7527 78.6644C69.926 79.902 72.6426 78.3551 72.6426 75.88L72.6426 35.5057C72.6426 33.0306 69.926 31.4837 67.7527 32.7213L32.3011 52.9084Z" fill="#D72A33"></path>
                  </svg>
                  <h5>Keyingi taom</h5>
                </div>
                <img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_7.dfb2768d.png&w=640&q=75" alt="" srcset="" />
              </div>
              
            </div>
            <div className='home-3-info-box d-flex'>
                <div className='info-box'style={{position:'relative'}} >
                  <img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.212b2072.png&w=3840&q=75" alt="" srcset="" />
                  <div className='info-box-text'>
                    <h5>Saryog'</h5>
                    <p>olio mazzali saryog'lari</p>
                    <p></p>
                  </div>
                </div>
                <div className='info-box'style={{position:'relative'}} >
                  <img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.212b2072.png&w=3840&q=75" alt="" srcset="" />
                  <div className='info-box-text'>
                    <h5>Saryog'</h5>
                    <p>olio mazzali saryog'lari</p>
                    <p></p>
                  </div>
                </div>
                <div className='info-box'style={{position:'relative'}} >
                  <img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.212b2072.png&w=3840&q=75" alt="" srcset="" />
                  <div className='info-box-text'>
                    <h5>Saryog'</h5>
                    <p>olio mazzali saryog'lari</p>
                    <p></p>
                  </div>
                </div>
                <div className='info-box' style={{position:'relative'}}>
                  <img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.212b2072.png&w=3840&q=75" alt="" srcset="" />
                  <div className='info-box-text'>
                    <h5>Saryog'</h5>
                    <p>olio mazzali saryog'lari</p>
                    <p></p>
                  </div>
                </div>
                {/* <div className='info-box' style={{position:'relative'}}>
                  <img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.212b2072.png&w=3840&q=75" alt="" srcset="" />
                  <div className='info-box-text'>
                    <h5>Saryog'</h5>
                    <p>olio mazzali saryog'lari</p>
                    <p></p>
                  </div>
                </div> */}
                {/* <div className='info-box' style={{position:'relative'}}>
                  <img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.212b2072.png&w=3840&q=75" alt="" srcset="" />
                  <div className='info-box-text'>
                    <h5>Saryog'</h5>
                    <p>olio mazzali saryog'lari</p>
                    <p></p>
                  </div>
                </div>
                <div className='info-box' style={{position:'relative'}}>
                  <img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.212b2072.png&w=3840&q=75" alt="" srcset="" />
                  <div className='info-box-text'>
                    <h5>Saryog'</h5>
                    <p>olio mazzali saryog'lari</p>
                    <p></p>
                  </div>
                </div>
                <div className='info-box' style={{position:'relative'}}>
                  <img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.212b2072.png&w=3840&q=75" alt="" srcset="" />
                  <div className='info-box-text'>
                    <h5>Saryog'</h5>
                    <p>olio mazzali saryog'lari</p>
                    <p></p>
                  </div>
                </div>
                <div className='info-box' style={{position:'relative'}}>
                  <img src="https://oleouz.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.212b2072.png&w=3840&q=75" alt="" srcset="" />
                  <div className='info-box-text'>
                    <h5>Saryog'</h5>
                    <p>olio mazzali saryog'lari</p>
                    <p></p>
                  </div>
                </div> */}

            </div>
          </div>
        </div>
      </div>
      {/* <div className='home-4'>

      </div> */}
    </>
  )
}

export default HomeHead;
