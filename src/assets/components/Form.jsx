/* eslint-disable react/prop-types */

import { useState } from "react"

// eslint-disable-next-line no-unused-vars
const Form = ({ formData, setFormData, addJob, removeJob }) => {
  const [index, setIndex] = useState(0)
  const [editing, setEditing] = useState(false)

  const handleInputChange = (e, category, field) => {
    if (editing) {
      if (category === "experience") {
        const index = e.target.dataset.index
        setFormData((prevState) => {
          const updatedExperience = [...prevState[category]]
          updatedExperience[index][field] = e.target.value
          return {
            ...prevState,
            [category]: updatedExperience,
          }
        })
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [category]: {
            ...prevState[category],
            [field]: e.target.value,
          },
        }))
      }
    }
  }

  return (
    <section id='form' className='flex flex-col max-w-[50vw]'>
      <div className='p-4 inputs flex flex-col rounded-t-md bg-slate-800 border border-gray-600'>
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

      <div className='inputs flex flex-col p-4 bg-slate-800 border border-gray-600'>
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
      <div className='inputs flex flex-col p-4 bg-slate-800 border border-gray-600 rounded-b-md'>
        <p className='text-3xl font-bold py-4 px-2'>Experience</p>
        <div className='input-wrapper'>
          <label htmlFor='org'>Company</label>
          <input
            type='text'
            name='org'
            placeholder={formData.experience[index].org}
            data-index={index}
            onChange={(e) => handleInputChange(e, "experience", "org")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='role'>Role</label>
          <input
            type='text'
            name='role'
            placeholder={formData.experience[index].role}
            data-index={index}
            onChange={(e) => handleInputChange(e, "experience", "role")}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='duty'>Duties</label>
          <input
            type='text'
            name='duty'
            placeholder={formData.experience[index].duty}
            data-index={index}
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
                placeholder={formData.experience[index].from}
                data-index={index}
                onChange={(e) => handleInputChange(e, "experience", "from")}
              />
              <input
                type='text'
                name='to'
                placeholder={formData.experience[index].to}
                data-index={index}
                onChange={(e) => handleInputChange(e, "experience", "to")}
              />
            </div>
          </div>
        </div>
        <div className='full-input-wrapper'>
          <div className='flex py-4 gap-4 justify-between'>
            <button
              className='p-2 bg-gray-300 text-slate-700 font-bold rounded-sm'
              onClick={() => {
                if (index == 0) {
                  return setIndex(formData.experience.length - 1)
                }
                return setIndex(index - 1)
              }}>
              Previous
            </button>
            <button
              className='p-2 bg-gray-300 text-slate-700 font-bold rounded-sm'
              onClick={() => {
                if (index == formData.experience.length - 1) {
                  return setIndex(0)
                }
                return setIndex(index + 1)
              }}>
              Next
            </button>
          </div>
          <p className='font-extrabold text-sky-300 text-2xl'>{index + 1}</p>
          <div className='flex py-4 gap-4 justify-between'>
            <button
              className='p-2 bg-gray-300 text-slate-700 font-bold rounded-sm'
              onClick={() => addJob()}>
              Add
            </button>
            <button
              className='p-2 bg-gray-300 text-slate-700 font-bold rounded-sm'
              onClick={() => removeJob()}>
              Remove
            </button>
          </div>
          <button
            className='w-full p-4 bg-gray-300 rounded-md text-slate-700 font-bold'
            onClick={() => {
              console.log(editing)
              if (editing) {
                return setEditing(false)
              }
              return setEditing(true)
            }}>
            {!editing ? `Edit Resume` : `Stop Editing`}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Form
