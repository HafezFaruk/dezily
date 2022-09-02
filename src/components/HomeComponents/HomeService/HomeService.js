import React from "react";

export default function HomeService() {
  return (
    <div>
      <div className="grid grid-rows  grid-flow-col  gap-6">
        <div className="bg-">
          <div>
            <img src="https://i.ibb.co/FKrF5jk/heart.png" alt="heart" />
          </div>
          <div>
            <h2>Personalized Healthcare</h2>
            <p>You can call ohiical team if your child, teenager or...</p>
          </div>
        </div>
        <div className="bg-white">
          <div>
            <img
              src="https://i.ibb.co/gVqg24m/defibrillator.png"
              alt="doctor"
            />
          </div>
          <div>
            <h2 className="text-dark-blue">fessional Team</h2>
            <p>
              Detects the presence or absence of flow into blood vessels via the
              skin...
            </p>
          </div>
        </div>
        <div className="bg-white">
          <div>
            <img  src="https://i.ibb.co/SJHchgB/doctor.png" alt="" />
          </div>
          <div>
            <h2 className="text-dark-blue">Regularly Checkup</h2>
            <p>Device provides continuous recording of electrical...</p>
          </div>
        </div>
        <div className="bg-white">
          <div>
            <img src="https://i.ibb.co/jVCFDQ7/cardiology.png" alt="" />
          </div>
          <div>
            <h2 className="text-dark-blue">Nuclear Stress Testing</h2>
            <p>Treatment of congenital heart defects, disease and...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
