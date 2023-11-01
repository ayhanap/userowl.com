import { CallToAction } from '@/components/CallToAction';
import Faqs, { Faq } from '@/components/Faqs';
import FeatureWithScreenshotOnSide, {
  LearnMoreLink,
} from '@/components/FeatureWithScreenshotOnSide';
import Hero from '@/components/Hero';
import { InTextLink } from '@/components/InTextLink';

import vd002 from '@/videos/VD-002-encoded-RF26.mp4';
import vd013 from '@/videos/VD-013-encoded-RF26.mp4';
import vd023 from '@/videos/VD-023-encoded-RF26.mp4';
import vd024 from '@/videos/VD-024-encoded-RF26.mp4';
import vd110 from '@/videos/VD-110-encoded-RF28.mp4';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development Use Case',
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

export default function SoftwareDevelopment() {
  return (
    <>
      <Hero
        title="No More Ping-Pong Between Dev and QA"
        description="With the included annotated screenshot, session info, and other technical info, you have all the information you need to resolve a bug, all the time!"
        ctaText="Start free trial"
        ctaHref="https://app.userowl.com/signup"
        video={vd110}
        imageAlt="Image Alt"
        isDark={false}
      />
      <FeatureWithScreenshotOnSide
        id="session-info"
        ariaLabel="Features for capturing session information"
        title="Automatically Capture Session Information"
        description="Each feedback contains session details such as URL, OS, and browser, resolution, location, and more."
        hashtag="Session info"
        video={vd002}
        imageAlt="Image Alt"
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="user-info"
        ariaLabel="Features for associating your user information"
        title="Associate Your Customer Info"
        description="You can identify your users to let feedbacks also include essential user details so you can contact them or prioritize feedback accordingly. You can also include any other info related to your business case as custom information."
        hashtag="User information"
        video={vd023}
        imageAlt="Image Alt"
        imageOnLeft={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="console-logs"
        ariaLabel="Features for capturing console logs"
        title="Don't Lose Crucial Technical Info"
        description="Console errors and logs are automatically captured and included so your developers can reproduce every bug."
        hashtag="Console logs"
        video={vd024}
        imageAlt="Image Alt"
        isDark={true}
      >
        <LearnMoreLink text={'Start free trial'} href="https://app.userowl.com/signup" />
      </FeatureWithScreenshotOnSide>
      <FeatureWithScreenshotOnSide
        id="annotated-screenshots"
        ariaLabel="Annotated screenshot feature"
        title="See What Problem Your Users Are Facing"
        description="Your users can mark application issues using a user-friendly screen annotation tool, or you can opt for automatic screenshot inclusion with each feedback."
        hashtag="Annotated screenshots"
        video={vd013}
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
