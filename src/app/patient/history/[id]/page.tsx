'use client';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';
import axios from '@/services/axios';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

type PatientProps = {
  id: number;
  name: string;
  cpf: string;
  diagnosis: string;
  gender: string;
  dateOfBirth: string;
};

export default function PatientProfile({ params }: any) {
  const router = useRouter();
  const [patient, setPatient] = useState<PatientProps | null>(null);
  const id = params.id;

  useEffect(() => {
    try {
      const getPatientData = async () => {
        const response = await axios.get<PatientProps>(`/api/patient/${id}`);
        setPatient(response.data);
      };
      getPatientData();
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`/api/delete/patient/${id}`);
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const calculateAge = (dateOfBirth: string) => {
    const dateParts = dateOfBirth.split('/');
    if (dateParts.length === 3) {
      const birthDate = new Date(
        parseInt(dateParts[2], 10),
        parseInt(dateParts[1], 10) - 1, // Mês é base 0 (janeiro = 0)
        parseInt(dateParts[0], 10)
      );
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return age;
    } else {
      return 'Data de nascimento inválida';
    }
  };

  return (
    <>
      <Header />

      <div className="m-20 py-4 sm:py-30">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Patient Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal information.
          </p>
        </div>
        <div className="mt-6 border-t border-b border-gray-300">
          <dl className="divide-y divide-gray-300">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Patient ID
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {patient?.id}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Full name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {patient?.name}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                CPF
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {patient?.cpf}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Sex
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {patient?.gender === 'M'
                  ? 'Maculine'
                  : patient?.diagnosis === 'F'
                  ? 'Feminine'
                  : null}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Age
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {patient ? calculateAge(patient.dateOfBirth) : ''}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Diagnosis
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {patient?.diagnosis === 'Demented'
                  ? "Patient diagnosed with Alzheimer's"
                  : patient?.diagnosis === 'Nondemented'
                  ? "Patient not diagnosed with Alzheimer's"
                  : patient?.diagnosis === 'Converted'
                  ? 'Patient converted'
                  : null}
              </dd>
            </div>
          </dl>
        </div>
        <div className="hidden shrink-0 sm:flex sm:items-center m-1 pt-5">
          <p className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in text-neutral-600 hover:text-blue-700">
            <PencilSquareIcon />
          </p>
          <button
            className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in text-neutral-600 hover:text-red-600"
            onClick={() => handleDelete(patient?.id)}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </>
  );
}
