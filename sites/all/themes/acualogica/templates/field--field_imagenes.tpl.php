<?php
/*<div class="photo-title"><?php print($item['#item']['title']); ?>

      <div>
 * 
 * 
 */

  $columns = 4;
  $rows = array_chunk($items, $columns);
?>
<div class="field field-name-field-imagenes field-type-image field-label-hidden">
<table class="mini-gallery">
  <tbody>
    <?php foreach ($rows as $row_number => $columns): ?>
      <?php
        $row_class = 'row-' . ($row_number + 1);
        if ($row_number == 0) {
          $row_class .= ' row-first';
        }
        if (count($rows) == ($row_number + 1)) {
          $row_class .= ' row-last';
        }
      ?>
      <tr class="<?php print $row_class; ?>">
        <?php foreach ($columns as $column_number => $item): ?>
          <td class="<?php print 'col-'. ($column_number + 1); ?>">
      <div class="photo-image"><?php print render($item); ?></div>
      
          </td>
        <?php endforeach; ?>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
</div>
