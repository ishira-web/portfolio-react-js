import React from 'react'

function Personal() {
  return (
    <div className=' h-[100vh] w-auto font-Inter text-white'>
     
      <div className='justify-center '>
      <div className='mt-10 flex flex-row justify-center gap-32'>
        <div className='text-[16px] uppercase font-semibold text-blue-500 '>Background</div>
        <div className='w-[600px] flex flex-col gap-10'>
        <p className='subpixel-antialiased'>I'm an undergraduate software engineer at Upstatement, I recently earned a Higher Diploma from <a href="https://www.cardiffmet.ac.uk/Pages/default.aspx" className='font-medium' >Cardiff Metropolitan University,UK</a>, and adding to my Diploma in Information Technology from <a href="https://icbt.lk/" className='font-medium'>ICBT Campus</a>.</p>
        <p className='subpixel-antialiased'>As an undergraduate software engineering student, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.</p>
        <p className='subpixel-antialiased'><span className='font-medium'>When I'm not in front of a computer screen</span> , I'm probably Listning songs on <a href="https://open.spotify.com/" className='font-medium'>Spotify</a>, plaing cricket or Play videogames with my firends </p>
        </div>
      </div>
       

          <div className=" flex flex-row gap-[12rem] mt-20 justify-center">
          <h2 className="text-[16px] uppercase font-semibold ml-[-9rem] text-blue-500 mb-8">Skills</h2>
          <div className="flex flex-row gap-20">
  
            <div>
              <h3 className="font-semibold text-[16px] ">Languages</h3>
              <ul className=" list-inside mt-2 text-[15px] leading-relaxed">
                <li>JavaScript (ES6)</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
              </ul>
            </div>

      
            <div>
              <h3 className="font-semibold text-[16px]">Frameworks</h3>
              <ul className=" list-inside text-[15px] mt-2 leading-relaxed">
                <li>React</li>
                <li>Node</li>
                <li>WordPress</li>
              </ul>
            </div>


          
            <div>
              <h3 className="font-semibold text-[16px]">Design</h3>
              <ul className=" list-inside mt-2 text-[15px] leading-relaxed">
                <li>Prototyping</li>
                <li>Wireframing</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex gap-[9.8rem] max-w-[100rem] mt-20 mx-auto justify-center ml-[19rem] leading-loose">
                    <h1 className="text-blue-600 text-[16px] font-semibold mb-4 uppercase">Education</h1>
                    <div className="grid grid-cols-3 gap-4 ">
                        <div>
                            <p className=" text-[15px]  ">Bsc Computing and Software Engineering</p>
                            <p className='text-slate-500 text-[15px]'>Cardiff Metropolitan University, UK</p>
                        </div>
                        <div></div>
                        <div>
                            <p className='text-[15px]'> 2024 - Present</p>
                        </div>
                        
                        <div>
                            <p className=" text-[15px] ">Higher Diploma in Software Engineering</p>
                            <p className='text-slate-500 text-[15px]'>Cardiff Metropolitan University, UK</p>
                        </div>
                        <div></div>
                        <div>
                            <p className='text-[15px]'>2024</p>
                        </div>
                        <div>
                            <p className=" text-[15px] ">Diploma in Information Technology</p>
                            <p className='text-slate-500 text-[15px]'>ICBT Campus, Galle</p>
                        </div>
                        <div></div>
                        <div>
                            <p className='text-[15px]'>2022</p>
                        </div>
                        <div>
                            <p className=" text-[15px]">Advance Level</p>
                            <p  className='text-slate-500 text-[15px]'>Vidyarathna University Collage , Horana</p>
                        </div>
                        <div></div>
                        <div>
                            <p className='text-[15px]'>2020</p>
                        </div>
                    </div>
                </div>

      </div>
      </div>
    
  )
}

export default Personal