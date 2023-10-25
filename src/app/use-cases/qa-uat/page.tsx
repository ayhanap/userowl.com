import { CallToAction } from '@/components/CallToAction';
import Faqs, { Faq } from '@/components/Faqs';
import FeatureWithScreenshotOnSide, {
  LearnMoreLink,
} from '@/components/FeatureWithScreenshotOnSide';
import Hero from '@/components/Hero';
import { InTextLink } from '@/components/InTextLink';

import vd121 from '@/videos/VD-121-encoded-RF26.mp4';
import vd122 from '@/videos/VD-122-encoded-RF28.mp4';
import vd123 from '@/videos/VD-123-encoded-RF28.mp4';
import vd124 from '@/videos/VD-124-encoded-RF26.mp4';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QA, UAT Use Case',
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
        description="The Userowl feedback widget allows you to report bugs directly in your app without needing any other tools. No more files and folders of endless untitled screenshots and docs. "
        ctaText="Start free trial"
        ctaHref="https://app.userowl.com/signup"
        noImage={true}
        isDark={false}
      />
      <FeatureWithScreenshotOnSide
        id="in-app-reporting"
        ariaLabel="Features for reporting bugs"
        title="Spend Less Time Reporting Bugs"
        description="Manually taking screenshots with third-party tools and filling in information for bug reports take up a lot of your time. Userowl lets you report bugs without switching to other tools."
        hashtag="In-app reporting"
        video={vd121}
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
        video={vd122}
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
        video={vd123}
        imageAlt="Image Alt"
        isDark={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="integrations"
        ariaLabel="Annotated screenshot feature"
        title="Stop Switching Tabs To Report Bugs"
        description="You can send feedback reports directly to your project management tool. You'll no longer waste time managing files to upload and fill in information."
        hashtag="Integrations"
        video={vd124}
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
