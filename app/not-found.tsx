

"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  return (
    <>
      <div className="contain min-h-[70dvh] mx-auto flex items-center justify-center flex-col gap-12 border-2 border-black dark:border-white p-4">
        <div className="title block text-[20dvh] font-semibold leading-8 dark:text-white">
          404
        </div>
        <div className="desc block mt-4 font-bold dark:text-white">
          Page not found. Check the URL and try again.
        </div>
      </div>
    </>
  );
}
