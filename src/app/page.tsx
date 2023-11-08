import { CallToAction } from '@/components/CallToAction';
import Faqs, { Faq } from '@/components/Faqs';
import FeatureMain from '@/components/FeatureMain';
import FeatureWithScreenshotOnSide, {
  FeatureList,
  LearnMoreLink,
} from '@/components/FeatureWithScreenshotOnSide';
import Hero from '@/components/Hero';
import { InTextLink } from '@/components/InTextLink';

import integrationLogosAnim from '@/images/illustrations/integrationLogosCircularAnim.svg';
import vd000hevc from '@/videos/VD-000-30fps-hevc-safari.mp4';
import vd000 from '@/videos/VD-000-RF38.webm';
import vd000_poster from '@/videos/VD-000-poster.png';

import vd002 from '@/videos/VD-002-zoom-encoded-RF26.mp4';
import vd003 from '@/videos/VD-003-encoded-RF22.mp4';
import vd004 from '@/videos/VD-004-encoded-RF22.mp4';

import { Feature } from '@/types/feature';

import {
  AdjustmentsHorizontalIcon,
  ArrowsPointingInIcon,
  ArrowsRightLeftIcon,
  BellAlertIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  CogIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CubeTransparentIcon,
  LinkIcon,
  MapIcon,
  PhotoIcon,
  SwatchIcon,
  TagIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import clsx from 'clsx';

const feedbackWidgetFeatures: Feature[] = [
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
];

const bugTrackingFeatures: Feature[] = [
  {
    name: 'Session Information.',
    description: 'Each feedback contains session details such as URL, OS, and browser, etc.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'User Information.',
    description:
      'You can identify your users to let feedbacks also include essential user details so you can contact them or prioritize feedback accordingly.',
    icon: UserIcon,
  },
  {
    name: 'Console Logs.',
    description: 'Console errors and logs are automatically captured and included.',
    icon: CommandLineIcon,
  },
  {
    name: 'Annotated Screenshots.',
    description:
      'Your users can mark application issues using a user-friendly screen annotation tool, or you can opt for automatic screenshot inclusion with each feedback.',
    icon: PhotoIcon,
  },
];

const featureRequestManagementFeatures: Feature[] = [
  {
    name: 'Organize.',
    description:
      'Manage feedback with the workflow that suits you. Tag and group the feature requests to match your product pipeline.',
    icon: TagIcon,
  },
  {
    name: 'Prioritize and Plan.',
    description:
      'Prioritize what to build according to user insights and analytics. Plan your roadmap.',
    icon: MapIcon,
  },
  {
    name: 'Merge.',
    description:
      'Consolidate similar feature requests into one feedback and individually notify users once the feature is shipped.',
    icon: LinkIcon,
  },
];

const feedbackManagementFeatures: Feature[] = [
  {
    name: 'Teams.',
    description:
      'Invite your QA, support, product, dev teams, and even your clients. Your team has all the tools to manage and close the feedback loop.',
    icon: UserGroupIcon,
  },
  {
    name: 'Personalize.',
    description:
      'Whether you use Scrum, Kanban, Waterfall, or your custom workflow, Userowl allows you to customize your feedback workflow, aligning it with your team.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Omnichannel.',
    description:
      'With the help of the Userowl browser extension, collect feedback from social channels. Manage everything in one place.',
    icon: CubeTransparentIcon,
  },
];

const integrationFeatures: Feature[] = [
  {
    name: 'Two-way integrations.',
    description:
      "Sync feedback status and comments between Userowl and your project management tool. Keep your feedback's status up-to-date as soon as your development team progress through their work.",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: 'Notifications.',
    description: "Receive feedback notifications on your team's favorite messaging tool.",
    icon: BellAlertIcon,
  },
  {
    name: 'Automations.',
    description:
      'Connect your feedback pipeline to numerous applications using Zapier or integrate it with your custom pipeline using webhooks.',
    icon: CogIcon,
  },
];

const faqs: Faq[] = [
  {
    question: 'How does Userowl work?',
    answer:
      'You can add Userowl feedback widget to your website or application with just including a HTML script prepared for you. After this one time step, you can start recieving bug reports, feature requests or just general feedback from your site. You can full customize the look and feel of the widget at Userowl platform.',
  },
  {
    question: 'What does Userowl cost?',
    answerInHTML: (
      <>
        Userowl has different packages depending on your needs and team size. You can check them on{' '}
        <InTextLink href="/pricing">pricing</InTextLink> page. You can also{' '}
        <InTextLink href="https://app.userowl.com/signup">start 14-day free trial now</InTextLink>{' '}
        which includes all of the features.
      </>
    ),
  },
  {
    question: 'Can I use Userowl with my team or with clients?',
    answerInHTML: (
      <>
        Yes, after you complete your{' '}
        <InTextLink href="https://app.userowl.com/signup">sign up</InTextLink>, you can invite your
        members. You can also invite your clients so they can join conversation on feedbacks they
        sent. <InTextLink href="/features/feedback-management">Learn more about teams</InTextLink>.
      </>
    ),
  },
  {
    question: 'Can I reply to my users or leads after they leave a feedback?',
    answerInHTML: (
      <>
        You can reply to your customers in feedback view to clearify their feedback or once you
        resolved their issue. They will recieve your reply as an email. You can even have an email
        address field at your feedback form so visitors that are not your users can also leave their
        email. Learn more about{' '}
        <InTextLink href="/features/feedback-management">closing the feedback loop</InTextLink>.
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Effortless feedback collection, valuable insights"
        description="Userowl simplifies feedback collection and management for you and your users. You have
              all the data you need to resolve a bug or all the insights to decide the next feature
              to build that your users really need."
        ctaText="Start free trial"
        ctaHref="https://app.userowl.com/signup"
        imageAlt="Image Alt"
        video={vd000}
        learnMoreText="Learn more"
        learnMoreHref="#feedback-widget"
        isDark={false}
        sideBySide={true}
        noImage={true}
      >
        <>
          <div
            className={clsx(
              'mx-auto flex max-w-2xl sm:mt-24 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none',
              'mt-16 md:mt-24',
            )}
          >
            <div className={clsx('w-full max-w-full lg:w-[45rem] 2xl:w-[55rem]')}>
              {/* <Image
                src={screenshotFeedbackView}
                alt="Alt"
                className={clsx('aspect-[3/2] rounded-lg md:hidden')}
              /> */}
              <video
                autoPlay
                loop
                playsInline
                muted
                preload="auto"
                width={1284}
                height={856}
                className={clsx(
                  // 'hidden',
                  'relative left-1/2 right-1/2 -ml-[60vw] -mr-[40vw] aspect-[3/2] w-[120%] max-w-none rounded-lg sm:static sm:left-0 sm:right-0 sm:-ml-[10%] sm:mr-0 md:block lg:-ml-[5%] lg:w-full lg:max-w-full',
                )}
                poster={vd000_poster.src}
              >
                <source src={vd000hevc} type="video/mp4; codecs=hvc1" />
                <source src={vd000} type="video/webm" />
              </video>
            </div>
          </div>
        </>
      </Hero>
      <FeatureMain
        id="feedback-widget"
        ariaLabel="Features for collecting feedback in your application"
        title="Collect Feedback In Your Application"
        description="With the help of the powerful feedback widget, Userowl lets you collect feedback, bugs
              or feature requests directly from your website or app."
        imageAlt="Image Alt"
        hashtag="Feedback widget"
        features={feedbackWidgetFeatures}
        isDark={false}
      />
      <FeatureWithScreenshotOnSide
        id="bug-tracking"
        ariaLabel="Features for bug tracking"
        title="Resolve Bugs Faster"
        description="Reduce bug resolution times with visual bug reports that include session info, user data, and in-depth logs."
        hashtag="Bug tracking"
        imageAlt="Image Alt"
        video={vd002}
        hasSubFeatures={true}
      >
        <LearnMoreLink href="/features/bug-tracking" text="Discover bug tracking" />
        <FeatureList features={bugTrackingFeatures} />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="feature-request-management"
        ariaLabel="Features for feature request management"
        title="Prioritize changes that matter"
        description="No more guessing what your users want. Hear from them directly, then make the changes they care about."
        hashtag="Product decision"
        imageAlt="Image Alt"
        imageOnLeft={true}
        video={vd003}
        hasSubFeatures={true}
      >
        <LearnMoreLink
          href="/features/feature-request-management"
          text="Discover product decision"
        />
        <FeatureList features={featureRequestManagementFeatures} />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="feedback-management"
        ariaLabel="Features for feedback management"
        title="Centralize your feedback management"
        description="Userowl is the only tool you need to manage your feedback. Invite your team, connect your tools, and personalize according to your needs."
        hashtag="One tool"
        imageAlt="Image Alt"
        isDark={true}
        video={vd004}
        hasSubFeatures={true}
      >
        <LearnMoreLink href="/features/feedback-management" text="Discover feedback management" />
        <FeatureList features={feedbackManagementFeatures} />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="integrations"
        ariaLabel="Integration features"
        title="Fits into your team's workflow"
        description="Userowl integrates with the tools you already use for product management, customer support, and communication."
        hashtag="Integrations"
        svgImage={integrationLogosAnim}
        imageAlt="Image Alt"
        imageOnLeft={true}
        isDark={true}
        equalSizeImage={true}
        hasSubFeatures={true}
      >
        <LearnMoreLink href="/features/integrations" text="Discover integrations" />
        <FeatureList features={integrationFeatures} />
      </FeatureWithScreenshotOnSide>
      {/* <Feature3 /> */}
      {/* <Feature4 /> */}
      {/* <PrimaryFeatures />
        <SecondaryFeatures /> */}
      <CallToAction />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Faqs faqs={faqs} isDark={true} />
    </>
  );
}
