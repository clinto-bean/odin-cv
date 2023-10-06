/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const Form = ({ formData, handleInputChange, addJob, removeJob }) => {
  return (
    <section id='form' className='flex flex-col max-w-[50vw]'>
      <div className='inputs flex flex-col'>
        <p className='text-3xl font-bold'>Personal Information</p>
        <div className='full-input-wrapper'>
          <div className='flex justify-between w-full items-center py-2'>
            <label htmlFor='userFirst'>Name</label>
            <div className='justify-end gap-12 flex'>
              <input
                type='text'
                name='userFirst'
                placeholder={formData.personal.first}
                onChange={(e) => handleInputChange(e, "personal", "first")}
              />
              <input
                type='text'
                name='userLast'
                placeholder={formData.personal.last}
                onChange={(e) => handleInputChange(e, "personal", "last")}
              />
            </div>
          </div>
        </div>
        <div className='input-wrapper'>
          <label htmlFor='userPhone'>Phone</label>
          <input
            type='text'
            name='userPhone'
            placeholder={formData.personal.phone}
            onChange={(e) => handleInputChange(e, "personal", "phone")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='userEmail'>Email</label>
          <input
            type='text'
            name='userEmail'
            placeholder={formData.personal.email}
            onChange={(e) => handleInputChange(e, "personal", "email")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='userAddress'>Address</label>
          <input
            type='text'
            name='userAddress'
            placeholder={formData.personal.address}
            onChange={(e) => handleInputChange(e, "personal", "address")}
          />
        </div>
      </div>

      <div className='inputs flex flex-col'>
        <p className='text-3xl font-bold py-4 px-2'>Education</p>
        <div className='input-wrapper'>
          <label htmlFor='userSchool'>School</label>
          <input
            type='text'
            name='userSchool'
            placeholder={formData.education.school}
            onChange={(e) => handleInputChange(e, "education", "school")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='userDegree'>Degree</label>
          <input
            type='text'
            name='userDegree'
            placeholder={formData.education.degree}
            onChange={(e) => handleInputChange(e, "education", "degree")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='userMajor'>Major</label>
          <input
            type='text'
            name='userMajor'
            placeholder={formData.education.major}
            onChange={(e) => handleInputChange(e, "education", "major")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='userGpa'>GPA</label>
          <input
            type='text'
            name='userGpa'
            placeholder={formData.education.gpa}
            onChange={(e) => handleInputChange(e, "education", "gpa")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='userGraduated'>Graduated</label>
          <input
            type='text'
            name='userGraduated'
            placeholder={formData.education.graduated}
            onChange={(e) => handleInputChange(e, "education", "graduated")}
          />
        </div>
      </div>

      <div className='inputs flex flex-col'>
        <p className='text-3xl font-bold py-4 px-2'>Experience</p>
        <div className='input-wrapper'>
          <label htmlFor='org'>Company</label>
          <input
            type='text'
            name='org'
            placeholder={formData.experience[0].org}
            onChange={(e) => handleInputChange(e, "experience", "org")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='role'>Role</label>
          <input
            type='text'
            name='role'
            placeholder={formData.experience[0].role}
            onChange={(e) => handleInputChange(e, "experience", "role")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='duty'>Duties</label>
          <input
            type='text'
            name='duty'
            placeholder={formData.experience[0].duty}
            onChange={(e) => handleInputChange(e, "experience", "duty")}
          />
        </div>
        <div className='full-input-wrapper'>
          <div className='flex justify-between w-full items-center py-2'>
            <label htmlFor='from'>From/To</label>
            <div className='flex justify-end gap-12 w-1/2'>
              <input
                type='text'
                name='from'
                placeholder={formData.experience[0].from}
                onChange={(e) => handleInputChange(e, "experience", "from")}
              />
              <input
                type='text'
                name='to'
                placeholder={formData.experience[0].to}
                onChange={(e) => handleInputChange(e, "experience", "to")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
