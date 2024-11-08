import { Container, Title } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us for any inquiries, feedback, or collaboration opportunities.',
};

export default function Page() {
  return (
    <>
      <Container>
        <div className="page mx-auto max-w-prose">
          <Title>Contact Us</Title>
          <div className="mb-6">
            <p>
              We&apos;d love to hear from you! Whether you have questions, feedback, or ideas to share, feel free to
              reach us at <a href="mailto:human@aidreams.world">human@aidreams.world</a>.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
