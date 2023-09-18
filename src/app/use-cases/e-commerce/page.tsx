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

export default function ECommerce() {
  return (
    <>
      <Hero
        title="Keep Your Store Working"
        description="Angry or confused customers will make you lose sales. Get visual insights directly from your customers to improve their online shopping experience."
        ctaText="Start free trial"
        ctaHref="https://app.userowl.com/signup"
        image={screenshotFeedbackView}
        imageAlt="Image Alt"
        isDark={false}
      />
      <FeatureWithScreenshotOnSide
        id="feedback-widget"
        ariaLabel="Features for capturing session information"
        title="Simplest Way For Your Customers To Reach You"
        description="Userowl feedback widget allows your customers to report broken parts directly in your store. Giving an easy way for your customers to report problems improves your overall store experience."
        hashtag="Feedback Widget"
        image={screenshotFeedbackView}
        imageAlt="Image Alt"
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="one-place"
        ariaLabel="Features to manage all your client work"
        title="One Place To Manage All Your Store Feedback"
        description="No more bloated inbox with emails from your customers. You can manage, plan and close the feedback loop. Invite your team, modify according to your workflow. Connect with the tools you already use."
        hashtag="Only tool you need"
        image={screenshot}
        imageAlt="Image Alt"
        imageOnLeft={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="technical-logs"
        ariaLabel="Features for capturing technical logs"
        title="Provide Useful Information To Your Developers"
        description="Feedback reported via Userowl automatically include session and user details, along with the technical logs that your developers may require for problem reproduction"
        hashtag="Session and technical info"
        image={screenshotFeedbackViewCondense}
        imageAlt="Image Alt"
        isDark={true}
      >
        <LearnMoreLink href="/features/bug-tracking" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="annotated-screenshots"
        ariaLabel="Annotated screenshot feature"
        title="See What Problem Your Users Are Facing"
        description="Your users can mark application issues using a user-friendly screen annotation tool, or you can opt for automatic screenshot inclusion with each feedback."
        hashtag="Annotated screenshots"
        image={screenshot}
        imageAlt="Image Alt"
        imageOnLeft={true}
        isDark={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <CallToAction />
      <Faqs faqs={faqs} isDark={true} />
    </>
  );
}
