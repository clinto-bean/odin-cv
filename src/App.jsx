import { useState } from "react"
import "./App.css"
import Form from "./assets/components/Form"
import Resume from "./assets/components/Resume"

function App() {
  const defaultFormData = {
    personal: {
      first: "First",
      last: "Last",
      phone: "4054325432",
      email: "user@example.com",
      address: "77 Massachusetts St, Cambridge MA 02139",
    },
    education: {
      school: "Massachusetts Institute of Technology",
      degree: "Bachelor's of Science",
      major: "Computer Science",
      gpa: "4.0",
      graduated: "2018",
    },
    experience: [
      {
        key: 0,
        org: "Netflix",
        role: "Senior Software Engineer",
        duty: "Develop full-stack applications using ReactJS and Python",
        from: "2018",
        to: "Current",
      },
      {
        key: 1,
        org: "Facebook",
        role: "Senior Software Engineer",
        duty: "Develop full-stack applications using ReactJS and Python",
        from: "2018",
        to: "Current",
      },
    ],
  }

  const [formData, setFormData] = useState(defaultFormData)

  const handleInputChange = (e, category, field) => {
    setFormData((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: e.target.value,
      },
    }))
  }

  const addJob = () => {
    const newJob = {
      id: formData.experience.length,
      org: "",
      role: "",
      duty: "",
      from: "",
      to: "",
    }
    setFormData({
      ...formData,
      experience: [...formData.experience, newJob],
    })
  }

  const removeJob = (jobId) => {
    const updatedExperience = formData.experience.filter(
      (job) => job.id !== jobId
    )
    setFormData({
      ...formData,
      experience: updatedExperience,
    })
  }

  return (
    <main className='flex flex-col lg:flex-row lg:justify-around p-4 light:bg-red-200 dark:bg-gray-800 light:text-stone-700 dark:text-slate-400 h-screen max-w-screen overflow-x-hidden'>
      <Form
        formData={formData}
        handleInputChange={handleInputChange}
        addJob={addJob}
        removeJob={removeJob}
      />
      <Resume formData={formData} />
    </main>
  )
}

export default App
