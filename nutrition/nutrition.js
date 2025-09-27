console.log('script.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
    const weightEl = document.getElementById('weight');
    const ageEl = document.getElementById('age');
    const sexEl = document.getElementById('sex');
    const activityEl = document.getElementById('activity');
    const calcBtn = document.getElementById('calcBtn');
    const sampleMealBtn = document.getElementById('sampleMealBtn');
    const resultEl = document.getElementById('result');
    if (!weightEl || !ageEl || !sexEl || !activityEl || !calcBtn || !sampleMealBtn || !resultEl) {
        console.error('One or more required elements are missing:', {
        weightEl, ageEl, sexEl, activityEl, calcBtn, sampleMealBtn, resultEl
    });
    if (resultEl) resultEl.textContent = 'Error: missing page elements — перевірте id у HTML.';
    return;
    }

    function estCalories(weight, age, sex, activity) {
        const height = sex === 'male' ? 170 : 160;
        const s = sex === 'male' ? 5 : -161;
        const bmr = (10 * weight) + (6.25 * height) - (5 * age) + s;
        return Math.round(bmr * activity);
    }

    calcBtn.addEventListener('click', () => {
        const w = Number(weightEl.value);
        const a = Number(ageEl.value) || 30;
        const s = sexEl.value;
        const act = Number(activityEl.value) || 1.2;

        if (!w || w <= 20) {
            resultEl.textContent = 'Please enter a realistic weight.';
            return;
        }

    const kcal = estCalories(w, a, s, act);
    resultEl.innerHTML = `<strong>Estimated daily calories:</strong> ${kcal} kcal<br><small>Adjust ±300 kcal for modest weight change.</small>`;
    });

    const sampleMeals = [
        'Grilled chicken, brown rice, mixed veg',
        'Baked salmon, quinoa, spinach salad',
        'Tofu stir-fry, soba noodles, broccoli',
        'Lentil curry, basmati, roasted cauliflower',
        'Greek yogurt, granola, berries (breakfast)'
    ];

    sampleMealBtn.addEventListener('click', () => {
        const pick = sampleMeals[Math.floor(Math.random() * sampleMeals.length)];
        resultEl.innerHTML = `<strong>Sample meal suggestion:</strong> ${pick}`;
    });
});
