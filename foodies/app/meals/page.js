import Link from 'next/link';
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid';

function Meals() {
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
        <MealsGrid meals={[]} />
      </main>
    </>
  )
}

export default Meals