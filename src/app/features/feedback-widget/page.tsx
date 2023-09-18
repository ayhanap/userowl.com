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

export default function FeedbackWidget() {
  return (
    <>
      <Hero
        title="Collect Feedback In Your Application"
        description="With the help of the powerful feedback widget, Userowl lets you collect feedback, bugs or feature requests directly from your website or app."
        ctaText="Start free trial"
        ctaHref="https://app.userowl.com/signup"
        image={screenshotFeedbackView}
        imageAlt="Image Alt"
        isDark={false}
      />
      <FeatureWithScreenshotOnSide
        id="engage-customers"
        ariaLabel="Features for engaging customers"
        title="Make Your Customers an Extension of Your Team"
        description="Your users can use the feedback widget directly on the page they are using and report problems they are facing in seconds."
        hashtag="Engage customers"
        image={screenshotFeedbackView}
        imageAlt="Image Alt"
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="annotate-screen"
        ariaLabel="Features for associating your user information"
        title="No Need To Install Tools To Annotate Screen"
        description="Your users can annotate screen to mark issues directly in your website without needing any other tool."
        hashtag="Annotate screen"
        image={screenshot}
        imageAlt="Image Alt"
        imageOnLeft={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      {/* <div className="dark">
          <Feature1 />
        </div> */}
      {/* <Feature2 /> */}
      <FeatureWithScreenshotOnSide
        id="no-code"
        ariaLabel="Features for capturing console logs"
        title="One Time Easy Setup In Minutes"
        description="Effortlessly install the feedback widget once and manage all configurations through the Userowl dashboard."
        hashtag="No code"
        image={screenshotFeedbackViewCondense}
        imageAlt="Image Alt"
        isDark={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />{' '}
        {/* TODO: learn more to documentation */}
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="branding"
        ariaLabel="Features for branding"
        title="Beautifully Match Your Brand"
        description="Personalize the widget to match your brand and specific requirements."
        hashtag="Branding"
        image={screenshot}
        imageAlt="Image Alt"
        imageOnLeft={true}
        isDark={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <CallToAction />
      <FeatureWithScreenshotOnSide
        id="capture-all-the-data"
        ariaLabel="Features for data capturing"
        title="Useful Data In Every Feedback"
        description="Essential data, including session info, user info, console logs, network logs, and more, is automatically attached to the feedback."
        hashtag="Capture all the data"
        image={screenshot}
        imageAlt="Image Alt"
        imageOnLeft={false}
        isDark={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <Faqs faqs={faqs} isDark={true} />
    </>
  );
}
