/* eslint-disable react/prop-types */
const Resume = ({ formData }) => {
  const Personal = () => {
    return (
      <div
        id='personalContainer'
        className='flex justify-between py-4 px-8 text-gray-800 items-center'>
        <p>{formData.personal.phone}</p>
        <p>{formData.personal.email}</p>
        <p className='flex flex-wrap max-w-[15ch]'>
          {formData.personal.address}
        </p>
      </div>
    )
  }

  const Education = () => {
    return (
      <div
        id='educationContainer'
        className='flex flex-wrap justify-between p-4 text-gray-800 items-center gap-y-4'>
        <p className='text-3xl text-emerald-950 text-center w-full'>
          Education
        </p>
        <div className='flex flex-wrap w-full justify-around gap-y-2'>
          <p className='text-xl text-cyan-800 font-bold w-full text-center'>
            {formData.education.school}
          </p>
          <p className='text-lg text-cyan-600 font-semibold flex items-center'>
            {formData.education.degree}
          </p>
          <div>
            <p>Major: {formData.education.major}</p>
            <p>GPA: {formData.education.gpa}</p>
            <p>Graduated {formData.education.graduated}</p>
          </div>
        </div>
      </div>
    )
  }

  const Experience = () => {
    return (
      <div
        id='experienceContainer'
        className='flex flex-wrap justify-between p-4 text-gray-800 items-center gap-y-4'>
        <p className='text-3xl text-emerald-950 text-center w-full'>
          Experience
        </p>
        {formData.experience.map((job) =>
          job.key == 0 ? (
            <div
              className='flex flex-wrap w-full justify-around gap-y-2'
              key={job.key}>
              <div className='flex justify-start gap-x-8 w-full'>
                <p className='text-xl text-cyan-800 font-bold text-center'>
                  {job.org}
                </p>
                <p className='text-lg text-cyan-600 font-semibold flex items-center'>
                  {job.role}
                </p>
              </div>
              <div className='flex justify-between w-full'>
                <p className='flex flex-wrap break-words max-w-[45ch]'>
                  {job.duty}
                </p>
                <p>
                  {job.from} - {job.to}
                </p>
              </div>
            </div>
          ) : (
            <div
              className='flex flex-wrap w-full justify-around gap-y-1'
              key={job.key}>
              <div className='flex justify-start gap-x-8 w-full'>
                <p className='text-lg text-zinc-800 font-bold text-center'>
                  {job.org}
                </p>
                <p className='text-md text-zinc-600 font-semibold flex items-center'>
                  {job.role}
                </p>
              </div>
              <div className='flex justify-between w-full'>
                <p className='flex flex-wrap break-words max-w-[45ch]'>
                  {job.duty}
                </p>
                <p>
                  {job.from} - {job.to}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    )
  }

  return (
    <section id='resume' className='flex bg-stone-300 max-w-fit rounded-xl'>
      <div
        id='resumeContainer'
        className='relative p-4 flex flex-col justify-between overflow-x-hidden min-w-[500px] w-fit'>
        <div className='bg-cyan-800 h-[5%] w-full rounded-tr-xl rounded-tl-xl'></div>
        <div className='wrapper h-[90%] bg-zinc-300 py-4'>
          <h1 className='w-full text-center text-3xl text-emerald-950'>
            {formData.personal.first} {formData.personal.last}
          </h1>
          <Personal />
          <div className='separator w-full h-[2.5%] bg-cyan-800'></div>
          <Education />
          <div className='separator w-full h-[2.5%] bg-cyan-800'></div>
          <Experience />
        </div>
        <div className='bg-cyan-800 h-[5%] w-full rounded-br-xl rounded-bl-xl'></div>
      </div>
    </section>
  )
}

export default Resume
