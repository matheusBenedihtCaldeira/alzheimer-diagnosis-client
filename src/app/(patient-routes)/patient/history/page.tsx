'use client';

import Header from '@/components/Header';
import axios from '@/services/axios';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
type PatientProps = {
  id: number;
  name: string;
  diagnosis: string;
};

export default function patientHistory() {
  const router = useRouter();
  const [patients, setPatients] = useState<PatientProps[]>([]);

  const [name, setName] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`/api/delete/patient/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handlPatientProfile = (id: number) => {
    router.push(`/patient/history/${id}`);
  };

  useEffect(() => {
    try {
      const getPatients = async () => {
        const response = await axios.get<PatientProps[]>('api/patients');
        setPatients(response.data);
      };
      getPatients();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="m-10 pl-2">
        <h2 className="text-xl pb-5 border-b">Patient History</h2>
      </div>
      <div className="m-10 pl-2">
        <Link
          href="/register/patient"
          className="text-white bg-sky-800 rounded-full transition duration-300 ease-out md:ease-in hover:bg-sky-700 p-3 drop-shadow-lg"
        >
          Register patient
        </Link>
      </div>
      <div className="m-10 py-3 sm:py-30">
        <ul className="divide-y divide-gray-100">
          {patients.map((patient) => (
            <li
              key={patient.id}
              className="flex justify-between gap-x-6 p-5 mb-7 shadow-lg bg-slate-200 rounded-md shadow-md w-full"
            >
              <div className="min-w-0 flex-auto cursor-pointer">
                <h2
                  className="text-base font-semibold leading-6"
                  onClick={() => handlPatientProfile(patient.id)}
                >
                  {patient.name}
                </h2>
                <p className="text-sm">
                  Patient ID:
                  <span className="text-zinc-600">{patient.id}</span>
                </p>
                <p className="text-sm">
                  Diagnosis:
                  <span className="text-zinc-600">
                    {patient.diagnosis === 'Demented'
                      ? "Patient diagnosed with Alzheimer's"
                      : patient.diagnosis === 'Nondemented'
                      ? "Patient not diagnosed with Alzheimer's"
                      : patient.diagnosis === 'Converted'
                      ? 'Patient converted'
                      : null}
                  </span>
                </p>
              </div>
              <div className="hidden shrink-0 sm:flex sm:items-center m-1">
                <p className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in text-neutral-600 hover:text-blue-700">
                  <PencilSquareIcon />
                </p>
                <button
                  className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in text-neutral-600 hover:text-red-600"
                  onClick={() => handleDelete(patient.id)}
                >
                  <TrashIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
