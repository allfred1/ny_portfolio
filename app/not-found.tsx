

"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000); // перенаправление через 5 секунд
  }, [router]);

  return (
    <>
      <div className="contain min-h-[70vh] mx-auto flex items-center justify-center flex-col gap-6 border-2 border-black dark:border-white">
        <div className="title text-[20vh] font-semibold leading-8 dark:text-white">
          404
        </div>
        <div className="desc mt-4 font-bold dark:text-white">
          Page not found. Check the URL and try again.
        </div>
      </div>
    </>
  );
}
