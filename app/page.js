'use client'
import PlanHeader from './component/PlanHeader'
import { useState } from 'react'
import BusinessPlanForm from './component/BusinessPlanForm'
import BusinessPlan from './component/BusinessPlan'

export default function Home({ searchParams }) {
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
      const url = process.env.URL
      const response = await fetch(`${url}/api/bplan`, {
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
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-bar-value"></div>
          </div>
        </div>
      ) : (
        form ? <BusinessPlanForm formData={formData} onChange={onChange} onGenerate={onGenerate} /> : (<BusinessPlan data={data} />)
      )}
    </main>
  )
}
