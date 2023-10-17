import { CallToAction } from '@/components/CallToAction';
import Faqs, { Faq } from '@/components/Faqs';
import FeatureWithScreenshotOnSide, {
  LearnMoreLink,
} from '@/components/FeatureWithScreenshotOnSide';
import Hero from '@/components/Hero';
import { InTextLink } from '@/components/InTextLink';

import screenshotFeedbackViewCondense from '@/images/screenshots/app.userowl.com_feedbacks.png';

import integrationLogosAnim from '@/images/illustrations/integrationLogosCircularAnim.svg';
import vd031 from '@/videos/VD-031-encoded-RF26.mp4';
import vd032 from '@/videos/VD-032-encoded-RF26.mp4';
import vd033 from '@/videos/VD-033-encoded-RF26.mp4';

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

export default function ProductManagement() {
  return (
    <>
      <Hero
        title="Build Features That Your Users Need"
        description="No more guessing what your users want. Hear from them directly, then make the changes they care about."
        ctaText="Start free trial"
        ctaHref="https://app.userowl.com/signup"
        noImage={true}
        isDark={false}
      />
      <FeatureWithScreenshotOnSide
        id="feedback-widget"
        ariaLabel="Features for capturing session information"
        title="Listen to Your Users"
        description="Userowl allows your users to effortlessly send feature requests and bug reports within your application. You possess all the tools to effectively manage it and guide your product development based on user needs."
        hashtag="Feedback widget"
        video={vd031}
        imageAlt="Image Alt"
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="prioritize-and-plan"
        ariaLabel="Features for associating your user information"
        title="Plan Your Roadmap"
        description="Prioritize what to build according to user insights and analytics. "
        hashtag="Prioritize and plan"
        video={vd033}
        imageAlt="Image Alt"
        imageOnLeft={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="merge"
        ariaLabel="Features for merging feedback"
        title="Merge and Track Similar Requests"
        description="Consolidate similar feature requests into one feedback and individually notify users once the feature is shipped."
        hashtag="Merge"
        image={screenshotFeedbackViewCondense}
        imageAlt="Image Alt"
        isDark={false}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="organize"
        ariaLabel="Features for organizing feature requests"
        title="Organize Feature Requests In Your Way"
        description="Manage feedback with the workflow that suits you. Tag and group the feature requests to match your product pipeline."
        hashtag="Organize"
        video={vd032}
        imageOnLeft={true}
        imageAlt="Image Alt"
        isDark={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="integrations"
        ariaLabel="Integration features"
        title="Use Your Existing Tools"
        description="Userowl integrates with the tools you already use for product management, customer support and communication. "
        hashtag="Integrations"
        svgImage={integrationLogosAnim}
        imageAlt="Image Alt"
        imageOnLeft={false}
        isDark={true}
      >
        <LearnMoreLink href="/features/integrations" />
      </FeatureWithScreenshotOnSide>
      <CallToAction />
      <Faqs faqs={faqs} isDark={true} />
    </>
  );
}
