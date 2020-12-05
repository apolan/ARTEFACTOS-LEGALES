<?php
get_header();
?>
<script>
    var page = "home";
</script>


<div class="container" >
    <div class="row justify-content-center section-general">

        <div class="col-sm-5 text-center text-center">
            <h1  class="txt-titulo-proyecto text-center">
                CONSULTE<BR>
                SIN MIEDO
            </h1>
            <p class="txt-subtitulo-1 color-txt-gray text-center">Situaciones de ciudadanos de a pie</p> 

            <p class="space-lg"></p> 

            <p class="txt-subtitulo-2 text-center">
                CONSTRUCCIÓN DE INTERFACES LEGALES
            </p>
            <p class="txt-titulo-proyecto-2 text-center">
                CONOCER
            </p>
        </div>
        <div class="col-sm-1 text-center">
        </div>
        <div class="col-sm-3 text-center bottom-row">
            <div class="bottom-row row">
                <p class="txt-subtitulo-3">
                    CAPÍTULO 1.<br> ARTEFACTOS LEGALES
                </p>
                <p class="txt-normal-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis laoreet massa. Donec vitae lorem metus. Praesent varius augue pharetra mauris tempus, facilisis dignissim mauris pulvinar. Proin id justo ut velit dignissim dictum quis iaculis quam. Etiam mollis est pulvinar bibendum malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent suscipit lectus eget auctor aliquet. Vestibulum eleifend luctus porttitor. Nullam pretium, odio a luctus vulputate, risus diam lobortis felis, iaculis ultrices libero urna ac dolor. Curabitur luctus risus neque, venenatis eleifend augue finibus a. Morbi eget nibh quis turpis porttitor luctus sed ac augue. Etiam a velit congue, bibendum risus id, rutrum tortor. Sed rutrum et eros sit amet commodo. Curabitur fringilla nibh sit amet tortor aliquet, finibus blandit metus placerat. Nullam ullamcorper non nisl sed sollicitudin. Mauris et pharetra mi.
                    <br>
                    <br>
                    Curabitur fringilla nibh sit amet tortor aliquet, finibus blandit metus placerat. Nullam ullamcorper non nisl sed sollicitudin. Mauris et pharetra mi.
                </p>
            </div>
        </div>

    </div>
</div>
<p class="space-lg"></p>
<!-- * * * * * * * * * * * * * * * * * * * DECADA 1960 INICIO -->
<div class="row section-preguntas color-bkg-gray-1 color-txt-black">
    <div class="col-md-1 "></div>
    <div class="col-md-6 ">
        <p  class="txt-subtitulo-1 ">
            ¿Qué es una artefacto legal?
        </p>
        <p  class="txt-normal-1">
            Curabitur fringilla nibh sit amet tortor aliquet, finibus blandit metus placerat. Nullam ullamcorper non nisl sed sollicitudin. Mauris et pharetra mi.
        </p>
        <p  class="txt-subtitulo-1">
            ¿Qué es una interfaz legal?
        </p>
        <p  class="txt-normal-1">
            Curabitur fringilla nibh sit amet tortor aliquet, finibus blandit metus placerat. Nullam ullamcorper non nisl sed sollicitudin. Mauris et pharetra mi.  
        </p>
    </div>
    <div class="col-md-4"></div>
</div>

<div class="row section-preguntas color-bkg-gray-1 color-txt-black">
    <div class="col-md-1 "></div>
    <div class="col-md-6 ">
        <p  class="txt-subtitulo-1 ">
            ¿Qué es un territorio?
        </p>
        <p  class="txt-normal-1">
            Curabitur fringilla nibh sit amet tortor aliquet, finibus blandit metus placerat. Nullam ullamcorper non nisl sed sollicitudin. Mauris et pharetra mi. 
        </p>
    </div>
    <div class="col-md-4"></div>
</div>
<div class="row section-preguntas color-bkg-secundary color-txt-white" onclick="window.location.href = '<?php echo get_permalink(get_page_by_title('ARTEFACTOS')); ?>'">
    <div class="col-md-12 ">
        <p id="label-d1960" class="txt-titulo-vecino">
            Explorar
        </p>
        <p id="label-d1960" class="txt-titulo-vecino">
            un territorio
        </p>
    </div>
</div>



<?php
get_footer();
?>