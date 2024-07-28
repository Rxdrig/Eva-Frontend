export const HomePage = () => {
  return (
    <>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/Heroes/spiderbat-home.png"
              alt="spiderbatdatos"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/Heroes/snk-home.png"
              alt="snk"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/Heroes/spiderman-home.png"
              alt="spiderman"
              class="d-block w-100"
            />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <div class="p-5 text-black rounded" style={{ marginLeft: "42%" }}>
        <h1>Bienvenidos</h1>
      </div>
      <p style={{ textAlign: "center" }}>
        En Nuestro sitio web, te invitamos a sumergirte en dos mundos
        fascinantes y llenos de aventuras: el anime y los cómics. Nuestra
        plataforma está diseñada para ofrecerte una experiencia única, donde
        podrás explorar una amplia variedad de títulos y descubrir nuevas
        historias que te cautivarán.
      </p>
      <div class="p-5 text-black rounded" style={{ marginLeft: "42%" }}>
        <h4>Sección de Anime</h4>
      </div>
      <p style={{ textAlign: "center" }}>
        En nuestra sección de anime, encontrarás una vasta colección de títulos
        que abarcan todos los géneros y estilos. Desde clásicos inolvidables
        hasta las últimas tendencias, cada anime viene acompañado de una breve
        descripción que te ayudará a encontrar tu próxima serie favorita.
        Nuestro objetivo es que disfrutes cada minuto y te sumerjas en los
        universos fantásticos que solo el anime puede ofrecer.
      </p>
      <div class="p-5 text-black rounded" style={{ marginLeft: "42%" }}>
        <h4>Sección de Comics</h4>
      </div>
      <p style={{ textAlign: "center" }}>
        Para los amantes de los cómics, hemos creado una sección igualmente
        impresionante. Aquí podrás explorar una diversa selección de cómics de
        todo el mundo, cada uno con una breve descripción que te permitirá
        conocer un poco más sobre las tramas y personajes que los conforman.
        Desde los superhéroes más icónicos hasta las novelas gráficas más
        innovadoras, nuestra colección está diseñada para satisfacer todos los
        gustos y preferencias.
      </p>
      <div class="p-5 text-black rounded" style={{ marginLeft: "43%" }}>
        <h4>Login/Logout</h4>
      </div>
      <p style={{ textAlign: "center" }}>
        Nuestra página web cuenta con funcionalidades de login y logout, que
        actualmente se presentan como un prototipo para mostrar cómo se
        implementarán en la versión final del sitio. Estas funciones permiten a
        los usuarios acceder a áreas personalizadas y protegidas, garantizando
        una experiencia segura y personalizada.
      </p>
    </>
  );
};
