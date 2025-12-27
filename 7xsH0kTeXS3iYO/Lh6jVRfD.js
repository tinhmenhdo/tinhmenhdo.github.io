import{c as createComponent,a as renderTemplate}from"./BPuuDqkP.js";import"piccolore";import"clsx";const $$StylePopup=createComponent(((t,o,r)=>renderTemplate`<style>
  /* Thêm style cho SweetAlert2 */
  .swal2-container {
    z-index: 9999;
  }

  .swal2-popup {
    font-size: 1rem !important;
    background: #ffffff !important;
    backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    border-radius: 20px !important;
    padding: 2rem !important;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) !important;
  }

  .swal2-backdrop-show {
    background: rgba(255, 255, 255, 0.8) !important;
    backdrop-filter: blur(5px) !important;
  }

  .swal2-title {
    font-size: 1.8rem !important;
    color: #2c3e50 !important;
    font-weight: 600 !important;
    text-shadow: none !important;
  }

  .swal2-html-container {
    font-size: 1.1rem !important;
    color: #34495e !important;
    margin-top: 1.5rem !important;
    line-height: 1.6 !important;
  }

  .swal2-confirm,
  .swal2-cancel {
    font-size: 1.1rem !important;
    padding: 0.8rem 2rem !important;
    border-radius: 30px !important;
    font-weight: 500 !important;
    transition: all 0.3s ease !important;
    border: 2px solid transparent !important;
  }

  .swal2-confirm {
    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%) !important;
    color: #fff !important;
  }

  .swal2-confirm:hover {
    background: transparent !important;
    border-color: #3498db !important;
    color: #3498db !important;
    box-shadow: 0 0 15px rgba(52, 152, 219, 0.4) !important;
  }

  .swal2-cancel {
    background: #ecf0f1 !important;
    color: #2c3e50 !important;
  }

  .swal2-cancel:hover {
    background: #bdc3c7 !important;
    box-shadow: 0 0 15px rgba(189, 195, 199, 0.4) !important;
  }

  /* Custom animations */
  @keyframes swal2-show {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Hiệu ứng cho backdrop */
  .swal2-backdrop-show {
    background: rgba(0, 0, 0, 0.8) !important;
    backdrop-filter: blur(5px) !important;
    animation: swal2-backdrop-in 0.5s ease-out !important;
  }

  @keyframes swal2-backdrop-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Custom style cho links trong popup */
  .swal2-html-container a {
    color: #3498db !important;
    text-decoration: none !important;
    transition: all 0.3s ease !important;
    position: relative !important;
  }

  .swal2-html-container a:hover {
    color: #2980b9 !important;
    text-shadow: none !important;
  }

  .swal2-html-container a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background: linear-gradient(90deg, #3498db, #2980b9);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  .swal2-html-container a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  /* Style cho images trong popup */
  .swal2-html-container img {
    border-radius: 10px !important;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3) !important;
    transition: transform 0.3s ease !important;
  }

  .swal2-html-container img:hover {
    transform: scale(1.02) !important;
  }

  /* Custom scrollbar cho popup */
  .swal2-html-container::-webkit-scrollbar {
    width: 8px;
  }

  .swal2-html-container::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  .swal2-html-container::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
    border-radius: 4px;
  }

  /* Style cho dark mode */
  .dark .swal2-popup {
    background: #9c9c9c !important;
    box-shadow: 0 0 30px rgba(245, 176, 66, 0.1) !important;
  }

  .dark .swal2-title,
  .dark .swal2-html-container {
    color: #fff !important;
  }

  .konvajs-content canvas {
    font-family: 'Roboto Slab', serif;
  }
</style>`),"/root/code/tmd_astro/src/components/StylePopup.astro",void 0);export{$$StylePopup as $};