import React from "react";

const Logo = ({...props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="123"
      height="40"
      fill="none"
      viewBox="0 0 123 40"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.845 24.312H.121L3.081 0h5.294l5.832 17.771L20.02 0h5.295l2.976 24.33h-4.741L21.786 7.51l-5.52 16.802h-4.067L6.68 7.51 4.845 24.312zM45.25 6.178h3.842v18.134h-3.859l-.311-2.128a7.758 7.758 0 01-2.44 1.886c-.934.45-1.978.675-3.132.675a8.74 8.74 0 01-4.568-1.263 9.421 9.421 0 01-3.323-3.444c-.819-1.453-1.228-3.045-1.228-4.776 0-1.73.41-3.316 1.228-4.758.83-1.454 1.944-2.602 3.34-3.444a8.562 8.562 0 014.55-1.28c1.178 0 2.233.23 3.168.692a7.588 7.588 0 012.457 1.903l.277-2.197zm-5.52 14.38c.958 0 1.835-.226 2.63-.675a5.102 5.102 0 001.887-1.887c.461-.807.692-1.713.692-2.716 0-1.004-.23-1.91-.692-2.717a5.029 5.029 0 00-1.886-1.92 5.15 5.15 0 00-2.63-.693c-.946 0-1.812.23-2.596.692a4.943 4.943 0 00-1.852 1.92c-.45.808-.674 1.714-.674 2.718 0 1.003.224 1.909.674 2.716a4.888 4.888 0 001.835 1.887c.784.45 1.655.674 2.613.674zM74.301 5.728c1.35 0 2.532.3 3.548.9 1.015.6 1.8 1.476 2.353 2.63.554 1.153.83 2.538.83 4.153v10.901H76.62v-10.33c0-1.304-.311-2.319-.934-3.046-.612-.726-1.454-1.09-2.527-1.09-.727 0-1.384.196-1.972.588a4.097 4.097 0 00-1.367 1.592 4.663 4.663 0 00-.502 2.146v10.14h-4.413v-10.33c0-1.304-.311-2.319-.934-3.046-.612-.726-1.454-1.09-2.527-1.09-.726 0-1.384.196-1.972.588a4.043 4.043 0 00-1.385 1.592 4.663 4.663 0 00-.502 2.146v10.14h-4.412V6.178h3.79l.242 1.868a7.208 7.208 0 012.457-1.713 7.463 7.463 0 012.924-.605c1.27 0 2.394.265 3.375.796.98.53 1.753 1.303 2.319 2.318a6.818 6.818 0 012.63-2.284c1.096-.553 2.226-.83 3.391-.83zM92.913 24.814c-1.753 0-3.363-.42-4.828-1.263a9.614 9.614 0 01-3.46-3.444c-.843-1.453-1.264-3.045-1.264-4.775 0-1.743.421-3.346 1.263-4.811a9.357 9.357 0 013.479-3.46c1.465-.855 3.08-1.281 4.845-1.281 1.765 0 3.38.426 4.845 1.28a9.358 9.358 0 013.461 3.478c.853 1.454 1.28 3.051 1.28 4.793 0 1.73-.427 3.323-1.28 4.776a9.23 9.23 0 01-3.479 3.444c-1.465.842-3.085 1.263-4.862 1.263zm.035-4.153c.957 0 1.828-.23 2.613-.692a5.158 5.158 0 001.886-1.938c.461-.82.692-1.725.692-2.717 0-1.004-.23-1.915-.692-2.734a5.157 5.157 0 00-1.886-1.938 5.022 5.022 0 00-2.613-.71c-.958 0-1.835.237-2.63.71a5.2 5.2 0 00-1.87 1.938c-.46.82-.692 1.73-.692 2.734s.231 1.915.693 2.734a5.237 5.237 0 001.868 1.921 5.151 5.151 0 002.63.692zM115.564 5.78c1.454 0 2.717.311 3.79.934 1.084.611 1.921 1.505 2.509 2.682.588 1.165.882 2.561.882 4.188v10.728h-4.429v-9.95c0-1.43-.352-2.537-1.056-3.322-.692-.784-1.661-1.177-2.907-1.177a4.484 4.484 0 00-3.894 2.18 4.302 4.302 0 00-.588 2.216v10.053h-4.412V6.178h3.789l.294 2.353c.669-.82 1.558-1.482 2.665-1.99 1.108-.508 2.227-.761 3.357-.761zM0 30.26v7.571h1.244v-2.595H2.79c.714 0 1.309-.238 1.785-.714.486-.487.724-1.07.724-1.774 0-.703-.238-1.298-.724-1.774-.476-.475-1.07-.713-1.785-.713H0zm1.244 3.808v-2.64H2.79c.736 0 1.266.552 1.266 1.32s-.53 1.32-1.266 1.32H1.244zM8.476 37.972c.8 0 1.47-.27 2.022-.822a2.75 2.75 0 00.833-2.023c0-.8-.281-1.47-.833-2.022-.551-.552-1.222-.822-2.022-.822-.79 0-1.471.27-2.023.822a2.75 2.75 0 00-.833 2.022c0 .8.282 1.471.833 2.023.552.551 1.233.822 2.023.822zm-1.2-1.623c-.325-.324-.487-.735-.487-1.222 0-.486.162-.897.486-1.222a1.631 1.631 0 011.2-.486c.477 0 .877.162 1.201.486.325.325.487.736.487 1.222 0 .487-.162.898-.487 1.222a1.631 1.631 0 01-1.2.487c-.476 0-.876-.162-1.2-.486zM17.345 36.155l-1.124-3.731h-1.114l-1.136 3.73-1.049-3.73h-1.233l1.698 5.407h1.146l1.136-3.645 1.125 3.645h1.146l1.698-5.407h-1.233l-1.06 3.73zM25.51 35.625c.033-.206.044-.368.044-.487 0-.79-.26-1.47-.768-2.022-.508-.552-1.157-.833-1.947-.833-.832 0-1.524.27-2.054.822-.53.54-.8 1.211-.8 2.022 0 .822.27 1.504.81 2.044.541.53 1.255.8 2.131.8 1.049 0 1.839-.389 2.369-1.178l-.963-.562c-.314.443-.779.67-1.395.67-.898 0-1.558-.454-1.73-1.276h4.304zm-4.314-.952c.162-.822.767-1.33 1.633-1.33.767 0 1.384.454 1.546 1.33h-3.18zM27.75 32.424h-1.168v5.407h1.168v-2.725c0-.552.162-.952.497-1.19a1.69 1.69 0 011.168-.324v-1.266c-.81 0-1.373.336-1.665 1.006v-.908zM35.249 35.625c.032-.206.043-.368.043-.487 0-.79-.26-1.47-.768-2.022-.508-.552-1.157-.833-1.947-.833-.832 0-1.525.27-2.055.822-.53.54-.8 1.211-.8 2.022 0 .822.27 1.504.811 2.044.541.53 1.255.8 2.13.8 1.05 0 1.84-.389 2.37-1.178l-.963-.562c-.314.443-.779.67-1.395.67-.898 0-1.558-.454-1.73-1.276h4.304zm-4.316-.952c.163-.822.768-1.33 1.633-1.33.768 0 1.385.454 1.547 1.33h-3.18zM40.57 33.191c-.443-.605-1.07-.908-1.892-.908-.746 0-1.373.27-1.903.822-.53.552-.79 1.222-.79 2.022 0 .79.26 1.471.79 2.023.53.551 1.157.822 1.903.822.822 0 1.45-.303 1.893-.92v.78h1.168V30.26H40.57v2.93zm-2.93 3.18c-.325-.335-.487-.746-.487-1.244 0-.497.162-.908.487-1.233.324-.335.735-.497 1.222-.497s.898.162 1.222.498c.324.324.487.735.487 1.232 0 .498-.163.909-.487 1.244-.324.325-.735.487-1.222.487s-.898-.162-1.222-.487zM48.865 32.283c-.822 0-1.45.303-1.893.908v-2.93h-1.168v7.57h1.168v-.779c.443.617 1.07.92 1.893.92.746 0 1.373-.27 1.903-.822.53-.552.79-1.233.79-2.023 0-.8-.26-1.47-.79-2.022-.53-.552-1.157-.822-1.903-.822zm-1.406 4.088c-.325-.335-.487-.746-.487-1.244 0-.497.162-.908.487-1.233.324-.335.735-.497 1.222-.497.486 0 .897.162 1.222.498.324.324.487.735.487 1.232 0 .498-.163.909-.487 1.244-.325.325-.736.487-1.222.487-.487 0-.898-.162-1.222-.487zM54.665 36.35l-1.611-3.926h-1.276l2.293 5.31-.055.108c-.292.746-.703 1.103-1.438 1.06v1.092c1.244.076 2.12-.595 2.639-1.99l2.076-5.58H56.05l-1.385 3.925zM60.727 35.322c0 .811.27 1.45.8 1.936.53.476 1.223.714 2.066.714.844 0 1.536-.238 2.066-.714.53-.487.8-1.125.8-1.936v-5.061h-1.243v4.985c0 .92-.54 1.514-1.622 1.514s-1.623-.594-1.623-1.514v-4.985h-1.243v5.061zM70.875 32.283c-.822 0-1.45.303-1.893.92v-.78h-1.168v7.571h1.168v-2.93c.444.605 1.071.908 1.893.908.746 0 1.374-.27 1.903-.822.53-.552.79-1.222.79-2.023 0-.79-.26-1.46-.79-2.011-.53-.552-1.157-.833-1.903-.833zm-1.406 4.088c-.324-.335-.487-.746-.487-1.244 0-.497.163-.908.487-1.233.325-.335.736-.497 1.222-.497.487 0 .898.162 1.222.498.325.324.487.735.487 1.232 0 .498-.162.909-.487 1.244-.324.325-.735.487-1.222.487s-.897-.162-1.222-.487zM77.538 32.424h-1.34V30.91l-1.169.346v1.168h-.995v1.124h.995v2.596c0 1.417.725 1.904 2.51 1.687v-1.049c-.887.043-1.342.054-1.342-.638v-2.596h1.341v-1.124zM81.442 32.283c-.768 0-1.32.281-1.676.833V30.26h-1.168v7.57h1.168v-2.898c0-1.05.551-1.558 1.373-1.558.747 0 1.212.444 1.212 1.255v3.201h1.168v-3.32c0-1.384-.833-2.228-2.077-2.228zM85.944 32.424h-1.168v5.407h1.168v-2.725c0-.552.163-.952.498-1.19a1.689 1.689 0 011.168-.324v-1.266c-.811 0-1.374.336-1.666 1.006v-.908zM92.118 35.322c0 1.05-.552 1.557-1.374 1.557-.746 0-1.211-.443-1.211-1.254v-3.201h-1.168v3.32c0 1.384.833 2.228 2.076 2.228.768 0 1.32-.281 1.677-.833v.692h1.168v-5.407h-1.168v2.898zM95.669 33.916c0-.378.346-.573.79-.573.486 0 .832.205 1.016.616l.984-.551c-.378-.703-1.103-1.125-2-1.125-.563 0-1.039.151-1.417.454-.379.303-.563.703-.563 1.2-.021 1.136 1.07 1.46 1.882 1.666.573.14 1.027.346 1.027.692 0 .4-.302.606-.919.606-.616 0-1.016-.26-1.2-.779l-1.006.584c.346.79 1.135 1.266 2.206 1.266.606 0 1.103-.152 1.504-.444.4-.292.605-.703.605-1.222.022-1.157-1.06-1.503-1.892-1.687-.563-.162-1.017-.346-1.017-.703zM102.411 32.424h-1.341V30.91l-1.168.346v1.168h-.995v1.124h.995v2.596c0 1.417.725 1.904 2.509 1.687v-1.049c-.887.043-1.341.054-1.341-.638v-2.596h1.341v-1.124z"
      ></path>
      <circle cx="93" cy="2" r="2" fill="#2D2C43"></circle>
    </svg>
  );
}

export default Logo

