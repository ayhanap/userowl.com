import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What exactly is Userowl?',
      answer:
        'It’s a widget that you can place on your website or web application. Your users or internal UAT team can use this widget to give feedback on your product.',
    },
    {
      question: 'How long does it take to add the widget script to my application?',
      answer:
        'It usually takes only 5-10 minutes to set up and you are ready to go. We have guides on common frameworks and CMS systems.',
    },
    {
      question: 'Can I customize how the widget looks on our site so that it fits our brand guidelines?',
      answer:
        'Yes, you can customize the fields and style of the widget easily in a WYSIWYG editor.',
    },
  ],
  [
    {
      question: 'How do I see the collected feedback and bugs?',
      answer:
        'You see bugs, feature requests, or general feeedback on Userowl application. You can organize the way you manage feedback with many of the available views like inbox view, kanban view, list view, etc.',
    },
    {
      question:
        'Do I receive notifications when users report a new bug or feature?',
      answer:
        'Yes, you can configure to set who receives email notifications on your team.',
    },
    {
      question:
        'Can I have multiple users that are in my organization?',
      answer:
        'Yes, you can invite your team members and assign roles to them. With the help of the product, QA, and development teams on board you can assign issues and track reported feedback.',
    },
  ],
  [
    {
      question: 'How do I access Userowl application?',
      answer:
        'Userowl is a SaaS solution, so you and your team can access it on your browser of choice. It is responsive so you can do urgent tasks with your smartphone on the go.',
    },
    {
      question: 'What is the pricing model on Userowl?',
      answer: 'Userowl is a subscription-based service. You can select the appropriate tier for your use and subscribe to a monthly or yearly plan. We also offer free trials.',
    },
    {
      question: 'How is my data managed?',
      answer:
        'At Userowl we prioritize data safety and ownership from the start. We comply with GDPR, CCPA, and KVKK. You can customize which personal information to take and you can export your data anytime because you own your data. You can also comply with your users’ requests to manage their data.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative" itemScope itemType="https://schema.org/FAQPage">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and we will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="font-display text-lg leading-7 text-slate-900" itemProp="name">
                      {faq.question}
                    </h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="mt-4 text-sm text-slate-700" itemProp="text">{faq.answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
