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
        role: "Backend Engineer",
        duty: "Used Python to create backend systems",
        from: "2017",
        to: "2018",
      },
    ],
  }

  const [formData, setFormData] = useState(defaultFormData)

  const addJob = () => {
    console.log(formData.experience)
    const newJob = {
      key: formData.experience.length,
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

  const removeJob = (index) => {
    const updatedExperience = formData.experience.filter(
      (job) => job.key !== index
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
        setFormData={setFormData}
        addJob={addJob}
        removeJob={removeJob}
      />
      <Resume formData={formData} />
    </main>
  )
}

export default App
