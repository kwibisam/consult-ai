import BusinessPlanner from "./component/business-planner"

export default function Home({ searchParams }) {  
  const baseUrl = process.env.BASE_URL
  return (
   <BusinessPlanner baseUrl={baseUrl}/>
  )
}
