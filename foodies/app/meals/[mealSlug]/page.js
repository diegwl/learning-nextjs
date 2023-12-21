import React from 'react'

function MealDetails({ params }) {

    const { mealSlug } = params

    return (
        <div>Meal {mealSlug}</div>
    )
}

export default MealDetails