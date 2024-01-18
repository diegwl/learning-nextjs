import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />
}

function MealsPage() {
  const { header, main, highlight, cta, loading } = classes;

  return (
    <>
      <header className={header}>
        <h1>
          Delicious meals, created{' '}
          <span className={highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className={cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={main}>
        <Suspense fallback={<p className={loading}>Fetching Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage;