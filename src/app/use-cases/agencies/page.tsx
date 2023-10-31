import { CallToAction } from '@/components/CallToAction';
import Faqs, { Faq } from '@/components/Faqs';
import FeatureWithScreenshotOnSide, {
  LearnMoreLink,
} from '@/components/FeatureWithScreenshotOnSide';
import Hero from '@/components/Hero';
import { InTextLink } from '@/components/InTextLink';

import screenshot from '@/images/screenshots/app.userowl.com_feedbacks_64ea2cb7472b5a16a6c35415(1920X1080@4x).png';
import screenshotFeedbackView from '@/images/screenshots/screenshot-feedback-view.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agency Use Case',
};

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

export default function Agencies() {
  return (
    <>
      <Hero
        title="Streamline Feedback Process With Clients"
        description="Simplify and automate feedback collection and management with your clients and end users"
        ctaText="Start free trial"
        ctaHref="https://app.userowl.com/signup"
        image={screenshotFeedbackView}
        imageAlt="Image Alt"
        isDark={false}
      />
      <FeatureWithScreenshotOnSide
        id="feedback-widget"
        ariaLabel="Features for capturing session information"
        title="Give Power to Your Clients"
        description="The Userowl feedback widget allows your clients or their end-users to send bug reports or feature requests directly in their website. You'll receive beautifully annotated screenshots and all crucial technical information every time. "
        hashtag="Feedback widget"
        image={screenshotFeedbackView}
        imageAlt="Image Alt"
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="one-place"
        ariaLabel="Features to manage all your client work"
        title="One Place To Manage All Your Client Work"
        description="No more bloated inboxes with emails from your clients. You can create separate projects and manage all your feedback from your clients in Userowl. You can also invite your clients to view or collaborate, eliminating the need for sending spreadsheets back and forth."
        hashtag="The only tool you need"
        image={screenshot}
        imageAlt="Image Alt"
        imageOnLeft={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="integrations"
        ariaLabel="Annotated screenshot feature"
        title="Integrate Into Your Existing Processes"
        description="Userowl integrates with the tools you already use for product management, customer support, and communication."
        hashtag="Integrations"
        image={screenshot}
        imageAlt="Image Alt"
        imageOnLeft={false}
        isDark={false}
      >
        <LearnMoreLink href="/features/integrations" />
      </FeatureWithScreenshotOnSide>
      <CallToAction />
      <Faqs faqs={faqs} isDark={false} />
    </>
  );
}
