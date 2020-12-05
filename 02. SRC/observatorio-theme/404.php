<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
get_header();
?>
<script>
    window.location.replace("<?php echo home_url(); ?>");
</script>

<?php get_footer(); ?>