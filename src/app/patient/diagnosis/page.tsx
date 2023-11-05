import Header from '@/components/Header';

export default function diagnosis() {
  return (
    <>
      <Header />
      <form>
        <div className="space-y-12 m-20">
          <h2 className="text-xl font-semiobld leading-7 text-gray-900">
            Clinical Data Form for Alzheimer's Diagnosis
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This form assists in the assessment and diagnosis of Alzheimer's.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/*Patiet Id*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="agepatient-id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Patient ID
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="patient-id"
                  id="patient-id"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  min="0"
                  required
                />
              </div>
            </div>
            {/*Sex*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="data-of-birth"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sex
              </label>
              <div className="mt-2">
                <select
                  id="sex"
                  name="sex"
                  autoComplete="sex"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5"
                >
                  <option>Default</option>
                  <option>Feminine</option>
                  <option>Masculine</option>
                </select>
              </div>
            </div>
            {/*Age*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  min="0"
                  max="120"
                  required
                />
              </div>
            </div>
            {/*Educ*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="educ"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Years of schooling
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="educ"
                  id="educ"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  min="0"
                  max="120"
                  required
                />
              </div>
            </div>
            {/*Socioeconomic status*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="ses"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Socioeconomic status
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="ses"
                  id="ses"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  min="0"
                  max="120"
                  required
                />
              </div>
            </div>
            {/*Mini Mental State Examination*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="mmse"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mini Mental State Examination
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="mmse"
                  id="mmse"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  min="0"
                  max="120"
                  required
                />
              </div>
            </div>
            {/*Clinical Classification of Dementia*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="cdr"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Clinical Classification of Dementia
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="cdr"
                  id="cdr"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  step="0.01"
                  min="0.00"
                  max="9000.00"
                  required
                />
              </div>
            </div>
            {/*Estimated Total Intracranial Volume*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="etiv"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Estimated Total Intracranial Volume
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="etiv"
                  id="etiv"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  min="0"
                  max="10000"
                  required
                />
              </div>
            </div>
            {/*Normalize Whole Brain Volume*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="nwbv"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Normalize Whole Brain Volume
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="nwbv"
                  id="nwbv"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  step="0.01"
                  min="0.00"
                  max="9000.00"
                  required
                />
              </div>
            </div>
            {/*Atlas Scaling Factor*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="asf"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Atlas Scaling Factor
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="asf"
                  id="asf"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  step="0.01"
                  min="0.00"
                  max="9000.00"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-sky-800 px-20 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 transition duration-300 ease-out md:ease-in"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
