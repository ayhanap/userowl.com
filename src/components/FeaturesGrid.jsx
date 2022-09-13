/* This example requires Tailwind CSS v2.0+ */
import {
  BugAntIcon,
  ChartPieIcon,
  ChatBubbleBottomCenterTextIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  RectangleGroupIcon
} from '@heroicons/react/24/outline'

// material-icons md-24

const features = [
  {
    name: 'Visual Bug Reporting',
    description: 'Let your users report bugs with annotated screenshots with no additional tool required.',
    icon: BugAntIcon,
  },
  {
    name: 'Feature Request',
    description: 'Get new feature ideas easily on any of your pages.',
    icon: LightBulbIcon,
  },
  {
    name: 'General Feedback',
    description: 'Measure your customer experience using any of the best practices like NPS, CSAT, CES and more..',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Public Roadmap',
    description: 'Publish your selected feature requests and bugs to your public dashboard so your other users can see what you are working on.',
    icon: RectangleGroupIcon,
  },
  // {
  //   name: 'Powerful API',
  //   description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //   icon: CogIcon,
  // },
  {
    name: 'Analytics',
    description: 'Powerful analytics to measure your CX and your progress on feature requests and bugs. Easily filter on product category, status or votes.',
    icon: ChartPieIcon,
  },
  {
    name: 'Integrations',
    description: 'Integrate easily with the project management tools you already use. ',
    icon: PuzzlePieceIcon,
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-indigo-600">Hear your users</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to gather feedback
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Easily include our little code snippet to your web app and all of your needs for gathering feedback is covered.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
