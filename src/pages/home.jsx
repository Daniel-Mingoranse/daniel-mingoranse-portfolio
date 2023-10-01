import React from 'react';
import '../pages/home.css'
import '../pages/transition'
import perfilImage from '../img/perfil.png';
import buscacep from '../img/buscacep.png'
import climateapp from '../img/climateapp.jpeg'

const Home = () => {
    return (
        <>
            <div id="page-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={perfilImage} alt="Daniel Mingoranse" />
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">Sobre Mim</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#experience">Experiencia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#projetos">Projetos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#education">Formação</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#interests">Hobbys</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#awards">Planos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid p-0">
                    <section className="resume-section" id="about">
                        <div className="resume-section-content">
                            <h1 className="mb-0">
                                Daniel <span className="text-primary"> Mingoranse</span>
                            </h1>
                            <p className="lead mb-5">Desenvolvedor web apaixonado pela área tecnológica, curioso e atencioso em aprender de tudo um pouco com a intenção de transformar ideias, em novas realidade, para melhor e assim profissionalizar minha carreira como um desenvolvedor de ponta.</p>
                            <div className="social-icons">
                                <a className="social-icon" href="https://www.linkedin.com/in/daniel-mingoranse-94530b16a/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="social-icon" href="https://github.com/Full-Daniel-Stack">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </section>
                    <hr className="m-0" />
                    <section className="resume-section" id="experience">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Experiência</h2>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">Técnico de Suporte, SPDM/PAIS</h3>
                                    <div className="subheading mb-3">Associação Paulista para o Desenvolvimento da Medicina, Praia Grande, SP</div>
                                    <p>Atuo no Hospital Irmã Dulce, em Praia Grande, SP, como técnico de suporte. Minhas principais responsabilidades incluem oferecer suporte técnico, gerenciar chamados diários e garantir o bom funcionamento dos sistemas corporativos e da infraestrutura de redes no hospital.</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <span className="text-primary">Outubro 2023 - Presente</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">Técnico de TIC, Poupatempo</h3>
                                    <div className="subheading mb-3">Shopping do Cidadão, Praia Grande, SP</div>
                                    <p>Responsável técnico em oferecer atendimento ao posto Poupatempo de Praia Grande em atendimento de chamados diários, Instalação de infraestrutura de redes, configuração de sistemas corporativos (pagamento de taxas, gestão de atendimento, validação de acessos para atendimento) via Prodesp.</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <span className="text-primary">Agosto 2021 - Setembro 2023</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">Estágio Suporte TI</h3>
                                    <div className="subheading mb-3">Arquis, Santos, SP</div>
                                    <p>Prestar suporte para empresas do setor de Construção civil na utilização de um sistema ERP de gestão de insumos, compras e gastos, via chat e telefone.</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <span className="text-primary">Março 2021 - Abril 2021</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr className="m-0" />
                    <section className="resume-section" id="projetos">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Projetos</h2>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5 ">
                                <div className="project-container"> {/*container projeto*/}
                                    <div className="project-details ">
                                        <h2>Climate App</h2>
                                        <img className="img-fluid img-profile mx-auto mb-2 border" id='climate' src={climateapp} alt="Daniel Mingoranse" width="200" height="200" />
                                        <p className='description'>Projeto desenvolvimento utilizando api weatherapi para fornecer previsao do tempo em tempo real utilizando conceitos react native no expo</p>
                                    </div>
                                    <div className="project-link">
                                        <a href="https://github.com/Daniel-Mingoranse/Climate-App" className="github-link">Ver no GitHub</a>
                                    </div>
                                </div>

                                <div className="project-container"> {/*container projeto*/}
                                    <div className="project-details">
                                        <h2>Buscador CEP</h2>
                                        <img className="img-fluid img-profile mx-auto mb-2 " src={buscacep} alt="Tela Sistema Busca Cep" />
                                        <p className='description'>O "Buscador CEP" é uma aplicação web desenvolvida em React que permite aos usuários buscar informações relacionadas a um CEP específico.</p>
                                    </div>
                                    <div className="project-link">
                                        <a href="https://github.com/Daniel-Mingoranse/buscaCEP" className="github-link">Ver no GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr className="m-0" />
                    <section className="resume-section" id="education">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Formação</h2>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">Técnico em Informática</h3>
                                    <div className="subheading mb-3">ETEC Dra. Ruth Cardoso, São Vicente, SP</div>
                                    <div>Curso técnico em Informática, com foco em tecnologia e desenvolvimento de software. Realizado na Etec, visa a inserção na área tecnologia para a criação de sistemas e plataformas web.</div>
                                </div>
                                <div className="flex-shrink-0">
                                    <span className="text-primary">Julho 2016 - Dezembro 2017</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-between">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">Sistemas para Internet (SI)</h3>
                                    <div className="subheading mb-3">Fatec Rubens Lara, Santos, SP</div>
                                </div>
                                <div className="flex-shrink-0">
                                    <span className="text-primary">Julho 2018 - Cursando</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr className="m-0" />
                    <section className="resume-section" id="interests">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Hobbies</h2>
                            <p>Atualmente me dedico sempre estar em constante aprendizado, a partir disso procuro me aplicar aos estudos musicais, como tocar violino, buscando sempre me aprimorar e trazer o meu melhor, levando consigo cultura e arte, mediante um som de qualidade.</p>
                            <p className="mb-0">Me aplico também em uma arte marcial, como o Karatê, que contribuiu muito para o meu bem-estar e qualidade de vida, tanto profissional como acadêmica.</p>
                        </div>
                    </section>
                    <hr className="m-0" />
                    <section className="resume-section conteudo" id="awards">
                        <div className="resume-section-content">
                            <h2 className="mb-3">Caminhos longos, aprendizados eternos</h2>
                            <p>"Em nossa jornada, descobrimos que o aprendizado nos leva a lugares incríveis! 🚀😄
                                Entre meus planos, está construir uma carreira de sucesso e explorar novas tecnologias 🌟. Além disso, adoro fazer novas amizades no meio profissional e aprender com pessoas incríveis.
                                Meu foco principal está no desenvolvimento web, mas tenho um forte interesse em brincar com dados e transformá-los em insights valiosos 📊. Venha fazer parte dessa jornada! Conto com seu apoio e sua energia positiva para tornar tudo ainda mais emocionante! 💪🤝"</p>
                        </div>
                    </section>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/scripts.js"></script>
            </div>
        </>
    );
}

export default Home;
