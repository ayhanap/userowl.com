import { type Metadata } from 'next';
import { redirect } from 'next/navigation';

export default async function EmployeeAyhanApaydin() {
  redirect('https://linktr.ee/ayhanap');
}

export const metadata: Metadata = {
  title: 'Ayhan APAYDIN',
  // description:
  //   'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
};
