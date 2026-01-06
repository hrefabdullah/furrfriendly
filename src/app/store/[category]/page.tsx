import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import StorePage from "../../components/StorePage"

export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  return (
    <div>
      <Navbar />
      <StorePage category={params.category} />
      <Footer />
    </div>
  )
}
