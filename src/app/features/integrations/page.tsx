import { CallToAction } from '@/components/CallToAction';
import Faqs, { Faq } from '@/components/Faqs';
import FeatureWithScreenshotOnSide, {
  LearnMoreLink,
} from '@/components/FeatureWithScreenshotOnSide';
import Hero from '@/components/Hero';
import { InTextLink } from '@/components/InTextLink';

import screenshotFeedbackViewCondense from '@/images/screenshots/app.userowl.com_feedbacks.png';
import screenshot from '@/images/screenshots/app.userowl.com_feedbacks_64ea2cb7472b5a16a6c35415(1920X1080@4x).png';
import screenshotFeedbackView from '@/images/screenshots/screenshot-feedback-view.png';

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
        sent. Learn more about teams{' '}
        <InTextLink href="/features/feedback-management">here</InTextLink>.
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
        email. Learn more about closing the feedback loop{' '}
        <InTextLink href="/features/feedback-management">here</InTextLink>.
      </>
    ),
  },
];

export default function Integrations() {
  return (
    <>
      <Hero
        title="Fits into your team's workflow"
        description="Userowl integrates with the tools you already use for product management, customer support and communication."
        ctaText="Start free trial"
        ctaHref="https://app.userowl.com/signup"
        image={screenshotFeedbackView}
        imageAlt="Image Alt"
        isDark={false}
      />
      <FeatureWithScreenshotOnSide
        id="two-way"
        ariaLabel="Features for two-way integrations"
        title="Stay in Sync"
        description="Sync feedback status and comments between Userowl and your project management tool. Let your feedback's status update when your dev team finishes development."
        hashtag="Two-way integrations"
        image={screenshotFeedbackView}
        imageAlt="Image Alt"
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="notifications"
        ariaLabel="Features for notifications"
        title="Stay Informed Using Your Tools"
        description="Receive feedback notifications on your team's favorite messaging tool."
        hashtag="Notifications"
        image={screenshot}
        imageAlt="Image Alt"
        imageOnLeft={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="automations"
        ariaLabel="Features for capturing console logs"
        title="Create Automations With 1000s of Tools."
        description="Connect your feedback pipeline to numerous applications using Zapier or integrate it with your custom pipeline using webhooks."
        hashtag="Automations"
        image={screenshotFeedbackViewCondense}
        imageAlt="Image Alt"
        isDark={false}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      {/* TODO:show all integrations */}
      <CallToAction />
      <Faqs faqs={faqs} isDark={false} />
    </>
  );
}
