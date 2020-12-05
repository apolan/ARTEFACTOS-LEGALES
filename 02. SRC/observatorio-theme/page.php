<?php
get_header();
//session_start();
$_SESSION['login_user'] = $username;  // Initializing Session with value of PHP Variable
echo $_SESSION['login_user'];
?>

<?php ?>

<?php
if (have_posts()) : while (have_posts()) : the_post();
        get_template_part('content', get_post_format());

        $pagename = get_query_var('pagename');
        $contentPage = get_the_content();
        if ($pagename == "artefactos") {
            ?>

            <div id="preguntas"></div>

            <div class="menu-config-title">
                <p class="txt-subtitulo-1-smll">Mi búsqueda</p>
            </div>

            <div id="settings" class="menu-config"><ul id="settingsList"></ul></div>

            <div id="mnfilter"  class="menu-filter" >

                <p class="txt-subtitulo-1-smll">¿Qué quieres preguntar?</p>

                <div class="row option-filter">
                    <div class="a">
                        <p class="txt-normal-1 color-txt-white">¿Cuál es la información vigente?</p>    
                    </div>
                </div>

                <div class="row option-filter">
                    <div class="a">
                        <p class="txt-normal-1 color-txt-white">¿Bajo que condiciones denunciar?</p>    
                    </div>
                </div>
                <div class="row option-filter">
                    <div class="a">
                        <p class="txt-normal-1 color-txt-white">¿Que efectos se pueden generar?</p>    
                    </div>
                </div>

                <div class="row option-filter">
                    <div class="a">
                        <p class="txt-normal-1 color-txt-white">¿A que canales acudir por ayuda?</p>    
                    </div>
                </div>


            </div>

            <div id="mn-legal" class="menu-config-legal">
                <p class="txt-subtitulo-1-smll">Tu Nivel de<br> ciudadano de a pie</p>
                <div class="row option-filter">
                    <div class="a">
                        <p class="txt-normal-1 color-txt-white">Nivel de codificación</p>    
                    </div>
                </div>
            </div>

            <div id="mn-legal" class="menu-visor-legal">
                <p class="txt-subtitulo-1-smll">Visor</p>

            </div>


            <div id="dash" class="section-dashboard-1 justify-content-center">
                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <div class="col-xs-11">
                            <!-- Cazador Historias section -->
                            <div class="row panel justify-content-center space-sm">
                                <div class="space-md">
                                    <h2 class="txt-subtitulo-3 ">Territorio Financiero - Información detallada</h2>
                                    <div class="space-md"></div>
                                </div>
                            </div>
                            <div id="panel-cazador">                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                $('#dash').hide();
                $("#menu-filter").hide();
                indexPregunta = 1;
                createPregunta(indexPregunta);

            </script>
            <?php
        } elseif ($pagename == "bitacora") {
            ?>

            <div class="container" >
                <div class="row justify-content-center section-general">
                    <div class="col-sm-12 text-center text-center">
                        <h1  class="txt-titulo-proyecto text-center">
                            BITÁCORA<BR>
                        </h1>
                        <p class="txt-subtitulo-1 color-txt-gray text-center">Registro del proyecto</p> 
                        <p class="space-lg"></p> 
                    </div>
                </div>
                <div class="row justify-content-center section-general">
                    <p class="txt-titulo-proyecto-2 text-center">
                        Línea del tiempo
                    </p>
                </div>
                <div class="row justify-content-center section-general">
                    <p class="txt-titulo-proyecto-2 text-center">
                        Registro
                    </p>
                </div>
            </div>

            <?php
        }
    endwhile;
endif;
?>
<?php get_footer(); ?>