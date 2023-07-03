const benefitsData = [
  {
    title: 'Consolidated Toolchain',
    description:
      'RedwoodJS integrates various tools and technologies, saving time and effort in researching and configuring individual tools.',
  },
  // Add more benefits here
]

const BenefitsSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {benefitsData.map((benefit, index) => (
        <div key={index} className="rounded-lg bg-white p-6 shadow-md">
          {/* Add the icon here */}
          <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  )
}

export default BenefitsSection
