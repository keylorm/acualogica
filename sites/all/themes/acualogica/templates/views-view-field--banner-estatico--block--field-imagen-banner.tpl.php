<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
?>
<?php
    //verificar el primer argumento del url
    $arg0 = arg(0);
    $arg1 = arg(1);
    global $base_path;
    //evaluamos la ruta para mostrar el banner perteneciente al nodo (clientes-testimonios-quienes-somos)
    if($arg0 == "clientes"){
        if ($row->nid == 26){
            print "<div class=\"banner-clientes\"><div class=\"imagen-banner\"><img src=\"".$base_path."/sites/default/files/".$row->_field_data['nid']['entity']->field_imagen_banner['und'][0]['filename']."\"></div><div class=\"body-content\"><div class=\"paragraph\"><p>".$row->_field_data['nid']['entity']->body['und'][0]['value']."</p></div></div></div>";
        } 
    }elseif($arg0 == "testimonios"){
        if ($row->nid == 27){
            print "<div class=\"banner-clientes\"><div class=\"imagen-banner\"><img src=\"".$base_path."/sites/default/files/".$row->_field_data['nid']['entity']->field_imagen_banner['und'][0]['filename']."\"></div><div class=\"body-content\"><div class=\"paragraph\"><p>".$row->_field_data['nid']['entity']->body['und'][0]['value']."</p></div></div></div>";
        } 
    }elseif(($arg0 == "node") && ($arg1 == 1)){
        if ($row->nid == 31){
            print "<div class=\"banner-clientes\"><div class=\"imagen-banner\"><img src=\"".$base_path."/sites/default/files/".$row->_field_data['nid']['entity']->field_imagen_banner['und'][0]['filename']."\"></div><div class=\"body-content\"><div class=\"paragraph\"><p>".$row->_field_data['nid']['entity']->body['und'][0]['value']."</p></div></div></div>";
        } 
    }
    
?>