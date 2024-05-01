'use client'
import { useState } from 'react'
import BusinessPlan from './BusinessPlan'
import PlanHeader from './PlanHeader'
import BusinessPlanForm from './BusinessPlanForm'

export default function BusinessPlanner({ baseUrl }) {
  const [data, setData] = useState({})
  const [form, setForm] = useState(true)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    overview: '',
    marketing: '',
    competion: '',
    finance: ''
  })

  const onCreate = () => {
    setForm(true)
    setData({})
  }
  const onGenerate = async (e) => {
    setLoading(true)
    try {
      const response = await fetch(`${baseUrl}/api/bplan`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json()
      console.log(data)
      setData(data)
      setForm(false)
      setFormData({})
      setLoading(false)
    } catch (error) {
      alert(error)
      setLoading(false)
    }

  }
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sendPrompt = () => { }
  return (
    <main className="bg-slate-50">
      <PlanHeader form={form} onCreate={onCreate} />

      {loading ? (
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-bar-value"></div>
          </div>
        </div>
      ) : (
        form ? <BusinessPlanForm formData={formData} onChange={onChange} onGenerate={onGenerate} /> : (<BusinessPlan data={data} />)
      )}
    </main>
  )
}
