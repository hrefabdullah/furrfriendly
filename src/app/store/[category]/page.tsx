import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import StorePage from "../../components/StorePage"

interface PageProps {
  params: {
    category: string
  }
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <Navbar />
      <StorePage category={params.category} />
      <Footer />
    </div>
  )
}
