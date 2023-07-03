import { MetaTags } from '@redwoodjs/web'
import BenefitsSection from 'src/components/Business/BenefitsSection/BenefitsSection'

const BusinessPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <MetaTags
        title="RedwoodJS: The App Framework for Startups"
        description="Grow from side project to startup with RedwoodJS. Combines React, GraphQL, and Prisma for a full-stack app framework."
        ogUrl="https://redwoodjs.com"
        ogContentUrl="https://redwoodjs.com/images/rw-og.png"
      />

      <div className="space-y-10 md:space-y-36">
        <BenefitsSection />
      </div>
    </>
  )
}

export default BusinessPage
