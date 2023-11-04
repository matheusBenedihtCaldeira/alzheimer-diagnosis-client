import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <div className="py-20 sm:py-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              NeuroAI
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Machine Learning Brain Health Tool
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-600 border-t border-gray-200">
              NeuroAI, our mission is to provide valuable assistance to doctors
              in diagnosing Alzheimer's, offering support in decision making. We
              recognize the importance of diagnosing Alzheimer's disease and are
              here to provide the tools you need to begin and navigate this
              crucial journey with confidence. With NeuroAI, we are bringing
              hope, precision and care to brain health diagnosis
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href="/register/patient">
                    <span className="absolute inset-0"></span>
                    Patient Registration
                  </Link>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  Record comprehensive patient information and other relevant
                  factors for accurate analysis.
                </p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href="#">
                    <span className="absolute inset-0"></span>
                    Alzheimer's Risk Analysis
                  </Link>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  Using a Naive Bayes machine learning model, we evaluated
                  multiple factors to identify potential indicators of
                  Alzheimer's, assisting in the diagnostic process.
                </p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href="/patient/history">
                    <span className="absolute inset-0"></span>
                    Patient History
                  </Link>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  We maintain a secure and confidential record of all patients
                  to ensure effective follow-up over time.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
