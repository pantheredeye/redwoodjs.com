const benefitsData = [
  {
    title: 'Consolidated Toolchain',
    description:
      'RedwoodJS integrates various tools and technologies, saving time and effort in researching and configuring individual tools.',
  },
  {
    title: 'Opinionated Architecture',
    description:
      'RedwoodJS provides a predefined structure and best practices, eliminating the need for complex technical decisions and allowing focus on implementing specific features.',
  },
  {
    title: 'Automatic Code Generation',
    description:
      'RedwoodJS generates boilerplate code and common components based on requirements, reducing manual coding and ensuring consistency.',
  },
  {
    title: 'Built-in Features and Integrations',
    description:
      'RedwoodJS includes ready-to-use features like authentication and integrates well with other business tools, simplifying development and connectivity.',
  },
  {
    title: 'Simplified Development',
    description:
      'RedwoodJS streamlines the toolchain, enabling businesses to focus on delivering value to customers.',
  },
  {
    title: 'Scalable and Performant',
    description:
      'RedwoodJS handles increased user loads, ensuring a reliable and responsive application.',
  },
  {
    title: 'Guided Solutions',
    description:
      'RedwoodJS supports non-tech businesses with guidance and support throughout the development process.',
  },
  {
    title: 'Time and Cost Savings',
    description:
      "RedwoodJS's efficiency and automatic code generation capabilities save valuable time and resources.",
  },
  {
    title: 'Rapid Development',
    description:
      'RedwoodJS enables quick building and iteration of business models with its streamlined development experience.',
  },
  {
    title: 'Scalability and Performance',
    description:
      'RedwoodJS efficiently handles scalable applications, accommodating growth and maintaining performance.',
  },
  {
    title: 'Flexibility for Iteration',
    description:
      'RedwoodJS modular architecture allows for easier updates and modifications to adapt to evolving business needs.',
  },
  {
    title: 'Integration with Business Tools',
    description:
      'RedwoodJS integrates well with other essential business tools, aligning the application with the necessary supporting infrastructure.',
  },
  {
    title: 'Collaboration between Designers and Developers',
    description:
      'RedwoodJS includes Storybook integration, allowing designers to see their designs come to life, use mock data, and ship the data model to the backend team with Prisma and GraphQL queries.',
  },
  {
    title: 'Reduced Maintenance Burden',
    description:
      'RedwoodJS provides framework upgrade pathways, eliminating the need to manage the plumbing and reducing maintenance burden.',
  },
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
