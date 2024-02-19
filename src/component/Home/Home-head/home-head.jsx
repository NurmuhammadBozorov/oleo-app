import './home-head.css'
import NavbarHome from '../Navbar/navbar';
import Corousel from '../Corousel/corousel';
const HomeHead = () => {
  return (<>
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
      {/* Home-Head Corousel qismi */}
      <div>
        <Corousel/>
      </div>
    </>
  )
}

export default HomeHead
