// Custom JS will be added here
document.addEventListener("DOMContentLoaded", function () {
  // إنشاء القسم الجديد
  const customSection = document.createElement("section");
  customSection.className = "furniture-section";
  customSection.innerHTML = `
    <div class="hero-section">
      <div class="hero-text">
        <h1>FURNITURE QUARTER</h1>
        <p>Comfort, elegance and functionality<br>for your living space.</p>
        <button class="catalog-btn">Catalog</button>
      </div>
      <div class="hero-image">
        <img src="https://i.imgur.com/XTHUShs.png" alt="chair">
        <div class="label top">Cloth<br><span>High-quality suitable material</span></div>
        <div class="label middle">Convenience<br><span>Comfortable, thoughtful fit</span></div>
        <div class="label bottom">The leg<br><span>Made of high quality wood</span></div>
      </div>
    </div>

    <div class="cards-section">
      ${[1, 2, 3, 4, 5].map(i => `
        <div class="chair-card">
          <img src="https://i.imgur.com/3GgC0fK.png" alt="Chair ${i}">
          <h3>THE “CLASSIC” CHAIR</h3>
        </div>
      `).join('')}
    </div>
  `;

  // إضافة القسم قبل قسم المنتجات
  const target = document.querySelector(".products-wrapper") || document.body;
  target.parentNode.insertBefore(customSection, target);
});
