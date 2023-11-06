/* eslint-disable react/no-unescaped-entities */
'use client';
import Header from '@/components/Header';
import axios from '@/services/axios';
import { useState } from 'react';
import { IMaskInput } from 'react-imask';

export default function registerPatient() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setSex] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(dateOfBirth);
    try {
      const { data } = await axios.post('/api/register/patient', {
        name,
        cpf,
        dateOfBirth,
        gender,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 m-20">
          <h2 className="text-xl font-semiobld leading-7 text-gray-900">
            Patient Registration
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Provide the patient's data to register.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/*Full name input*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="full-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5"
                  required
                />
              </div>
            </div>
            {/*CPF input*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="cpf"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                CPF
              </label>
              <div className="mt-2">
                <IMaskInput
                  mask="000.000.000-00"
                  placeholder="000.000.000-00"
                  type="text"
                  name="cpf"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  required
                />
              </div>
            </div>
            {/*Data of birth*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="data-of-birth"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of Birth
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="data-of-birth"
                  id="data-of-birth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
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
                  id="country"
                  name="country"
                  value={gender}
                  onChange={(e) => setSex(e.target.value)}
                  autoComplete="country-name"
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5"
                >
                  <option>Default</option>
                  <option value="F">Feminine</option>
                  <option value="M">Masculine</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-sky-800 px-20 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 transition duration-300 ease-out md:ease-in"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
