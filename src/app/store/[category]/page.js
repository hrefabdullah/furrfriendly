"use client"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import StorePage from "../../components/StorePage"
import { useParams } from "next/navigation"

export default function Page() {
  const { category } = useParams()

  return (
    <div>
      <Navbar />
      <StorePage category={category} />
      <Footer />
    </div>
  )
}
