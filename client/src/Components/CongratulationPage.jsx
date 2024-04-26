import React from 'react';
import congo from '../Assets/congo.png';
import Confetti from 'react-confetti';

const CongratulationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br flex flex-col justify-center items-center relative">
      {/* <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={300}
        recycle={false}
        style={{ position: 'absolute', top: 0, left: 0 }} */}
      {/* /> */}
      <h1 className=" font-bold  mb-8  text-black text-[100px]">Congratulations!</h1>
      <img src={congo} alt="Congratulations" className="w-[600px] mb-8  " />
      <p className=" text-gray-900 mb-12 relative text-6xl">You have Booked a Car  successfully 🎉🎉.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative mt-20"><a href="/signin/Home">Back to Home</a></button>
    </div>
  );
};

export default CongratulationPage;
