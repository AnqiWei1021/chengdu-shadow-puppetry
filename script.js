const ddSteps = document.querySelectorAll('.dd-step');
const ddDim = document.getElementById('dd-dim');

const ddObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const ringClass = entry.target.dataset.ring;
      const dimNumber = ringClass.replace('ring-', 'dim-');
      ddDim.className = 'dd-dim-overlay active ' + dimNumber;
      if (ringClass === 'ring-0') {
        ddDim.classList.remove('active');
      }
    }
  });
}, { threshold: 0.5 });

ddSteps.forEach(step => ddObserver.observe(step));

const cdSteps = document.querySelectorAll('.cd-step');
const cdDim = document.getElementById('cd-dim');

const cdObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const ringClass = entry.target.dataset.ring;
      const dimNumber = ringClass.replace('ring-', 'dim-');
      cdDim.className = 'cd-dim-overlay active ' + dimNumber;
      if (ringClass === 'ring-0') {
        cdDim.classList.remove('active');
      }
    }
  });
}, { threshold: 0.5 });

cdSteps.forEach(step => cdObserver.observe(step));

const gridItems = document.querySelectorAll('.grid-item');
const detailPanel = document.getElementById('explorer-detail');

gridItems.forEach(item => {
  item.addEventListener('click', () => {
    gridItems.forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');

    const imgSrc = item.querySelector('img').src;
    const size = item.dataset.size || '';
    const source = item.dataset.source || '';

    detailPanel.innerHTML = `
      <img src="${imgSrc}" class="detail-img" alt="${item.dataset.name}">
      <p class="detail-name">${item.dataset.name}</p>
      ${size ? `<p class="detail-size">${size}</p>` : ''}
      ${source ? `<p class="detail-source">${source}</p>` : ''}
      <div class="detail-divider"></div>
      <p class="detail-desc">${item.dataset.desc}</p>
    `;
  });
});

/* 点击顶部分类按钮:属于该分类的图标保持正常,其他分类整体变暗 */
const filterBtns = document.querySelectorAll('.filter-btn');

function applyFilter(cat) {
  gridItems.forEach(item => {
    item.classList.toggle('dimmed', item.dataset.cat !== cat);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.cat);
  });
});

applyFilter('colour');
