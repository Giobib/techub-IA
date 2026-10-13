
import * as THREE from 'three';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.164.1/examples/jsm/loaders/GLTFLoader.js';

// ========================================
// CONFIGURAÇÕES
// ========================================

// Este elemento deve existir no HTML.
// Se o seu canvas tiver outro ID, ajuste aqui.
const container = document.getElementById('arduino-3d');

if (!container) {
    console.error('Não encontrei o elemento #arduino-3d no HTML.');
} else {
    // Cena
    const scene = new THREE.Scene();
    scene.background = null;

    // Câmera
    const camera = new THREE.PerspectiveCamera(
        35,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );

    camera.position.set(0, 3.5, 8);
    camera.lookAt(0, 0, 0);

    // Renderizador
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // ========================================
    // ILUMINAÇÃO
    // ========================================

    scene.add(new THREE.AmbientLight(0xffffff, 2));

    const luzPrincipal = new THREE.DirectionalLight(0xffffff, 3);
    luzPrincipal.position.set(5, 8, 6);
    scene.add(luzPrincipal);

    const luzFrontal = new THREE.DirectionalLight(0x65e6e0, 1.5);
    luzFrontal.position.set(-5, 3, 4);
    scene.add(luzFrontal);

    const luzTraseira = new THREE.DirectionalLight(0xffffff, 2);
    luzTraseira.position.set(0, 5, -6);
    scene.add(luzTraseira);

    // Grupo que permite girar o modelo
    const boardGroup = new THREE.Group();
    scene.add(boardGroup);

    // ========================================
    // CARREGAR MODELO GLB
    // ========================================

    const loader = new GLTFLoader();

    loader.load(
        './modelos/arduino/Arduino%20UNO%20sketchfab.glb',

        (gltf) => {
            const arduino = gltf.scene;

            // Centraliza o modelo na origem
            const caixaInicial = new THREE.Box3().setFromObject(arduino);
            const centro = caixaInicial.getCenter(new THREE.Vector3());

            arduino.position.sub(centro);

            // Calcula o tamanho do modelo
            const tamanho = caixaInicial.getSize(new THREE.Vector3());

            const maiorDimensao = Math.max(
                tamanho.x,
                tamanho.y,
                tamanho.z
            );

            // Normaliza a escala para facilitar o enquadramento
            if (maiorDimensao > 0) {
                arduino.scale.setScalar(4 / maiorDimensao);
            }

            // Permite que o modelo receba sombras e luzes
            arduino.traverse((objeto) => {
                if (objeto.isMesh) {
                    objeto.castShadow = true;
                    objeto.receiveShadow = true;
                }
            });

            boardGroup.add(arduino);

            // Inclinação inicial
            boardGroup.rotation.x = -0.25;
            boardGroup.rotation.y = -0.45;

            console.log('Modelo Arduino carregado!');
        },

        (progresso) => {
            if (progresso.total > 0) {
                const porcentagem =
                    (progresso.loaded / progresso.total) * 100;

                console.log(
                    `Carregando Arduino: ${porcentagem.toFixed(0)}%`
                );
            }
        },

        (erro) => {
            console.error('Erro ao carregar o modelo 3D:', erro);
        }
    );

    // ========================================
    // INTERAÇÃO COM O MOUSE
    // ========================================

    let mouseX = 0;
    let mouseY = 0;

    let rotacaoX = -0.25;
    let rotacaoY = -0.45;

    let arrastando = false;
    let ultimoX = 0;
    let ultimoY = 0;

    container.addEventListener('pointermove', (evento) => {
        const rect = container.getBoundingClientRect();

        mouseX = (
            (evento.clientX - rect.left) / rect.width
        ) * 2 - 1;

        mouseY = (
            (evento.clientY - rect.top) / rect.height
        ) * 2 - 1;

        if (arrastando) {
            const movimentoX = evento.clientX - ultimoX;
            const movimentoY = evento.clientY - ultimoY;

            rotacaoY += movimentoX * 0.01;
            rotacaoX += movimentoY * 0.01;

            rotacaoX = Math.max(
                -Math.PI / 2,
                Math.min(Math.PI / 2, rotacaoX)
            );

            ultimoX = evento.clientX;
            ultimoY = evento.clientY;
        }
    });

    container.addEventListener('pointerdown', (evento) => {
        arrastando = true;

        ultimoX = evento.clientX;
        ultimoY = evento.clientY;

        container.setPointerCapture(evento.pointerId);
    });

    container.addEventListener('pointerup', () => {
        arrastando = false;
    });

    container.addEventListener('pointercancel', () => {
        arrastando = false;
    });

    // ========================================
    // BOTÃO PARA REDEFINIR A ROTAÇÃO
    // ========================================

    const botaoReset = document.getElementById('reset-arduino');

    if (botaoReset) {
        botaoReset.addEventListener('click', () => {
            rotacaoX = -0.25;
            rotacaoY = -0.45;
        });
    }

    // ========================================
    // ANIMAÇÃO
    // ========================================

    function animar() {
        requestAnimationFrame(animar);

        if (!arrastando) {
            // Acompanha suavemente a posição do mouse
            const alvoY = -0.45 + mouseX * 0.35;
            const alvoX = -0.25 + mouseY * 0.2;

            rotacaoY += (alvoY - rotacaoY) * 0.035;
            rotacaoX += (alvoX - rotacaoX) * 0.035;
        }

        boardGroup.rotation.x +=
            (rotacaoX - boardGroup.rotation.x) * 0.12;

        boardGroup.rotation.y +=
            (rotacaoY - boardGroup.rotation.y) * 0.12;

        renderer.render(scene, camera);
    }

    animar();

    // ========================================
    // REDIMENSIONAMENTO
    // ========================================

    function redimensionar() {
        const largura = container.clientWidth;
        const altura = container.clientHeight;

        if (!largura || !altura) return;

        camera.aspect = largura / altura;
        camera.updateProjectionMatrix();

        renderer.setSize(largura, altura);
    }

    window.addEventListener('resize', redimensionar);
}
