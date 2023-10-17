import { CallToAction } from '@/components/CallToAction';
import Faqs, { Faq } from '@/components/Faqs';
import FeatureWithScreenshotOnSide, {
  LearnMoreLink,
} from '@/components/FeatureWithScreenshotOnSide';
import Hero from '@/components/Hero';
import { InTextLink } from '@/components/InTextLink';

import screenshotFeedbackViewCondense from '@/images/screenshots/app.userowl.com_feedbacks.png';

import vd042 from '@/videos/VD-042-encoded-RF-22.mp4';
import vd043 from '@/videos/VD-043-encoded-RF22.mp4';

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

export default function FeedbackManagement() {
  return (
    <>
      <Hero
        title="Centralize your feedback management"
        description="Userowl is the only tool you need to manage your feedback. Invite your team, connect your tools, and personalize according to your needs."
        ctaText="Start free trial"
        ctaHref="https://app.userowl.com/signup"
        isDark={false}
        noImage={true}
      />
      <FeatureWithScreenshotOnSide
        id="teams"
        ariaLabel="Features for engaging customers"
        title="Collaborate With Your Team"
        description="Invite your QA, support, product, dev teams and even your clients. Your team has all the tools to manage and close the feedback loop."
        hashtag="Teams"
        video={vd042}
        imageAlt="Image Alt"
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="personalize"
        ariaLabel="Features for associating your user information"
        title="Personalize To Fit Your Workflow"
        description="Whether you use Scrum, Kanban, Waterfall, or your custom workflow, Userowl allows you to customize your feedback workflow, aligning it with your team."
        hashtag="Personalize workflow"
        video={vd043}
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
        id="omnichannel"
        ariaLabel="Features for capturing console logs"
        title="Collect Feedback From Every Channel"
        description="With the help of Userowl browser extension, collect feedback from social channels. Manage everything in one place."
        hashtag="Omnichannel"
        image={screenshotFeedbackViewCondense}
        imageAlt="Image Alt"
        isDark={false}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />{' '}
        {/* TODO: learn more to documentation */}
      </FeatureWithScreenshotOnSide>
      <CallToAction />
      <Faqs faqs={faqs} isDark={false} />
    </>
  );
}
