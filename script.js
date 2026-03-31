document.addEventListener('DOMContentLoaded', () => {

    // Render Product Cards
    const renderProducts = (gridId, limit) => {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        
        // Use global PRODUCTS from data.js
        const itemsToRender = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

        itemsToRender.forEach(item => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="images/${item.image}" alt="시스템 에어컨" class="product-img">
                <div class="product-info">
                    <h3 class="product-title">${item.name} 시스템 에어컨 ${item.type}</h3>
                    <p class="product-desc">${item.desc}</p>
                    <div class="product-price">${item.price}</div>
                </div>
            `;
            grid.appendChild(card);
        });
    };

    // Render Portfolio Cards
    const renderPortfolios = (gridId, limit) => {
        const grid = document.getElementById(gridId);
        if (!grid) return;

        // Use global PORTFOLIO_ITEMS from data.js
        const itemsToRender = limit ? PORTFOLIO_ITEMS.slice(0, limit) : PORTFOLIO_ITEMS;

        itemsToRender.forEach(data => {
            const card = document.createElement('div');
            card.className = 'portfolio-card';
            card.innerHTML = `
                <img src="images/${data.image}" alt="시공 작업 사진" class="portfolio-img">
                <div class="portfolio-info">
                    <div class="portfolio-category">${data.category}</div>
                    <h3 class="portfolio-title">${data.title}</h3>
                    <div class="portfolio-date">🗓 시공일: ${data.date}</div>
                    <p class="portfolio-desc">" ${data.desc} "</p>
                </div>
            `;
            grid.appendChild(card);
        });
    };

    // Execute Initializations
    // index.html Preview Grids
    renderProducts('product-grid-preview', 6);
    renderPortfolios('portfolio-grid-preview', 6);

    // products.html Full Grid (no limit)
    renderProducts('product-grid');

    // portfolio.html Full Grid (no limit)
    renderPortfolios('portfolio-grid');



});
