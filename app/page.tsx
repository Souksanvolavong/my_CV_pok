import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Head from "next/head";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Home() {
  return (
    <>
      <Head>
        <title>My CV</title>
      </Head>

      <main className="bg-gray-50 font-sans">
        <Navbar />

        {/* Profile */}
        <Section id="profile" title="Profile">
  <div className="min-h-screen flex justify-center bg-white rounded-2xl p-6">
    <div className="text-center">
      <div className="relative w-70 h-70 mb-4 mx-auto">
        <img
          src="/pppp.jpg"
          alt="profile"
          className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-md"
        />
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800">ສຸກສັນ ວໍລະວົງ</h2>
      <p className="text-xl text-blue-600 font-medium">Frontend</p>
      <p className="text-base text-gray-500 mt-2">📧 Email: Souksanvolavong@gmail.com</p>
      <p className="text-base text-gray-500 mb-6">📱 PhoneNumber: 020 56728069</p>

      {/* 🔧 Tech Stack Icons */}
      <div className="flex justify-center gap-6 mt-6 text-4xl text-gray-700">
        <FaHtml5 className="hover:text-orange-500 transition-transform duration-300 hover:scale-110" />
        <FaCss3Alt className="hover:text-blue-500 transition-transform duration-300 hover:scale-110" />
        <FaJs className="hover:text-yellow-400 transition-transform duration-300 hover:scale-110" />
        <FaReact className="hover:text-cyan-400 transition-transform duration-300 hover:scale-110" />
        <SiNextdotjs className="hover:text-black transition-transform duration-300 hover:scale-110" />
        <SiTailwindcss className="hover:text-sky-400 transition-transform duration-300 hover:scale-110" />
      </div>
    </div>
  </div>
</Section>

        {/* Skills */}
   <Section id="skills" title="Skills">
  <div className=" flex justify-around min-h-screen bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl p-10 shadow-lg">

    {/* แถวที่ 1 */}
    <div className="flex flex-col space-x-16 mb-8 gap-8 ">
      <div className="flex items-center space-x-3">
        <FaHtml5 className="text-orange-500 text-4xl" />
        <span className="text-xl font-semibold">HTML</span>
      </div>
      <div className="flex items-center space-x-3">
        <FaCss3Alt className="text-blue-500 text-4xl" />
        <span className="text-xl font-semibold">CSS</span>
      </div>
      <div className="flex items-center space-x-3">
        <FaJs className="text-yellow-400 text-4xl" />
        <span className="text-xl font-semibold">JavaScript</span>
      </div>
    </div>

    {/* แถวที่ 2 */}
    <div className="flex flex-col space-x-16 mb-8 gap-8 ">
      <div className="flex items-center space-x-3">
        <FaReact className="text-cyan-400 text-4xl" />
        <span className="text-xl font-semibold">React</span>
      </div>
      <div className="flex items-center space-x-3">
        <SiNextdotjs className="text-white text-4xl" />
        <span className="text-xl font-semibold">Next.js</span>
      </div>
    </div>

    {/* แถวที่ 3 */}
    <div className="flex flex-col space-x-16  gap-8">
      <div className="flex items-center space-x-3">
        <SiTailwindcss className="text-sky-400 text-4xl" />
        <span className="text-xl font-semibold">Tailwind CSS</span>
      </div>
    </div>
  </div>
</Section>



    <Section id="languages" title="Languages">
  <div className="min-h-screen bg-yellow-100 rounded-xl p-16 shadow-inner flex  justify-center">
    <div className="flex flex-row gap-20">
      {/* Lao */}
      <div className="flex flex-col items-center">
        <img
          src="https://flagcdn.com/w160/la.png"
          alt="Lao"
          className="w-40 h-auto rounded-lg shadow-lg"
        />
        <p className="mt-5 text-2xl font-bold text-gray-800">Lao</p>
        <p className="text-lg text-gray-600">Good</p>
      </div>

      {/* English */}
      <div className="flex flex-col items-center">
        <img
          src="https://flagcdn.com/w160/gb.png"
          alt="English"
          className="w-40 h-auto rounded-lg shadow-lg"
        />
        <p className="mt-5 text-2xl font-bold text-gray-800">English</p>
        <p className="text-lg text-gray-600">Moderate</p>
      </div>

      {/* Thai */}
      <div className="flex flex-col items-center">
        <img
          src="https://flagcdn.com/w160/th.png"
          alt="Thai"
          className="w-40 h-auto rounded-lg shadow-lg"
        />
        <p className="mt-5 text-2xl font-bold text-gray-800">Thai</p>
        <p className="text-lg text-gray-600">Good</p>
      </div>
    </div>
  </div>
</Section>


        
<Section id="experience" title="Experience">
  {/* <div className=" bg-blue-100 rounded-xl p-8 shadow-inner flex flex-col gap-6"> */}
 <div className="min-h-screen  bg-blue-100 flex flex-col rounded-xl shadow-lg p-6 gap-6">

    
    
 {/* Lover Cafe */}
<div className="flex items-center bg-white rounded-xl shadow-lg p-6 gap-6">
  <img
    src="/image.png"
    alt="Lover Cafe"
    className="w-32 h-32 object-cover rounded-lg"
  />
  <div>
    <h3 className="text-2xl font-semibold text-gray-800">Lover Cafe</h3>
    <p className="text-lg text-gray-600 mt-1">I ues to work at a Lover cafe</p>
    <p className="text-sm text-gray-500">2021 - 2022</p>
  </div>
</div>

    {/* Food Panda */}
    <div className="flex items-center bg-white rounded-xl shadow-lg p-6 gap-6">
      <img
        src="https://img.freepik.com/free-vector/food-delivery-courier-riding-scooter-cartoon_23-2148507164.jpg"
        alt="Food Panda"
        className="w-32 h-32 object-cover rounded-lg"
      />
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">Food Panda Rider</h3>
        <p className="text-lg text-gray-600 mt-1">Delivered food orders efficiently</p>
      </div>
    </div>

    {/* Grocery Store */}
    <div className="flex items-center bg-white rounded-xl shadow-lg p-6 gap-6">
      <img
        src="https://img.freepik.com/free-vector/retail-staff-working-supermarket_23-2148506825.jpg"
        alt="Grocery Store"
        className="w-32 h-32 object-cover rounded-lg"
      />
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">Grocery Store (Part-time)</h3>
        <p className="text-lg text-gray-600 mt-1">Handled shelf organization and customer service</p>
      </div>
    </div>

  </div>
</Section>


    {/* Hobbies */}
<Section id="hobbies" title="Hobbies">
  <div className="min-h-screen bg-green-100 rounded-2xl p-14 shadow-inner flex flex-wrap justify-center gap-10 text-center">

    {/* Play Guitar & Singing */}
    <div className="bg-white w-56 h-60 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform">
      <span className="text-7xl mb-4">🎸</span>
      <p className="text-xl font-semibold text-gray-800">Play Guitar</p>
      <p className="text-lg text-gray-600">Sing a Song 🎤</p>
    </div>

    {/* Sports */}
    <div className="bg-white w-56 h-60 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform">
      <span className="text-7xl mb-4">⚽🏐</span>
      <p className="text-xl font-semibold text-gray-800">Football</p>
      <p className="text-lg text-gray-600">Volleyball</p>
    </div>

    {/* Funny / Content Creator */}
    <div className="bg-white w-56 h-60 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform">
      <span className="text-7xl mb-4">😆📹</span>
      <p className="text-xl font-semibold text-gray-800">Funny</p>
      <p className="text-lg text-gray-600">Content Creator</p>
    </div>

  </div>
</Section>



 {/* Education */}
<Section id="education" title="Education">
  <div className="min-h-screen bg-purple-100 rounded-2xl p-10 shadow-inner flex flex-col items-center space-y-12">

    {/* โรงเรียนที่ 1 */}
    <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-8">
      <div className="w-52 h-52 rounded-xl overflow-hidden shadow-lg border-4 border-purple-300">
        <img 
          src="/ict.jpg" // 🔁 เปลี่ยนให้ตรงกับรูปโรงเรียนมัธยม
          alt="Institution"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-left space-y-2">
        <h3 className="text-xl font-bold text-purple-700">Institution of Information and Communication Technology</h3>
        <p className="text-lg text-gray-700">Bachelor degree- ICT</p>
        <p className="text-sm text-gray-500">Study 3 years</p>
      </div>
    </div>

    {/* โรงเรียนที่ 2 */}
    <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-8">
      <div className="w-52 h-52 rounded-xl overflow-hidden shadow-lg border-4 border-purple-300">
        <img 
          src="/laotop.jpg" // 🔁 เปลี่ยนให้ตรงกับรูป Lao Top College
          alt="Lao Top College"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-left space-y-2">
        <h3 className="text-xl font-bold text-purple-700">Lao Top College</h3>
        <p className="text-lg text-gray-700">Bachelor degree - English</p>
        <p className="text-sm text-gray-500">1 year</p>
      </div>
    </div>

  </div>
</Section>


      </main>
    </>
  );
}
