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

export default function QaUAT() {
  return (
    <>
      <Hero
        title="Reporting Issues Have Never Been Easier"
        description="Feedback widget allows you to report bugs directly in your app without needing any other tools. No more files and folders of endless untitled screenshots and docs. "
        ctaText="Start free trial"
        ctaHref="https://app.userowl.com/signup"
        image={screenshotFeedbackView}
        imageAlt="Image Alt"
        isDark={false}
      />
      <FeatureWithScreenshotOnSide
        id="in-app-reporting"
        ariaLabel="Features for reporting bugs"
        title="Spend Less Time Reporing Bugs"
        description="Manually taking screenshots with third-party tools and filling information for bug reports take up a lot of your time. Userowl lets you report bugs without switching to other tools."
        hashtag="In-app reporting"
        image={screenshotFeedbackView}
        imageAlt="Image Alt"
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="technical-information"
        ariaLabel="Features for associating your user information"
        title="Provide Useful Information To Your Developers"
        description="Without any extra effort, Userowl automatically includes information to reproduce the bugs you reported. With auto-included session info and technical logs, your developers will not request additional details from you."
        hashtag="Technical information"
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
        id="uat"
        ariaLabel="Features for capturing console logs"
        title="Your End Users Will Be Power Testers"
        description="Your UAT testers with limited technical capabilities and tools in hand can send incomplete bug reports. Userowl allows them to report consistent and rich bug reports with all the information your team needs."
        hashtag="UAT"
        image={screenshotFeedbackViewCondense}
        imageAlt="Image Alt"
        isDark={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="integrations"
        ariaLabel="Annotated screenshot feature"
        title="Stop Switching Tabs To Report Bugs"
        description="You can send feedback reports directly to your project management tool. You'll no longer waste time managing files to upload and filling in information."
        hashtag="Integrations"
        image={screenshot}
        imageAlt="Image Alt"
        imageOnLeft={true}
        isDark={true}
      >
        <LearnMoreLink href="/features/integrations" />
      </FeatureWithScreenshotOnSide>
      <CallToAction />
      <Faqs faqs={faqs} isDark={true} />
    </>
  );
}
