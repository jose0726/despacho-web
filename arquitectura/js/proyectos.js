// js/proyectos.js actualizado con todos los proyectos y miniaturas rotativas
document.addEventListener('DOMContentLoaded', () => {
    const proyectosFiltradosContainer = document.getElementById('proyectos-filtrados');

    // --- Abrir/Cerrar subcategorías ---
    const categorias = document.querySelectorAll('.categoria');
    categorias.forEach(categoria => {
        const btn = categoria.querySelector('.categoria-btn');
        const subContainer = categoria.querySelector('.subcategoria-container');

        btn.addEventListener('click', () => {
            const estaAbierto = subContainer.style.display === 'block';
            subContainer.style.display = estaAbierto ? 'none' : 'block';
            if (estaAbierto) proyectosFiltradosContainer.innerHTML = '';
        });
    });
    const proyectos = [
        // ---- COMERCIAL ----
        // Tiendas

    {categoria:'Comercial', sub:'tiendas', titulo:'MAGALI MACA NAILS', imagenes:[
        'img/proyecto-comercial/tiendas/magali_maca_nails_1.webp',
        'img/proyecto-comercial/tiendas/magali_maca_nails_2.webp',
     'img/proyecto-comercial/tiendas/magali_maca_nails_3.webp'
    ], descripcion:'Espacio comercial para estética y cuidado personal.'},

    {categoria:'Comercial', sub:'tiendas', titulo:'TIENDAS TUMI', imagenes:[
        'img/proyecto-comercial/tiendas/tiendas_tumi_1.webp',
        'img/proyecto-comercial/tiendas/tiendas_tumi_2.webp',
        'img/proyecto-comercial/tiendas/tiendas_tumi_3.webp'
    ], descripcion:'Diseño de tienda elegante y minimalista.'},

    {categoria:'Comercial', sub:'tiendas', titulo:'LOBBY', imagenes:[
        'img/proyecto-comercial/tiendas/lobby_1.webp',
        'img/proyecto-comercial/tiendas/lobby_2.webp',
        'img/proyecto-comercial/tiendas/lobby_3.webp'
    ], descripcion:'Espacio comercial funcional y moderno para atención al cliente.'},

    {categoria:'Comercial', sub:'tiendas', titulo:'CAU UIA', imagenes:[
        'img/proyecto-comercial/tiendas/cau_uia_1.webp',
        'img/proyecto-comercial/tiendas/cau_uia_2.webp',
        'img/proyecto-comercial/tiendas/cau_uia_3.webp'
    ], descripcion:'Tienda con diseño minimalista y eficiente, enfocada en experiencia del usuario.'},
        
    {categoria:'Comercial', sub:'tiendas', titulo:'LAS FUENTES', imagenes:[
        'img/proyecto-comercial/tiendas/las_fuentes_1.webp',
        'img/proyecto-comercial/tiendas/las_fuentes_2.webp',
        'img/proyecto-comercial/tiendas/las_fuentes_3.webp'
    ], descripcion:'Proyecto comercial de tienda LAS FUENTES con diseño funcional y moderno.'},

    {categoria:'Comercial', sub:'tiendas', titulo:'CAFETERIA CORTIJO', imagenes:[
        'img/proyecto-comercial/tiendas/cafeteria_cortijo_1.webp',
        'img/proyecto-comercial/tiendas/cafeteria_cortijo_2.webp',
        'img/proyecto-comercial/tiendas/cafeteria_cortijo_3.webp'
    ], descripcion:'Diseño de cafetería moderna y acogedora.'},

    {categoria:'Comercial', sub:'tiendas', titulo:'CAFETERIA TULE', imagenes:[
        'img/proyecto-comercial/tiendas/cafeteria_tule_1.webp',
        'img/proyecto-comercial/tiendas/cafeteria_tule_2.webp',
        'img/proyecto-comercial/tiendas/cafeteria_tule_3.webp'
    ], descripcion:'Cafetería con diseño atractivo y funcionalidad óptima.'},

    {categoria:'Comercial', sub:'tiendas', titulo:'PAISAJE CLAUSTRO SOR JUANA', imagenes:[
        'img/proyecto-comercial/tiendas/paisaje_claustro_sor_juana_1.webp',
        'img/proyecto-comercial/tiendas/paisaje_claustro_sor_juana_2.webp',
        'img/proyecto-comercial/tiendas/paisaje_claustro_sor_juana_3.webp'
    ], descripcion:'Proyecto comercial con diseño estético y funcional en PAISAJE CLAUSTRO SOR JUANA.'},

    {categoria:'Comercial', sub:'tiendas', titulo:'XIBALBA', imagenes:[
        'img/proyecto-comercial/tiendas/xibalba_1.webp',
        'img/proyecto-comercial/tiendas/xibalba_2.webp',
        'img/proyecto-comercial/tiendas/xibalba_3.webp'
    ], descripcion:'Proyecto comercial XIBALBA con espacios funcionales y atractivos.'},

    {categoria:'Comercial', sub:'tiendas', titulo:'MONCLOVA RESIDENCIAS PRIVANZAS', imagenes:[
        'img/proyecto-comercial/tiendas/monclova_residencias_privanzas_1.webp',
        'img/proyecto-comercial/tiendas/monclova_residencias_privanzas_2.webp',
        'img/proyecto-comercial/tiendas/monclova_residencias_privanzas_3.webp'
    ], descripcion:'Tienda ubicada en MONCLOVA RESIDENCIAS PRIVANZAS con diseño eficiente.'},

    {categoria:'Comercial', sub:'tiendas', titulo:'PENGUIN SANTA FE', imagenes:[
        'img/proyecto-comercial/tiendas/penguin_santa_fe_1.webp',
        'img/proyecto-comercial/tiendas/penguin_santa_fe_2.webp',
        'img/proyecto-comercial/tiendas/penguin_santa_fe_3.webp'
    ], descripcion:'Diseño moderno de tienda PENGUIN SANTA FE con estética atractiva.'},

    {categoria:'Comercial', sub:'tiendas', titulo:'DENTISTA NEZAHUALCOYOT', imagenes:[
        'img/proyecto-comercial/tiendas/dentista_nezahualcoyot_1.webp',
        'img/proyecto-comercial/tiendas/dentista_nezahualcoyot_2.webp',
        'img/proyecto-comercial/tiendas/dentista_nezahualcoyot_3.webp'
    ], descripcion:'Consultorio dental con diseño funcional y espacios bien distribuidos.'},



    {categoria:'Comercial', sub:'tiendas', titulo:'IBERO EDIFICIO E', imagenes:[
        'img/proyecto-comercial/tiendas/ibero_edificio_e_1.webp',
        'img/proyecto-comercial/tiendas/ibero_edificio_e_2.webp',
        'img/proyecto-comercial/tiendas/ibero_edificio_e_3.webp'
    ], descripcion:'Tienda ubicada en IBERO EDIFICIO E con diseño funcional y moderno.'},



    // Bares (3)
    {categoria:'Comercial', sub:'bares', titulo:'BAR EL SOL', imagenes:[
        'img/proyecto-comercial/bares/bar_el_sol_1.webp',
        'img/proyecto-comercial/bares/bar_el_sol_2.webp',
        'img/proyecto-comercial/bares/bar_el_sol_3.webp'
    ], descripcion:'Bar con ambiente moderno y acogedor.'},
    {categoria:'Comercial', sub:'bares', titulo:'BAR LA LUNA', imagenes:[
        'img/proyecto-comercial/bares/bar_la_luna_1.webp',
        'img/proyecto-comercial/bares/bar_la_luna_2.webp',
        'img/proyecto-comercial/bares/bar_la_luna_3.webp'
    ], descripcion:'Bar temático con diseño atractivo.'},
    {categoria:'Comercial', sub:'bares', titulo:'BAR ESTRELLA', imagenes:[
        'img/proyecto-comercial/bares/bar_estrella_1.webp',
        'img/proyecto-comercial/bares/bar_estrella_2.webp',
        'img/proyecto-comercial/bares/bar_estrella_3.webp'
    ], descripcion:'Ambiente sofisticado con iluminación cálida.'},

    // Restaurantes (1)
    {categoria:'Comercial', sub:'restaurantes', titulo:'HOYO 19 PARAISO', imagenes:[
        'img/proyecto-comercial/restaurantes/hoyo19_1.webp',
        'img/proyecto-comercial/restaurantes/hoyo19_2.webp',
        'img/proyecto-comercial/restaurantes/hoyo19_3.webp'
    ], descripcion:'Restaurante con ambiente natural y diseño abierto.'},

    // Oficinas (1)
    {categoria:'Comercial', sub:'oficinas', titulo:'OFICINA METEPEC', imagenes:[
        'img/proyecto-comercial/oficinas/metepec_1.webp',
        'img/proyecto-comercial/oficinas/metepec_2.webp',
        'img/proyecto-comercial/oficinas/metepec_3.webp'
    ], descripcion:'Oficina corporativa con interiores amplios y modernos.'},

    // Clínicas (4)
    {categoria:'Comercial', sub:'clinicas', titulo:'SKINAIRE', imagenes:[
        'img/proyecto-comercial/clinicas/skinaire_1.webp',
        'img/proyecto-comercial/clinicas/skinaire_2.webp',
        'img/proyecto-comercial/clinicas/skinaire_3.webp'
    ], descripcion:'Clínica dermatológica con diseño limpio y profesional.'},
    {categoria:'Comercial', sub:'clinicas', titulo:'ASA ORGANICS', imagenes:[
        'img/proyecto-comercial/clinicas/asa_organics_1.webp',
        'img/proyecto-comercial/clinicas/asa_organics_2.webp',
        'img/proyecto-comercial/clinicas/asa_organics_3.webp'
    ], descripcion:'Consultorio con estética natural y acabados orgánicos.'},
    {categoria:'Comercial', sub:'clinicas', titulo:'CONSULTORIOS HOSPITALES ANGELES', imagenes:[
        'img/proyecto-comercial/clinicas/hospitales_angeles_1.webp',
        'img/proyecto-comercial/clinicas/hospitales_angeles_2.webp',
        'img/proyecto-comercial/clinicas/hospitales_angeles_3.webp'
    ], descripcion:'Consultorios modernos con diseño funcional.'},
    {categoria:'Comercial', sub:'clinicas', titulo:'UROLOGO PEDREGAL', imagenes:[
        'img/proyecto-comercial/clinicas/urologo_pedregal_1.webp',
        'img/proyecto-comercial/clinicas/urologo_pedregal_2.webp',
        'img/proyecto-comercial/clinicas/urologo_pedregal_3.webp'
    ], descripcion:'Consultorio clínico con acabados profesionales.'},

    // Bodegas (2)
    {categoria:'Comercial', sub:'bodegas', titulo:'SPX FLOW', imagenes:[
        'img/proyecto-comercial/bodegas/spx_flow_1.webp',
        'img/proyecto-comercial/bodegas/spx_flow_2.webp',
        'img/proyecto-comercial/bodegas/spx_flow_3.webp'
    ], descripcion:'Nave industrial moderna y eficiente.'},
    {categoria:'Comercial', sub:'bodegas', titulo:'RANCHO DE GUADALUPE', imagenes:[
        'img/proyecto-comercial/bodegas/rancho_guadalupe_1.webp',
        'img/proyecto-comercial/bodegas/rancho_guadalupe_2.webp',
        'img/proyecto-comercial/bodegas/rancho_guadalupe_3.webp'
    ], descripcion:'Espacio logístico con estructura resistente y ventilación natural.'},


    // ---- HABITACIONAL ----
    // Interés social
    {categoria:'Habitacional', sub:'interes-social', titulo:'TLALMANALCO', imagenes:[
        'img/proyectos-habitacional/interes-social/tlalmanalco_1.webp',
        'img/proyectos-habitacional/interes-social/tlalmanalco_2.webp',
        'img/proyectos-habitacional/interes-social/tlalmanalco_3.webp'
    ], descripcion:'Residencia de interés social con diseño funcional y espacios bien distribuidos.'},

    {categoria:'Habitacional', sub:'interes-social', titulo:'CHALCO', imagenes:[
        'img/proyectos-habitacional/interes-social/chalco_1.webp',
        'img/proyectos-habitacional/interes-social/chalco_2.webp',
        'img/proyectos-habitacional/interes-social/chalco_3.webp'
    ], descripcion:'Vivienda accesible con distribución eficiente y diseño compacto.'},

    {categoria:'Habitacional', sub:'interes-social', titulo:'UNIDAD MAGISTERIAL', imagenes:[
        'img/proyectos-habitacional/interes-social/unidad_magisterial_1.webp',
        'img/proyectos-habitacional/interes-social/unidad_magisterial_2.webp',
        'img/proyectos-habitacional/interes-social/unidad_magisterial_3.webp'
    ], descripcion:'Vivienda de interés social con distribución optimizada y diseño práctico.'},

    {categoria:'Habitacional', sub:'interes-social', titulo:'JICURI', imagenes:[
        'img/proyectos-habitacional/interes-social/jicuri_1.webp',
        'img/proyectos-habitacional/interes-social/jicuri_2.webp',
        'img/proyectos-habitacional/interes-social/jicuri_3.webp'
    ], descripcion:'Residencia de interés social con enfoque en funcionalidad y comodidad.'},

    {categoria:'Habitacional', sub:'interes-social', titulo:'CASA MIGUEL LICENCIA DE CONST', imagenes:[
        'img/proyectos-habitacional/interes-social/casa_miguel_2.webp',
        'img/proyectos-habitacional/interes-social/casa_miguel_1.webp',
        'img/proyectos-habitacional/interes-social/casa_miguel_3.webp'
    ], descripcion:'Casa de interés social con estructura eficiente y diseño práctico.'},

    {categoria:'Habitacional', sub:'interes-social', titulo:'CASA BARRETO', imagenes:[
       'img/proyectos-habitacional/interes-social/casa_barreto_1.webp',
        'img/proyectos-habitacional/interes-social/casa_barreto_2.webp',
        'img/proyectos-habitacional/interes-social/casa_barreto_3.webp'
    ], descripcion:'Vivienda de interés social con distribución optimizada y estética sencilla.'},

    {categoria:'Habitacional', sub:'interes-social', titulo:'BAÑO NAYARI', imagenes:[
        'img/proyectos-habitacional/interes-social/bañon/bañon.webp',
        'img/proyectos-habitacional/interes-social/bañon/bañon2.webp',
        'img/proyectos-habitacional/interes-social/baño_nayari_3.webp'
    ], descripcion:'Residencia de interés social con diseño funcional.'},

    {categoria:'Habitacional', sub:'interes-social', titulo:'NAYARIT', imagenes:[
        'img/proyectos-habitacional/interes-social/nayarit_1.webp',
        'img/proyectos-habitacional/interes-social/nayarit_2.webp',
        'img/proyectos-habitacional/interes-social/nayarit_3.webp'
    ], descripcion:'Vivienda de interés social con distribución optimizada.'},



    // ---- HABITACIONAL ----
    // Interés medio
    {categoria:'Habitacional', sub:'interes-medio', titulo:'RESIDENCIAL VARGAS', imagenes:[
        'img/proyectos-habitacional/interes-medio/residencial_vargas_1.webp',
        'img/proyectos-habitacional/interes-medio/residencial_vargas_2.webp',
        'img/proyectos-habitacional/interes-medio/residencial_vargas_3.webp'
    ], descripcion:'Casa de interés medio con buena iluminación y espacios amplios.'},

    {categoria:'Habitacional', sub:'interes-medio', titulo:'CASA SAN PEDRO', imagenes:[
        'img/proyectos-habitacional/interes-medio/casa_san_pedro_1.webp',
        'img/proyectos-habitacional/interes-medio/casa_san_pedro_2.webp',
        'img/proyectos-habitacional/interes-medio/casa_san_pedro_3.webp'
    ], descripcion:'Vivienda funcional y moderna con distribución eficiente.'},

    {categoria:'Habitacional', sub:'interes-medio', titulo:'CHICHEWA', imagenes:[
        'img/proyectos-habitacional/interes-medio/chichewa_1.webp',
        'img/proyectos-habitacional/interes-medio/chichewa_2.webp',
        'img/proyectos-habitacional/interes-medio/chichewa_3.webp'
    ], descripcion:'Casa de interés medio con diseño compacto y eficiente.'},

    {categoria:'Habitacional', sub:'interes-medio', titulo:'GARCIA DE LEON', imagenes:[
        'img/proyectos-habitacional/interes-medio/garcia_de_leon_1.webp',
        'img/proyectos-habitacional/interes-medio/garcia_de_leon_2.webp',
        'img/proyectos-habitacional/interes-medio/garcia_de_leon_3.webp'
    ], descripcion:'Residencia de interés medio con espacios bien aprovechados.'},

    {categoria:'Habitacional', sub:'interes-medio', titulo:'RESIDENCIAL ACOZAC', imagenes:[
        'img/proyectos-habitacional/interes-medio/residencial_acozac_1.webp',
        'img/proyectos-habitacional/interes-medio/residencial_acozac_2.webp',
        'img/proyectos-habitacional/interes-medio/residencial_acozac_3.webp'
    ], descripcion:'Casa de interés medio con diseño contemporáneo y funcional.'},

    {categoria:'Habitacional', sub:'interes-medio', titulo:'CASA GONZALEZ', imagenes:[
        'img/proyectos-habitacional/interes-medio/casa_gonzalez_1.webp',
        'img/proyectos-habitacional/interes-medio/casa_gonzalez_2.webp',
        'img/proyectos-habitacional/interes-medio/casa_gonzalez_3.webp'
    ], descripcion:'Vivienda de interés medio con diseño funcional y distribución eficiente.'},

    {categoria:'Habitacional', sub:'interes-medio', titulo:'RESIDENCIAL ARBOLADAS', imagenes:[
        'img/proyectos-habitacional/interes-medio/residencial_arboladas_1.webp',
        'img/proyectos-habitacional/interes-medio/residencial_arboladas_2.webp',
        'img/proyectos-habitacional/interes-medio/residencial_arboladas_3.webp'
    ], descripcion:'Conjunto habitacional de interés medio con espacios bien aprovechados.'},

    {categoria:'Habitacional', sub:'interes-medio', titulo:'INDUSTRIA 24', imagenes:[
        'img/proyectos-habitacional/interes-medio/industria_24_1.webp',
        'img/proyectos-habitacional/interes-medio/industria_24_2.webp',
        'img/proyectos-habitacional/interes-medio/industria_24_3.webp'
    ], descripcion:'Vivienda de interés medio con diseño contemporáneo y funcional.'},

    {categoria:'Habitacional', sub:'interes-medio', titulo:'TLAYACAPA', imagenes:[
        'img/proyectos-habitacional/interes-medio/tlayacapa_1.webp',
        'img/proyectos-habitacional/interes-medio/tlayacapa_2.webp',
        'img/proyectos-habitacional/interes-medio/tlayacapa_3.webp'
    ], descripcion:'Casa de interés medio con distribución eficiente y espacios iluminados.'},


    // ---- HABITACIONAL ----
    // Residencial / Interés alto
    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'CASA PARAISO', imagenes:[
        'img/proyectos-habitacional/interes-alto/casa_paraiso_1.webp',
        'img/proyectos-habitacional/interes-alto/casa_paraiso_2.webp',
        'img/proyectos-habitacional/interes-alto/casa_paraiso_3.webp'
    ], descripcion:'Residencia con iluminación natural y diseño moderno.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'CASA AMAZONAS', imagenes:[
        'img/proyectos-habitacional/interes-alto/casa_amazonas_1.webp',
        'img/proyectos-habitacional/interes-alto/casa_amazonas_2.webp',
        'img/proyectos-habitacional/interes-alto/casa_amazonas_3.webp'
    ], descripcion:'Diseño contemporáneo con espacios amplios.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'CASA PIRULES', imagenes:[
        'img/proyectos-habitacional/interes-alto/casa_pirules_1.webp',
        'img/proyectos-habitacional/interes-alto/casa_pirule_2.webp',
        'img/proyectos-habitacional/interes-alto/casa_pirulses_3.webp'
    ], descripcion:'Residencia minimalista rodeada de vegetación.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'CASA GALLEGOS', imagenes:[
        'img/proyectos-habitacional/interes-alto/casa_gallegos_1.webp',
        'img/proyectos-habitacional/interes-alto/casa_gallegos_2.webp',
        'img/proyectos-habitacional/interes-alto/casa_gallegos_3.webp'
    ], descripcion:'Casa de lujo con acabados modernos y espacios amplios.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'CASA SANTA CRUZ', imagenes:[
        'img/proyectos-habitacional/interes-alto/casa_santa_cruz_1.webp',
        'img/proyectos-habitacional/interes-alto/casa_santa_cruz_2.webp',
        'img/proyectos-habitacional/interes-alto/casa_santa_cruz_3.webp'
    ], descripcion:'Residencia elegante con diseño arquitectónico contemporáneo.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'CASA BARRETO', imagenes:[
        'img/proyectos-habitacional/interes-alto/casa_barreto_1.webp',
        'img/proyectos-habitacional/interes-alto/casa_barreto_2.webp',
        'img/proyectos-habitacional/interes-alto/casa_barreto_3.webp'
    ], descripcion:'Residencia de alto nivel con espacios integrados y modernos.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'KASSING HOME', imagenes:[
        'img/proyectos-habitacional/interes-alto/kassing_home_1.webp',
        'img/proyectos-habitacional/interes-alto/kassing_home_2.webp',
        'img/proyectos-habitacional/interes-alto/kassing_home_3.webp'
    ], descripcion:'Casa de lujo con diseño innovador y materiales de primera.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'VIADUCTO', imagenes:[
        'img/proyectos-habitacional/interes-alto/viaducto_1.webp',
        'img/proyectos-habitacional/interes-alto/viaducto_2.webp',
        'img/proyectos-habitacional/interes-alto/viaducto_3.webp'
    ], descripcion:'Residencia moderna con espacios abiertos y excelente iluminación.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'TOTOTONTLI', imagenes:[
        'img/proyectos-habitacional/interes-alto/tototontli_1.webp',
        'img/proyectos-habitacional/interes-alto/tototontli_2.webp',
        'img/proyectos-habitacional/interes-alto/tototontli_3.webp'
    ], descripcion:'Residencia de alto nivel con diseño moderno y funcional.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'TOHO', imagenes:[
        'img/proyectos-habitacional/interes-alto/toho_1.webp',
        'img/proyectos-habitacional/interes-alto/toho_2.webp',
        'img/proyectos-habitacional/interes-alto/toho_3.webp'
    ], descripcion:'Casa residencial con diseño contemporáneo y espacios amplios.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'CASA RESIDENCIAL SANTA CRUZ', imagenes:[
        'img/proyectos-habitacional/residencial/interes-alto/casa_residencial_santa_cruz_1.webp',
        'img/proyectos-habitacional/residencial/interes-alto/casa_residencial_santa_cruz_2.webp',
        'img/proyectos-habitacional/residencial/interes-alto/casa_residencial_santa_cruz_3.webp'
    ], descripcion:'Residencia elegante con diseño arquitectónico contemporáneo.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'MURO ALVEOLAR', imagenes:[
        'img/proyectos-habitacional/residencial/interes-alto/muro_alveolar_1.webp',
        'img/proyectos-habitacional/residencial/interes-alto/muro_alveolar_2.webp',
        'img/proyectos-habitacional/residencial/interes-alto/muro_alveolar_3.webp'
    ], descripcion:'Residencia de lujo con acabados modernos y espacios integrados.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'XAHA', imagenes:[
        'img/proyectos-habitacional/residencial/interes-alto/xaha_1.webp',
        'img/proyectos-habitacional/residencial/interes-alto/xaha_2.webp',
        'img/proyectos-habitacional/residencial/interes-alto/xaha_3.webp'
    ], descripcion:'Casa moderna con diseño innovador y materiales de primera calidad.'},

    {categoria:'Habitacional', sub:'residencial/interes-alto', titulo:'REMODELACION TULE 20', imagenes:[
        'img/proyectos-habitacional/residencial/interes-alto/remodelacion_tule_20_1.webp',
        'img/proyectos-habitacional/residencial/interes-alto/remodelacion_tule_20_2.webp',
        'img/proyectos-habitacional/residencial/interes-alto/remodelacion_tule_20_3.webp'
    ], descripcion:'Proyecto de remodelación residencial con diseño contemporáneo y funcional.'},


    // Edificios / Departamentos (8)
    {categoria:'Habitacional', sub:'edificios', titulo:'DEPARTAMENTO LOMA BONITA', imagenes:[
    'img/proyectos-habitacional/edificios/departamento_loma_bonita_1.webp',
    'img/proyectos-habitacional/edificios/departamento_loma_bonita_2.webp',
    'img/proyectos-habitacional/edificios/departamento_loma_bonita_3.webp'
    ], descripcion:'Diseño funcional en edificio residencial moderno.'},
    {categoria:'Habitacional', sub:'edificios', titulo:'HERIBERTO FARIAS', imagenes:[
    'img/proyectos-habitacional/edificios/heriberto_farias_1.webp',
    'img/proyectos-habitacional/edificios/heriberto_farias_2.webp',
    'img/proyectos-habitacional/edificios/heriberto_farias_3.webp'
    ], descripcion:'Departamento urbano con diseño elegante.'},
    
    {categoria:'Habitacional', sub:'edificios', titulo:'HERNAN 403 F', imagenes:[
        'img/proyectos-habitacional/edificios/hernan_403f_1.webp',
        'img/proyectos-habitacional/edificios/hernan_403f_2.webp',
        'img/proyectos-habitacional/edificios/hernan_403f_3.webp'
    ], descripcion:'Edificio de departamentos con diseño moderno y funcional.'},

    {categoria:'Habitacional', sub:'edificios', titulo:'XOXHIMILCO', imagenes:[
        'img/proyectos-habitacional/edificios/xoxhimilco_1.webp',
        'img/proyectos-habitacional/edificios/xoxhimilco_2.webp',
        'img/proyectos-habitacional/edificios/xoxhimilco_3.webp'
    ], descripcion:'Edificio residencial con interiores amplios y bien iluminados.'},

    {categoria:'Habitacional', sub:'edificios', titulo:'VIA ROMA', imagenes:[
        'img/proyectos-habitacional/edificios/via_roma_1.webp',
        'img/proyectos-habitacional/edificios/via_roma_2.webp',
        'img/proyectos-habitacional/edificios/via_roma_3.webp'
    ], descripcion:'Departamento en edificio con diseño contemporáneo y funcional.'},

    {categoria:'Habitacional', sub:'edificios', titulo:'CONDOMINIO JOSE DE LA MORA', imagenes:[
        'img/proyectos-habitacional/edificios/condominio_jose_mora_1.webp',
        'img/proyectos-habitacional/edificios/condominio_jose_mora_2.webp',
        'img/proyectos-habitacional/edificios/condominio_jose_mora_3.webp'
    ], descripcion:'Condominio moderno con áreas comunes y diseño eficiente.'},

    {categoria:'Habitacional', sub:'edificios', titulo:'CONDOMINIO TIERRA Y LIBERTAD', imagenes:[
        'img/proyectos-habitacional/edificios/condominio_tierra_libertad_1.webp',
        'img/proyectos-habitacional/edificios/condominio_tierra_libertad_2.webp',
        'img/proyectos-habitacional/edificios/edificio_tierra_libertad_3.webp'
    ], descripcion:'Conjunto habitacional moderno y funcional.'},

    {categoria:'Habitacional', sub:'edificios', titulo:'MULTIFAMILIAR ROSA MARIA', imagenes:[
        'img/proyectos-habitacional/edificios/multifamiliar_rosa_maria_1.webp',
        'img/proyectos-habitacional/edificios/multifamiliar_rosa_maria_2.webp',
        'img/proyectos-habitacional/edificios/multifamiliar_rosa_maria_3.webp'
    ], descripcion:'Edificio multifamiliar con amplias áreas comunes y diseño contemporáneo.'},

    {categoria:'Habitacional', sub:'edificios', titulo:'ADOLFO PRIETO 78º', imagenes:[
        'img/proyectos-habitacional/edificios/adolfo_prieto_78_1.webp',
        'img/proyectos-habitacional/edificios/adolfo_prieto_78_2.webp',
        'img/proyectos-habitacional/edificios/adolfo_prieto_78_3.webp'
    ], descripcion:'Departamento en edificio urbano con diseño elegante y funcional.'}

    // Continuar con los demás edificios y casas hasta completar los 70 proyectos
];


// --- Filtrar proyectos por subcategoría ---
    const subBtns = document.querySelectorAll('.subcategoria-btn');
    subBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sub = btn.textContent.trim().toLowerCase();
            proyectosFiltradosContainer.innerHTML = '';

            const filtrados = proyectos.filter(p => p.sub.toLowerCase() === sub);

            if (filtrados.length === 0) {
                proyectosFiltradosContainer.innerHTML = `<p class="no-proyectos">No hay proyectos en esta subcategoría.</p>`;
                return;
            }

            filtrados.forEach(p => {
                const div = document.createElement('div');
                div.classList.add('proyecto-item');
                div.innerHTML = `
                    <img src="${p.imagenes[0]}" alt="${p.titulo}" loading="lazy">
                    <div class="descripcion">
                        <h4>${p.titulo}</h4>
                        <p>${p.descripcion}</p>
                    </div>
                `;

                // --- Rotación de miniaturas ---
                let indice = 0;
                const imgElement = div.querySelector('img');
                setInterval(() => {
                    indice = (indice + 1) % p.imagenes.length;
                    imgElement.src = p.imagenes[indice];
                }, 3000);

                // Animación
                div.style.opacity = 0;
                proyectosFiltradosContainer.appendChild(div);
                anime({
                    targets: div,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 600,
                    easing: 'easeOutExpo'
                });

                div.addEventListener('click', () => abrirModal(p));
            });
        });
    });

    // --- Modal de información ---
    const modal = document.createElement('div');
    modal.id = 'modal-proyecto';
    modal.innerHTML = `
        <div class="modal-contenido">
            <span class="close-modal">&times;</span>
            <h3 id="modal-titulo"></h3>
            <img id="modal-img" src="" alt="" style="width:100%; margin:1rem 0;">
            <p id="modal-descripcion"></p>
        </div>
    `;
    document.body.appendChild(modal);

    const modalTitulo = document.getElementById('modal-titulo');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-descripcion');
    const closeModalBtn = modal.querySelector('.close-modal');

    const abrirModal = (proyecto) => {
        modalTitulo.textContent = proyecto.titulo;
        modalImg.src = proyecto.imagenes[0];
        modalImg.alt = proyecto.titulo;
        modalDesc.textContent = proyecto.descripcion;
        modal.style.display = 'flex';
    };

    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });

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
});
