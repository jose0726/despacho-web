
document.addEventListener('DOMContentLoaded', () => {
    async function init() {
        const proyectosFiltradosContainer = document.getElementById('proyectos-filtrados');
        const categorias = document.querySelectorAll('.categoria');
        let proyectos = [];
        let intervalos = [];
        // Normalizador sencillo para comparar etiquetas (quita acentos, espacios, pasa a lowercase)
        const normalizeString = (s) => String(s || '').normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/\s+/g,' ').trim().toLowerCase().replace(/\s+/g,'-');
        // Definir el observador UNA sola vez
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }
            });
        }, { threshold: 0.2 });

        // Cargar proyectos desde el archivo JSON
        try {
            const response = await fetch('js/proyectos.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            proyectos = await response.json();
        } catch (error) {
            console.error("No se pudieron cargar los proyectos:", error);
            proyectosFiltradosContainer.innerHTML = `<p class="no-proyectos">Error al cargar la información de proyectos. Por favor, intente más tarde.</p>`;
            return;
        }

        // --- Abrir/Cerrar subcategorías ---
        categorias.forEach(categoria => {
            const btn = categoria.querySelector('.categoria-btn');
            const subContainer = categoria.querySelector('.subcategoria-container');
            if (btn && !btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded','false');
            btn.addEventListener('click', async () => {
                const estaAbierto = subContainer.style.display === 'block';
                subContainer.style.display = estaAbierto ? 'none' : 'block';
                btn.setAttribute('aria-expanded', String(!estaAbierto));
                if (estaAbierto) {
                    // Animación de salida antes de limpiar proyectos
                    if (proyectosFiltradosContainer.children.length > 0) {
                        await anime({
                            targets: '.proyecto-item',
                            translateY: [0, -30],
                            opacity: [1, 0],
                            duration: 400,
                            easing: 'easeInExpo'
                        }).finished;
                    }
                    proyectosFiltradosContainer.innerHTML = '';
                }
            });
        });

        // --- Filtrado inicial según parámetro ---
        const params = new URLSearchParams(window.location.search);
        const categoriaParam = params.get("categoria");
        const subParam = params.get("sub");

        if (categoriaParam) {
            const categoriaSeleccionada = normalizeString(categoriaParam);
            categorias.forEach(categoria => categoria.style.display = "none");
            categorias.forEach(categoria => {
                const btn = categoria.querySelector(".categoria-btn");
                const subContainer = categoria.querySelector('.subcategoria-container');
                if (btn && normalizeString(btn.textContent) === categoriaSeleccionada) {
                    categoria.style.display = "block";
                    btn.setAttribute('aria-expanded','true');
                    if (subContainer) subContainer.style.display = 'block';
                    if (categoriaSeleccionada === normalizeString('Habitacional')) {
                        const subBtns = categoria.querySelectorAll('.subcategoria-btn');
                        subBtns.forEach(s => {
                            const label = normalizeString(s.textContent);
                            if (label === normalizeString('Interiorismo') || label === normalizeString('Paisajismo')) {
                                s.style.display = 'none';
                            }
                        });
                    }
                }
            });
        }

        if (subParam) {
            const subSeleccionada = normalizeString(subParam);
            const habitacionalSubs = new Set([
                normalizeString('Interiorismo'),
                normalizeString('Paisajismo'),
                normalizeString('Interes social'),
                normalizeString('Interes medio'),
                normalizeString('interes alto'),
                normalizeString('Multifamiliar')
            ]);
            const comercialSubs = new Set([
                normalizeString('Tiendas'),
                normalizeString('Bares'),
                normalizeString('Restaurantes'),
                normalizeString('Oficinas'),
                normalizeString('Clinicas'),
                normalizeString('Bodegas')
            ]);
            categorias.forEach(cat => { cat.style.display = 'none'; });
            let mapeada = false;
            if (habitacionalSubs.has(subSeleccionada)) {
                categorias.forEach(cat => {
                    const btn = cat.querySelector('.categoria-btn');
                    const subContainer = cat.querySelector('.subcategoria-container');
                    if (btn && normalizeString(btn.textContent) === normalizeString('Habitacional')) {
                        cat.style.display = 'block';
                        btn.setAttribute('aria-expanded','true');
                        if (subContainer) subContainer.style.display = 'block';
                        const subBtns = cat.querySelectorAll('.subcategoria-btn');
                        subBtns.forEach(s => {
                            const label = normalizeString(s.textContent);
                            s.style.display = (label === subSeleccionada) ? 'inline-block' : 'none';
                        });
                        mapeada = true;
                    }
                });
            } else if (comercialSubs.has(subSeleccionada)) {
                categorias.forEach(cat => {
                    const btn = cat.querySelector('.categoria-btn');
                    const subContainer = cat.querySelector('.subcategoria-container');
                    if (btn && normalizeString(btn.textContent) === normalizeString('Comercial')) {
                        cat.style.display = 'block';
                        btn.setAttribute('aria-expanded','true');
                        if (subContainer) subContainer.style.display = 'block';
                        const subBtns = cat.querySelectorAll('.subcategoria-btn');
                        subBtns.forEach(s => {
                            const label = normalizeString(s.textContent);
                            s.style.display = (label === subSeleccionada) ? 'inline-block' : 'none';
                        });
                        mapeada = true;
                    }
                });
            }
            if (!mapeada) categorias.forEach(cat => { cat.style.display = ''; });
            proyectosFiltradosContainer.innerHTML = '';
            const filtrados = proyectos.filter(p => normalizeString(p.sub) === subSeleccionada);
            if (filtrados.length === 0) {
                proyectosFiltradosContainer.innerHTML = `<p class="no-proyectos">No hay proyectos en esta subcategoría.</p>`;
            } else {
                const creados = [];
                filtrados.forEach(p => {
                    const div = document.createElement('div');
                    div.classList.add('proyecto-item');
                    const imgEl = document.createElement('img');
                    imgEl.alt = p.titulo;
                    imgEl.loading = 'lazy';
                    imgEl.src = p.imagenes && p.imagenes.length ? p.imagenes[0] : '';
                    imgEl.addEventListener('error', function () {
                        const altPrefixes = [
                            `img/proyectocomercial/`,
                            `img/proyectohabitacional/`,
                            `img/proyecto/`,
                            `img/`];
                        const original = this.src;
                        const filename = original.split('/').pop();
                        for (const pref of altPrefixes) {
                            const candidate = pref + filename;
                            if (candidate === original) continue;
                            this.src = candidate;
                            break;
                        }
                    });
                    const descripcion = document.createElement('div');
                    descripcion.className = 'descripcion';
                    descripcion.innerHTML = `<h4>${p.titulo}</h4><p>${p.descripcion}</p>`;
                    let indice = 0;
                    if (p.imagenes && p.imagenes.length > 1) {
                        const id = setInterval(() => {
                            indice = (indice + 1) % p.imagenes.length;
                            imgEl.src = p.imagenes[indice];
                        }, 3000);
                        intervalos.push(id);
                    }
                    div.appendChild(imgEl);
                    div.appendChild(descripcion);
                    proyectosFiltradosContainer.appendChild(div);
                    const rect = div.getBoundingClientRect();
                    const inViewport = rect.top < (window.innerHeight || document.documentElement.clientHeight) * 0.95;
                    if (!inViewport) {
                        observer.observe(div);
                    }
                    creados.push(div);
                });
                if (creados.length) {
                    creados.forEach(el => el.getBoundingClientRect());
                    requestAnimationFrame(() => {
                        anime({
                            targets: creados,
                            translateY: [100, 0],
                            opacity: [0, 1],
                            delay: anime.stagger(200),
                            duration: 800,
                            easing: 'easeOutExpo'
                        });
                    });
                }
            }
        }

        // --- Manejador de subcategorías ---
        const subBtns = document.querySelectorAll('.subcategoria-btn');
        subBtns.forEach(btn => {
            btn.addEventListener('click', async () => {
                const sub = btn.textContent.trim().toLowerCase();
                if (proyectosFiltradosContainer.children.length > 0) {
                    await anime({
                        targets: '.proyecto-item',
                        translateY: [0, -30],
                        opacity: [1, 0],
                        duration: 400,
                        easing: 'easeInExpo'
                    }).finished;
                }
                intervalos.forEach(id => clearInterval(id));
                intervalos = [];
                proyectosFiltradosContainer.innerHTML = '';
                const filtrados = proyectos.filter(p => p.sub.toLowerCase() === sub);
                if (filtrados.length === 0) {
                    proyectosFiltradosContainer.innerHTML = `<p class="no-proyectos">No hay proyectos en esta subcategoría.</p>`;
                    return;
                }
                filtrados.forEach(p => {
                    const div = document.createElement('div');
                    div.classList.add('proyecto-item');
                    const imgEl = document.createElement('img');
                    imgEl.alt = p.titulo;
                    imgEl.loading = 'lazy';
                    imgEl.src = p.imagenes && p.imagenes.length ? p.imagenes[0] : '';
                    imgEl.addEventListener('error', function () {
                        const original = this.src;
                        const filename = original.split('/').pop();
                        const candidates = [
                            `img/proyectocomercial/${filename}`,
                            `img/proyectohabitacional/${filename}`,
                            `img/${filename}`
                        ];
                        for (const c of candidates) {
                            if (c !== original) { this.src = c; break; }
                        }
                    });
                    const descripcion = document.createElement('div');
                    descripcion.className = 'descripcion';
                    descripcion.innerHTML = `<h4>${p.titulo}</h4><p>${p.descripcion}</p>`;
                    let indice = 0;
                    const id = setInterval(() => {
                        if (!p.imagenes || p.imagenes.length <= 1) return;
                        indice = (indice + 1) % p.imagenes.length;
                        imgEl.src = p.imagenes[indice];
                    }, 3000);
                    intervalos.push(id);
                    div.appendChild(imgEl);
                    div.appendChild(descripcion);
                    proyectosFiltradosContainer.appendChild(div);
                    observer.observe(div);
                    div.addEventListener('click', () => abrirModal(p));
                });
                const nuevos = proyectosFiltradosContainer.querySelectorAll('.proyecto-item');
                anime({
                    targets: nuevos,
                    translateY: [80, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(150),
                    duration: 700,
                    easing: 'easeOutExpo'
                });
            });
        });

        // --- Tooltip imagen ---
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip-imagen');
        const tooltipImg = document.createElement('img');
        tooltip.appendChild(tooltipImg);
        document.body.appendChild(tooltip);
        document.addEventListener('mouseover', e => {
            const imgTarget = e.target.closest('.proyecto-item img');
            if (imgTarget) {
                tooltipImg.src = imgTarget.src;
                tooltip.style.display = 'block';
            }
        });
        document.addEventListener('mousemove', e => {
            tooltip.style.left = e.pageX + 20 + 'px';
            tooltip.style.top = e.pageY + 20 + 'px';
        });
        document.addEventListener('mouseout', e => {
            if (e.target.closest('.proyecto-item img')) {
                tooltip.style.display = 'none';
            }
        });
    }
    // Llamar a la función principal para iniciar la lógica de la página
    init();
});
