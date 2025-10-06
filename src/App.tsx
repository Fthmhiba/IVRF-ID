import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './home/homepage';
import Aboutpage from './about/aboutpage';
import './App.css';
import Contactus from './contactus/contactus';
import RFIDTags from './products/RFID_Tags';
import RFIDUHFHardwares from './products/RFID_UHF_Hardwares';
import C72Handheld from './products/RFID Handheld Readers/C72_Handheld';
import MC62 from './products/RFID Handheld Readers/MC62';
import MC50 from './products/RFID Handheld Readers/MC50';
import RFIDFixedReaders from './products/RFID Handheld Readers/RFID_Fixed_Readers';
import RFIDAntennas from './products/RFID Handheld Readers/RFID_Antennas';
import TGH210 from './products/RFID_LOCKS/TG_H210';
import TGH232 from './products/RFID_LOCKS/TG_H232';
import TGH245 from './products/RFID_LOCKS/TG_H245';
import TGS07 from './products/RFID_LOCKS/TG_S07';
import TGS01 from './products/RFID_LOCKS/TG_S01';
import TGC12 from './products/Digital_Locker_Locks/TG_C12';
import TGC62 from './products/Digital_Locker_Locks/TG_C62';
import TGC90 from './products/Digital_Locker_Locks/TG_C90';
import TGC81 from './products/Digital_Locker_Locks/TG_C81';
import AccessControlAccessories from './products/Access_Control_Accessories';
import RFIDCards from './products/RFID_Cards';
import RFIDSOLUTIONS from './Solutions/RFID_SOLUTIONS';
import BLETrackingSolutions from './Solutions/BLE_Tracking_Solutions';
import RFIDHotelLockingSolutions from './Solutions/RFID_Hotel_Locking_Solutions';
import RFIDDISPLAYCASELOCKINGSOLUTIONS from './Solutions/RFID_DISPLAY_CASE_LOCKING_SOLUTIONS';
import AccessControlSolutions from './Solutions/Access_Control_Solutions';
import DigitalLockerLocks from './products/Digital_Locker_Locks';
import TGC16 from './products/Digital_Locker_Locks/TG_C16';
import DigitalSafes from './products/Digital_Safes';
import HomeSafes from './products/Digital_Safes/Home_Safes';
import DepositGradedSafes from './products/Digital_Safes/Deposit_Graded_Safes';
import HotelSafes from './products/Digital_Safes/Hotel_Safes';
import TGS08 from './products/RFID_LOCKS/TG_S08';
import TGS04 from './products/RFID_LOCKS/TG-S04';
import GM1000BK from './products/RFID_LOCKS/GM_1000BK';
import GP6000BAK from './products/RFID_LOCKS/GP-6000BAK';
import GR60B from './products/RFID_LOCKS/GR-60B';
import DIGITALLOCKINGSOLUTIONS from './Solutions/DIGITAL_LOCKING_SOLUTIONS';
import RFIDLocks from './products/RFID_Locks';
import Blog from './blog/Blog';
import BlogDetail from './blog/BlogDetail';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route path="/contact" element={<Contactus />} />
          <Route path="products/RFID_Tags" element={<RFIDTags />} />
          <Route path="products/RFID_UHF_Hardwares" element={<RFIDUHFHardwares />} />
          <Route path="products/RFID_UHF_Hardwares/C72_Handheld" element={<C72Handheld />} />
          <Route path="products/RFID_UHF_Hardwares/MC62" element={<MC62 />} />
          <Route path="products/RFID_UHF_Hardwares/MC50" element={<MC50 />} />
          <Route path="products/RFID_UHF_Hardwares/RFID_Fixed_Readers" element={<RFIDFixedReaders />} />
          <Route path="products/RFID_UHF_Hardwares/RFID_Antennas" element={<RFIDAntennas />} />
          <Route path="products/RFID_Locks" element={<RFIDLocks />} />
          <Route path="products/RFID_Locks/TG_H210" element={<TGH210 />} />
          <Route path="products/RFID_Locks/TG_H232" element={<TGH232 />} />
          <Route path="products/RFID_Locks/TG_H245" element={<TGH245 />} />
          <Route path="products/RFID_Locks/TG_S07" element={<TGS07 />} />
          <Route path="products/RFID_Locks/TG_S08" element={<TGS08 />} />
          <Route path="products/RFID_Locks/TG_S01" element={<TGS01 />} />
          <Route path="products/RFID_Locks/TG_S04" element={<TGS04 />} />
          <Route path="products/RFID_Locks/GM_1000BK" element={<GM1000BK />} />
          <Route path="products/RFID_Locks/GP_6000BAK" element={<GP6000BAK />} />
          <Route path="products/RFID_Locks/GR_60B" element={<GR60B />} />
          <Route path="products/Digital_Locker_Locks" element={<DigitalLockerLocks />} />
          <Route path="products/Digital_Locker_Locks/TG_C12" element={<TGC12 />} />
          <Route path="products/Digital_Locker_Locks/TG_C62" element={<TGC62 />} />
          <Route path="products/Digital_Locker_Locks/TG_C90" element={<TGC90 />} />
          <Route path="products/Digital_Locker_Locks/TG_C81" element={<TGC81 />} />
          <Route path="products/Digital_Locker_Locks/TG_C16" element={<TGC16 />} />
          <Route path="products/Digital_Safes" element={<DigitalSafes />} />
          <Route path="products/Digital_Safes/Home_Safes" element={<HomeSafes />} />
          <Route path="products/Digital_Safes/Deposit_Graded_Safes" element={<DepositGradedSafes />} />
          <Route path="products/Digital_Safes/Hotel_Safes" element={<HotelSafes />} />
          <Route path="products/Access_Control_Accessories" element={<AccessControlAccessories />} />
          <Route path="products/RFID_Cards" element={<RFIDCards />} />
          <Route path="solutions/RFID_SOLUTIONS" element={<RFIDSOLUTIONS />} />
          <Route path="solutions/BLE_Tracking_Solutions" element={<BLETrackingSolutions />} />
          <Route path="solutions/RFID_Hotel_Locking_Solutions" element={<RFIDHotelLockingSolutions />} />
          <Route path="solutions/RFID_DISPLAY_CASE_LOCKING_SOLUTIONS" element={<RFIDDISPLAYCASELOCKINGSOLUTIONS />} />
          <Route path="solutions/DIGITAL_LOCKING_SOLUTIONS" element={<DIGITALLOCKINGSOLUTIONS />} />
          <Route path="solutions/Access_Control_Solutions" element={<AccessControlSolutions />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;