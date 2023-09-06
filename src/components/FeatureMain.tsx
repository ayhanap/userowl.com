type Props = {};

import {
  ArrowsPointingInIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  SwatchIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Engage customers.',
    description: 'Make your customers an extension of your team.',
    icon: UsersIcon,
  },
  {
    name: 'Annotate screen.',
    description:
      'Your users can annotate screen to mark issues directly in your website without needing any other tool.',
    icon: ArrowsPointingInIcon,
  },
  {
    name: 'No Code.',
    description:
      'Effortlessly install the feedback widget once and manage all configurations through the Userowl dashboard.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Branding.',
    description: 'Personalize the widget to match your brand and specific requirements.',
    icon: SwatchIcon,
  },
  {
    name: 'Capture all the data.',
    description:
      'Essential data, including session info, user info, console logs, network logs, and more, is automatically attached to the feedback.',
    icon: ClipboardDocumentListIcon,
  },
  // {
  //   name: 'Database backups.',
  //   description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
  //   icon: ServerIcon,
  // },
];

const FeatureMain = (props: Props) => {
  return (
    <section
      id="feature-main"
      aria-label="Features for collecting feedback in your application"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Feedback widget</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Collect Feedback In Your Application
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With the help of the powerful feedback widget, Userowl lets you collect feedback, bugs
            or feature requests directly from your website or app.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FeatureMain;
