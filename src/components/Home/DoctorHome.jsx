import React from 'react';
import { doctors } from '../../constant';
import DoctorCard from '../cards/DoctorCard';
function DoctorHome() {
  return (
    <div>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} {...doctor} />
      ))}
    </div>
  );
}

export default DoctorHome;
